import Modal from "../../../../components/Modal";
import Close from "../../../../assets/images/close.png";
import classNames from "classnames";
import TextInput from "../../../../components/TextInput";
import DropDown from "../../../../components/DropDown";

function SignUpModal({ onClose }) {
  const inputClassNames = classNames(
    "rounded-[5px] w-[194px] h-[40px] p-[11px]",
    "border bg-[#f5f6f7]",
    "focus-within:outline-none"
  );

  const dropDownClassNames = classNames(
    "w-[125px] h-[36px] border focus-within:outline-none",
    "rounded-[5px] py-[0] pl-[8px] pr-[20px]"
  );

  return (
    <Modal>
      <div className="vertical-align">
        <div className="horizontal-align justify-between items-center px-3">
          <h1 className="font-bold font-secondary text-[32px] text-black">
            Sign Up
          </h1>
          <img src={Close} alt="close" onClick={onClose} />
        </div>
        <div className="text-[15px] text-[#606770] font-secondary px-3">
          Its quick and easy.
        </div>
        <hr className="mt-2" />
        <div className="p-[16px]">
          <div className=" horizontal-align mb-3">
            <TextInput
              className={inputClassNames + " mr-2"}
              type="text"
              placeholder="First Name"
            />
            <TextInput
              className={inputClassNames}
              type="text"
              placeholder="Surname"
            />
          </div>
          <TextInput
            className={inputClassNames + " w-full mb-3"}
            type="text"
            placeholder="Mobile number or email address"
          />
          <TextInput
            className={inputClassNames + " w-full mb-3"}
            type="password"
            placeholder="New password"
          />
          <div className="horizontal-align mb-3">
            <DropDown className={dropDownClassNames} label="Date of birth" />
            <DropDown className={dropDownClassNames + " ml-[12px]"} />
            <DropDown className={dropDownClassNames + " ml-[12px]"} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
