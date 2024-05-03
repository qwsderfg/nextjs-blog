import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing icons from the react-icons library

export default function SearchModal({ visible, onClose }) {
  
  const handleOnClose = () => {};

  const [input, setInput] = useState()

  const fetchData =(value) => {
    fetch("https://jasonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
      const results = json.filter((user) => {
        return user && user.name && user.name.toLowerCase().includes(value)
      })
      console.log(results);
    });
  }
 const handleChange = (value) => {
  setInput(value);
  fetchData(value);
 }
  if (!visible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-white p-2 rounded-xl relative z-20 -mt-80">
        <div className="shadow">
          <IoClose
            onClick={onClose}
            className="h-9 w-9 absolute -right-5 -top-5 bg-white rounded shadow-2xl cursor-pointer"
          />
        </div>
        <div className="p-4">
          
          <div className="flex items-center border border-gray-300 rounded p-2 w-full mr-2">
            <FaSearch className="m-1  "></FaSearch>
            <input
              type="text"
              placeholder="Search..."
              className=" outline-none m-1.5 ml-4 "
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
