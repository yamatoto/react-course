import React from "react";

const Modal = ({
  onCancel,
  onConfirm,
}: {
  onCancel: React.MouseEventHandler;
  onConfirm: React.MouseEventHandler;
}) => {
  function cancelHandler(event: React.MouseEvent<Element, MouseEvent>) {
    onCancel(event);
  }

  function confirmHandler(event: React.MouseEvent<Element, MouseEvent>) {
    onConfirm(event);
  }

  return (
    <div className="modal">
      <p>Are you sure？</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
