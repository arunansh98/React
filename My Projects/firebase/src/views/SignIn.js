import { useState } from "react";
import "../App.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { faker } from "@faker-js/faker";

function SignIn() {
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://facebook-clone-e1a12-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyB9otUfaHfkmNLSvJNv-VFaQqaAGrP7nXQ",
    authDomain: "facebook-clone-e1a12.firebaseapp.com",
    projectId: "facebook-clone-e1a12",
    storageBucket: "facebook-clone-e1a12.appspot.com",
    messagingSenderId: "413238580381",
    appId: "1:413238580381:web:1c72093addb28d921ab074",
    measurementId: "G-S9YVYTEQ30",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize email and password useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photos, setPhotos] = useState(undefined);

  const handleSubmit = (event) => {
    // prevent default form submit behaviour
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        console.log("signed in!!");
        fetchData();
        // ...
      })
      .catch((error) => {
        console.log("error!!", error);

        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const fetchData = () => {
    // Initialize Realtime Database and get a reference to the service
    // const database = getDatabase(app);
    // console.log("database", database);
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, "photos"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const photos = Object.keys(snapshot.val())
            .filter((key) => snapshot.val()[key].email === email)
            .map((key) => {
              return {
                ...snapshot.val()[key],
                key,
              };
            });

          console.log("snapshot", photos);
          setPhotos(photos);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let content = "No photos found !!";

  if (photos !== undefined && photos.length > 0) {
    content = photos.map((photo) => {
      return (
        <div
          key={photo.key}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <h1>Title : {photo.title}</h1>
          <img src={photo.photoUrl} alt="random" />
        </div>
      );
    });
  }

  const handleAddPhoto = () => {
    addNewPhoto();
  };

  function addNewPhoto() {
    const db = getDatabase();

    // A post entry.
    const postData = {
      email,
      title: faker.commerce.productName(),
      photoUrl: faker.image.abstract(150, 150, true),
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), "photos")).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/photos/" + newPostKey] = postData;

    return update(ref(db), updates);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="horizontal-container">
          <div className="vertical-container mr-1">
            <label className="mr-1">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="vertical-container">
            <label className="mr-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="vertical-container">
          <button disabled={!email || !password} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="vertical-container">
          <button onClick={handleAddPhoto}>Add Photo for this user</button>
        </div>
      </form>
      {content}
    </div>
  );
}

export default SignIn;
