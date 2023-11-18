import DropDown from "./components/DropDown";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "Green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <DropDown options={options} value={selection} onChange={handleSelect} />
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
export default App;
