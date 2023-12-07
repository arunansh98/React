import Login from "./components/Login";
import Logo from "./components/Logo";

function Home() {
  return (
    <div>
      <div className="h-3/6 m-auto bg-[#f0f2f5] p-[13rem]">
        <div className="horizontal-align items-center justify-center">
          <Logo className="w-3/6" />
          <div className="vertical-align items-center">
            <Login className="w-3/6" />
            <span className="mt-6 text-[14px]">
              <a className="font-bold" href="##">
                Create a Page{" "}
              </a>
              for a celebrity, brand or business.
            </span>
          </div>
        </div>
      </div>
      <div className="h-3/6 m-auto">Footer</div>
    </div>
  );
}

export default Home;
