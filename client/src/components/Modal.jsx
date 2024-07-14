import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-600 bg-opacity-90">
            <div className="relative w-full max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-black-400">
                <div className="absolute right-0 top-0 pr-4 pt-2">
                    <button onClick={onClose} className="p-2 text-3xl font-bold">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
