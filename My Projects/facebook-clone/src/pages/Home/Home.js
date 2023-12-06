import Login from "./components/Login";
import Logo from "./components/Logo";

function Home() {
  return (
    <div>
      <div className="h-3/6 m-auto bg-[#f0f2f5] p-[13rem]">
        <div className="flex flex-row items-center justify-center">
          <Logo />
          <div className="flex flex-col justify-center w-3/6">
            <Login />
            <hr />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="h-3/6 m-auto">Footer</div>
    </div>
  );
}

export default Home;
