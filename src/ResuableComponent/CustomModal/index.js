// Modal.js
import React from "react";
import "./CustomModal.scss";
import { IoIosCloseCircle } from "react-icons/io";

import { Modal } from "react-bootstrap";
const CustomModal = ({ isOpen, onClose, title, subTitle, children }) => {
  // if (!isOpen) return null;

  return (
    <Modal backdropClassName="modal-backdrop" show={isOpen} onClick={onClose}>
      <div className="modal-container position-relative" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header d-flex flex-row align-items-start">
          <div className="d-flex flex-column">
            <div className="main-title">{title}</div>
            <div className="sub-title mt-2">{subTitle}</div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;
