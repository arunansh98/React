import Modal from "../../../../components/Modal";
import Close from "../../../../assets/images/close.png";
import classNames from "classnames";
import TextInput from "../../../../components/TextInput";
import DropDown from "../../../../components/DropDown";
import { useState } from "react";
import { GoQuestion } from "react-icons/go";

function SignUpModal({ onClose }) {
  const inputClassNames = classNames(
    "rounded-[5px] w-[194px] h-[40px] p-[11px]",
    "border bg-[#f5f6f7]",
    "focus-within:outline-none"
  );

  const dropDownClassNames = classNames(
    "horizontal-align border items-center",
    "w-[125px] h-[36px] justify-between rounded-[5px]"
  );

  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState(undefined);

  const [selectedMonth, setSelectedMonth] = useState(undefined);

  const [selectedYear, setSelectedYear] = useState(undefined);

  const dateOfBirthOptions = Array(31)
    .fill("")
    .map((_item, index) => {
      return { key: index + 1, label: index + 1 };
    });

  const monthOptions = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
      month: "short",
    });
  }).map((month, index) => {
    return {
      label: month,
      key: index,
    };
  });

  const yearOptions = Array(119)
    .fill("")
    .map((_item, index) => {
      return { key: index + 1, label: 2023 - parseInt(index) };
    });

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
          <div className="horizontal-align justify-start items-center font-secondary text-[12px] text-[#606770]">
            Date of birth
            <GoQuestion className="ml-1" />
          </div>
          <div className="horizontal-align mb-3 justify-between">
            <DropDown
              className={dropDownClassNames}
              label="Date of birth"
              options={dateOfBirthOptions}
              selected={selectedDateOfBirth}
              handleSelectChange={setSelectedDateOfBirth}
            />
            <DropDown
              className={dropDownClassNames}
              options={monthOptions}
              selected={selectedMonth}
              handleSelectChange={setSelectedMonth}
            />
            <DropDown
              className={dropDownClassNames}
              options={yearOptions}
              selected={selectedYear}
              handleSelectChange={setSelectedYear}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;
