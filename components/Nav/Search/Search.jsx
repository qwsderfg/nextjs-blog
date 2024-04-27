import React from "react";
import { IoClose } from "react-icons/io5";

export default function ConnectModal({ visible, onClose }) {
  const handleOnClose = () => {};
  if (!visible) return null;

  return (
    <div class="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div class="bg-white p-2 rounded relative zIndex-96">
        <div className=" shadow ">
          <IoClose
            onClick={onClose}
            className="h-9 w-9 absolute -right-5 -top-5 bg-white rounded shadow-2xl"
          />
        </div>
        <div>
          <p class="inline-flex">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}
