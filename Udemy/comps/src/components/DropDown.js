import { useState } from "react";

function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
