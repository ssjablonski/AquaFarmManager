import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-600 bg-opacity-90">
            <div className="w-full max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-black-400">
                {children}
            </div>
        </div>
    );
};

export default Modal;
