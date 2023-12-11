import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function DropDown({ ...props }) {
  const { className, label, options, selected, onChange, ...rest } = props;
  const [showOptions, setShowOptions] = useState(false);
  const dropDownEl = useRef();

  const contentOptions = options.map((option) => {
    return (
      <div
        key={option.key}
        className="px-[10px]"
        onClick={() => onChange(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const handler = (event) => {
      if (!dropDownEl.current) {
        return;
      }

      if (!dropDownEl.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div className="relative" ref={dropDownEl}>
      <button
        className={className + ' p-[10px]'}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div>{selected?.label || 'Select'}</div>
        <GoChevronDown />
      </button>
      {showOptions && (
        <div className="absolute border w-full h-[199px] overflow-y-scroll bg-[#fff]">
          <button
            className="vertical-align"
            onClick={() => setShowOptions(false)}
          >
            {contentOptions}
          </button>
        </div>
      )}
    </div>
  );
}

export default DropDown;
