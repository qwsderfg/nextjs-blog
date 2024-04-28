import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "../../img";
import Style from "./NFTCard.module.css";

const NFTCard = ({ data }) => {
  const cardData = data || [
    {
      id: 1,
      collection: "Yugies",
      price: "0.004 BTC",
      nftImage: images.nft_image_1,
    },
    {
      id: 2,
      collection: "Newgies",
      price: "0.24 BTC",
      nftImage: images.nft_image_2,
    },
    {
      id: 3,
      collection: "Spectra Snakes",
      price: "0.5 BTC",
      nftImage: images.nft_image_3,
    },
    {
      id: 4,
      collection: "Errors",
      price: "0.064 BTC",
      nftImage: images.nft_image_1,
    },
    // Add more card data as needed
  ];

  return (
    <div className="w-full h-[926px] relative overflow-hidden flex flex-row items-start justify-center p-10 box-border leading-[normal] tracking-[normal]">
      <section className="h-[382px] w-[329.5px] bg-white flex flex-col align-center rounded-lg max-w-full text-left text-xs text-black font-inter">
      <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-[15px] pr-[31.5px] pl-[37px] relative gap-[272px] mq329:gap-[136px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="relative h-full w-full ">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-dimgray" />
              </div>
              <div className="absolute h-[66.75%] w-[87.93%] top-[4.45%] right-[6.21%] bottom-[28.8%] left-[5.86%] rounded-xl bg-gainsboro z-[1]" />
            </div>
            <Image
              className="absolute h-[66.75%] w-[87.93%] top-[8.45%] right-[6.21%] bottom-[28.8%] left-[5.86%] rounded-xl max-w-full overflow-hidden max-h-full object-contain z-[2]"
              alt=""
              src={images.nft_image_1}
            />
          </div>
          
        </div>
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="w-[131px] relative font-semibold inline-block shrink-0 z-[4]">
            <p className="m-0">Collection</p>
            <p className="m-0 text-xl whitespace-pre-wrap"> Yugies</p>
          </div>
        </div>
        <div className="w-[182px] h-10 relative text-sm font-semibold text-white inline-block shrink-0 z-[4]">
          <p className="m-0">Price</p>
          <p className="m-0 whitespace-pre-wrap">0.053 BTC $3402</p>
        </div>
      </div>
      <div className="w-[245px] flex flex-row items-start justify-start py-0 px-[37px] box-border mt-[-97px] text-6xl text-white">
        <b className="flex-1 relative z-[5]">Yugi #369</b>
      </div>
    </section>
    </div>
  );
};

export default NFTCard;
