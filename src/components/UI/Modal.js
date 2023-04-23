import styles from "./Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalOverlayElement = document.getElementById("overlays");
const portalBackdropElement = document.getElementById("backdrop");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalBackdropElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlayElement
      )}
    </>
  );
};

export default Modal;
