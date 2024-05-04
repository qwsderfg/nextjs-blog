import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import Image from "next/image";
import images from "../../img";
import Style from "./ConnectModal.module.css";

export default function ConnectModal({ visible, onClose }) {
  const handleOnClose = () => {};
  if (!visible) return null;

  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.MetaMask,
      name: "Metamask",
    },
    {
      provider: images.walletConnect,
      name: "walletConnect",
    },
  ];

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded relative h-[50vh] w-[30vh]">
        <div className="shadow">
          <IoClose
            onClick={onClose}
            className="h-9 w-9 absolute -right-5 -top-5 bg-white rounded shadow-2xl "
          />
        </div>
        <div className={Style.wallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.wallet_box_provider_item} ${Style.activeBtn == i + 1 ? Style.active : ""}`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.wallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
