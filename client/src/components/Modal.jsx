import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="bg-black-600 fixed inset-0 flex items-center justify-center bg-opacity-85">
            <div className="w-full max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg">{children}</div>
        </div>
    );
};

export default Modal;
