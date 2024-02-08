import classNames from "classnames";
import { AiOutlinePlus } from "react-icons/ai";

function BlueOutlineAnchor({ label, href, className }) {
  const blueOutline = (
    <AiOutlinePlus className="h-[24px] w-[24px] mr-2 p-[4px] border-blue border-solid border-[2px] rounded-[100px]" />
  );
  className = classNames(
    className,
    "flex flex-row text-blue items-center cursor-pointer hover:underline"
  );
  return (
    <a className={className} href={href}>
      {" "}
      {blueOutline}
      <span className="font-[500] text-[15px]">{label}</span>
    </a>
  );
}

export default BlueOutlineAnchor;
