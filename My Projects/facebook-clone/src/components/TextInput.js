import PasswordHide from "../assets/images/eye-password-hide.svg";
import classNames from "classnames";

function TextInput({ ...rest }) {
  const isPassword = rest.type === "password";
  const inputClassName = classNames(isPassword && "!w-[93%] mr-1");
  const divClassName = classNames(rest.className);
  return (
    <div className={divClassName}>
      <input className={inputClassName} {...rest} />
      {isPassword && <img className="w-[7%]" src={PasswordHide} alt="hide" />}
    </div>
  );
}

export default TextInput;
