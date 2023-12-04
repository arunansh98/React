import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../App.css";
import { useState } from "react";

function SignUp() {
  const firebaseConfig = {
    apiKey: "AIzaSyB9otUfaHfkmNLSvJNv-VFaQqaAGrP7nXQ",
    authDomain: "facebook-clone-e1a12.firebaseapp.com",
    projectId: "facebook-clone-e1a12",
    storageBucket: "facebook-clone-e1a12.appspot.com",
    messagingSenderId: "413238580381",
    appId: "1:413238580381:web:1c72093addb28d921ab074",
    measurementId: "G-S9YVYTEQ30",
  };

  //Initialize email and password useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // prevent default form submit behaviour
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("Signed up !!!");
        // ...
      })
      .catch((error) => {
        console.log("Error !!!");

        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      </form>
    </div>
  );
}

export default SignUp;
