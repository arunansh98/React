import FacebookLogo from "../../../assets/images/facebook-logo.svg";

function Logo() {
  return (
    <div className="flex justify-end pr-[32px]">
      <div className="vertical-align items-start">
        <img src={FacebookLogo} alt="logo" className="h-[106px] m-[-28px]" />
        <h1 className="text-[28px] w-[500px] leading-[32px] font-logo mt-[1.2rem]">
          Facebook helps you connect and share with the people in your life.
        </h1>
      </div>
    </div>
  );
}

export default Logo;
