import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed m-auto h-[515px] w-[430px] inset-0 rounded-[6px] bg-white">
        <div className="flex flex-col justify-between">{children}</div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
}

export default Modal;
