import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

import CloseIcon from "@/app/icons/CloseIcon";
import Backdrop from "./Backdrop";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import RootModalContent from "@/app/pages/Wrapper/RootModalContent";

type Props = {
  isShow: boolean;
  handleClose: Function;
  maxWidth?: number;
  display?: string;
};

const Modal: React.FC<Props> = ({ isShow, handleClose, maxWidth, display }) => {
  const [isRenderedOnServerSide, setIsRenderedOnServerSide] =
    useState<boolean>(false);
  useEffect(() => {
    if (isShow) {
      setIsRenderedOnServerSide(true);
    }
  }, [isShow]);

  const closeModal = () => {
    setIsRenderedOnServerSide(false);
    setTimeout(() => {
      handleClose();
    }, 200);
  };

  if (!isShow) return null;

  return createPortal(
    <div
      className={`${styles.modal} ${
        isRenderedOnServerSide ? styles.active : ""
      }`}
    >
      <div
        style={maxWidth ? { maxWidth: maxWidth, width: "100%" } : {}}
        className={styles.modalContainer}
      >
        <div>
          <div className={styles.modalTop}>
            <img
              className={styles.modalLogo}
              src="/logo.png"
              alt="Logo"
              width="100"
              height="68"
            />

            <div className={styles.modalControls} onClick={() => closeModal()}>
              <CloseIcon width={18} height={18} />
            </div>
          </div>
          <div className={styles.modalMain}>
            <RootModalContent 
              handleClose={closeModal}
            />
          </div>
        </div>
      </div>
      <Backdrop onClick={closeModal} transparent={true} />
    </div>,
    document.getElementById("modal-root")!!
  );
};

export default Modal;
