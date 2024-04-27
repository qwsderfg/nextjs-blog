import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function SearchModal({ visible, onClose }) {
  const handleOnClose = () => {};
  if (!visible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-white p-2 rounded relative z-20">
        <div className="shadow">
          <IoClose
            onClick={onClose}
            className="h-9 w-9 absolute -right-5 -top-5 bg-white rounded shadow-2xl cursor-pointer"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Search</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder=" Search..."
              className="border border-gray-300 rounded p-2 w-full mr-2"
              onChange=''
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick=''
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
