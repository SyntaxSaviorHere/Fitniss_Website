import { Fragment, useState } from "react";
import classes from "./Modal.module.css";

export const ModalOverlay = (props) => {
  const closeModal = () => {
    props.setModal((prevState) => !props.modal);
  };
  return <div onClick={closeModal} className={classes.modalOverlay}></div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.modal}>
        <button
          className={classes.close}
          onClick={() => props.setModal((prevState) => !props.modal)}
        >
          X
        </button>
        {props.content}
      </div>
      <ModalOverlay modal={props.modal} setModal={props.setModal} />
    </Fragment>
  );
};

export default Modal;
