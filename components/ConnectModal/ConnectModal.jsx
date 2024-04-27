import { IoClose } from "react-icons/io5";

export default function ConnectModal({ visible, onClose }) {
  const handleOnClose = () => {};
  if (!visible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded relative ">
        <div className="shadow">
          <IoClose
            onClick={onClose}
            className="h-9 w-9 absolute -right-5 -top-5 bg-white rounded shadow-2xl "
          />
        </div>
        <div>
          <p className="inline-flex">Connect Wallet</p>
        </div>
        <div>
          <div>
            <button>Metamask</button>
          </div>
        </div>
      </div>
    </div>
  );
}