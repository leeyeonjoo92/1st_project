import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <div className={`${classes.modal} ${show ? classes.show : ""}`}>
      <span>홈페이지를 제작할 준비가 되셨나요?</span>
      <button onClick={handleClose}>지금 시작하기</button>
    </div>
  );
};

export default Modal;
