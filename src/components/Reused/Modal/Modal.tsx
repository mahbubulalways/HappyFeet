import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50"
      ></div>

      {/* Modal Content */}
      <div className="bg-white w-full max-w-lg px-8 pt-5 z-10">
        {/* Modal Header */}
        <div className="flex justify-end">
          <button
            className="text-gray-800 hover:text-gray-900 flex justify-end"
            onClick={onClose}
          >
            <HiOutlineXMark className="h-7 w-7" />
          </button>
        </div>

        <h2 className="text-3xl uppercase text-center poppins-medium ">
          {title}
        </h2>
        <div className="pb-10 pt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
