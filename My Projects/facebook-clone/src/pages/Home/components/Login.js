import { useState } from "react";
import TextInput from "../../../components/TextInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="home" className="login-container">
      <form>
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address or phone number"
          type="text"
        />
        <TextInput
          className="horizontal-align"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <button className="text-[#fff] text-[20px] font-bold bg-blue border-blue w-[364px] py-[11px] px-[16px] rounded-[6px] mb-4">
          Log in
        </button>
      </form>
      <button className="mb-4 text-blue text-[14px]">
        Forgotten password?
      </button>
      <hr className="mb-6" />
      <button className="text-[#fff] text-[17px] font-bold bg-green py-[11px] px-[16px] rounded-[6px] border-green">
        Create new account
      </button>
    </div>
  );
}

export default Login;
