import "../App.css";
import { useState } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { jwtDecode } from "jwt-decode";

function SignUp() {
  //Initialize email and password useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [uid, setUid] = useState("");

  const handleSubmit = (event) => {
    // prevent default form submit behaviour
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);
    axios
      .post("http://localhost:3005/register", {
        email,
        password,
      })
      .then((res) => {
        console.log("sign up successful!!");
        console.log("res", res);
        console.log("jwt decode", jwtDecode(res.data.accessToken));
        setUid(jwtDecode(res.data.accessToken).sub);
        setAccessToken(res.data.accessToken);
      })
      .catch((err) => {
        console.log("sign up failed!!");
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
      })
      .catch((err) => {
        console.log("post addition failed!!");
        console.log("err", err);
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
      <button onClick={handleAddPost}>Add Posts</button>
    </div>
  );
}

export default SignUp;
