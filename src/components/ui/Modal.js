import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ show, className, children }) => {
  if (!show) return null;

  const classes = `modal w-11/12 lg:w-2/4 bg-white dark:bg-dark rounded p-10 shadow-xl lg:shadow ${className}`;

  return createPortal(
    <div id="modal-backdrop">
      <motion.div
        animate={{ opacity: [0.75, 1], scale: [1.1, 1] }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className={classes}
        exit={{ opacity: 0, scale: 0 }}
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("root-modal")
  );
};

const ModalHeader = ({ className, children }) => {
  const classes = `modal-header ${className}`;
  return <div className={classes}>{children}</div>;
};

const ModalBody = ({ className, children }) => {
  const classes = `modal-body ${className}`;
  return <div className={classes}>{children}</div>;
};

const ModalFooter = ({ className, children }) => {
  const classes = `modal-footer ${className}`;
  return <div className={classes}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
