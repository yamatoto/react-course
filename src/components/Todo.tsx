import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title }: { title: string }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Fragment>
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
          <Backdrop onCancel={closeModalHandler} />
        </Fragment>
      )}
    </div>
  );
};

export default Todo;
