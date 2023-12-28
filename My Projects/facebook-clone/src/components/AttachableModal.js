import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./AttachableModal.css";

const AttachableModal = ({
  targetElementRef,
  children,
  alignVertically,
  alignHorizontally,
}) => {
  const calculatePosition = () => {
    if (!targetElementRef?.current) return null;

    const targetRect = targetElementRef?.current?.getBoundingClientRect();

    let modalStyle = {
      position: "absolute",
    };

    let horizontalStyle = {
      right: {
        right: `${
          window.innerWidth -
          targetRect.left -
          targetElementRef?.current?.offsetWidth
        }px`,
      },
      left: { left: `${targetRect.left + window.scrollX}px` },
      center: {
        left: `${targetRect.left + targetRect.width / 2}px`,
        transform: "translateX(-50%)",
      },
    };

    let verticalStyle = {
      below: {
        top: `${targetRect.bottom}px`,
      },
      above: {
        bottom: `${window.innerHeight - targetRect.top}px`,
      },
    };

    modalStyle = {
      ...modalStyle,
      ...verticalStyle?.[alignVertically],
      ...horizontalStyle?.[alignHorizontally],
    };

    return modalStyle;
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          id="attachable-modal"
          className="attachable-modal"
          style={calculatePosition()}
        >
          <div className="modal-content">{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};

export default AttachableModal;
