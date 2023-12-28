import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AttachableModal.css";

const AttachableModal = ({
  targetElement,
  children,
  alignVertically,
  alignHorizontally,
}) => {
  const calculatePosition = () => {
    if (!targetElement) return null;

    const targetRect = targetElement.getBoundingClientRect();

    let modalStyle = {
      position: "absolute",
    };

    let horizontalStyle = {
      left: {
        right: `${
          window.innerWidth - targetRect.left - targetElement.offsetWidth
        }px`,
      },
      right: { left: `${targetRect.left + window.scrollX}px` },
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
