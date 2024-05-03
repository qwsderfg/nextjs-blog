import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";

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
            <Button colorScheme="blue" size="md">
              Metamask
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
