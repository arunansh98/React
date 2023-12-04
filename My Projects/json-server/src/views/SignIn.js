import { useCallback, useEffect, useState } from "react";
import "../App.css";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function SignIn() {
  //Initialize email and password useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const [posts, setPosts] = useState(undefined);

  const fetchData = useCallback(async () => {
    if (uid && accessToken) {
      const posts = await axios.get("http://localhost:3005/posts", {
        params: {
          userId: uid,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setPosts([...posts.data]);
      //   console.log("posts", posts);
    }
  }, [uid, accessToken]);

  useEffect(() => {
    fetchData();
  }, [uid, accessToken, fetchData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3005/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("login successful!");
        console.log("res", res);
        setAccessToken(res.data.accessToken);
        setUid(res.data.user.id);
      })
      .catch((err) => {
        console.log("login failed!");
        console.log("err", err);
      });
  };

  const handleAddPost = () => {
    const data = {
      title: faker.commerce.productName(),
      photoUrl: faker.image.abstract(150, 150, true),
      userId: parseInt(uid),
    };
    axios
      .post(`http://localhost:3005/posts`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("post added successfully");
        console.log("res", res);
        setPosts([...posts, ...res.data]);
      })
      .catch((err) => {
        console.log("post addition failed!!");
        console.log("err", err);
      });
  };

  let content = "No posts found !";

  if (posts !== undefined && posts.length > 0) {
    content = posts.map((post) => (
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          marginRight: "2rem",
        }}
        key={post.id}
      >
        <h1>Title : {post.title}</h1>
        <img src={post.photoUrl} alt="random_post" />
      </div>
    ));
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
          <button onClick={handleAddPost}>Add Posts</button>
        </div>
      </form>
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default SignIn;
