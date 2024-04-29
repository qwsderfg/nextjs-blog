import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import images from "../../img";
import Style from "./NFTCard.module.css";
import { title } from "process";

const NFTCard = ({ data }) => {
  const [idNumber, setIdNumber] = useState(0); // Initialize idNumber to 0
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const sliderData = data || [
    {
      id: 1,
      title: "Yugi #2104",
      collection: "Yugies",
      price: "0.004 BTC",
      nftImage: images.nft_image_1,
    },
    {
      id: 2,
      title: "Newg #503",
      collection: "Newgies",
      price: "0.24 BTC",
      nftImage: images.nft_image_2,
    },
    {
      id: 3,
      title: "Snake #4206",
      collection: "Spectra Snakes",
      price: "0.5 BTC",
      nftImage: images.nft_image_3,
    },
    {
      id: 4,
      title: "Error #404",
      collection: "Errors",
      price: "0.064 BTC",
      nftImage: images.nft_image_1,
    },
    // Add more card data as needed
  ]; // Use passed data or initialize an empty array

  // Ensure that idNumber is within bounds of sliderData length and implement looping behavior
  useEffect(() => {
    // Ensure idNumber is within bounds
    const lastIndex = sliderData.length - 1;
    if (idNumber < 0) {
      setIdNumber(lastIndex);
    } else if (idNumber > lastIndex) {
      setIdNumber(0);
    }
  }, [idNumber, sliderData.length]);

  const handleNext = () => {
    setIdNumber((prevId) =>
      prevId === sliderData.length - 1 ? 0 : prevId + 1,
    );
  };

  const handlePrev = () => {
    setIdNumber((prevId) =>
      prevId === 0 ? sliderData.length - 1 : prevId - 1,
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe right to left
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe left to right
      handlePrev();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div className={Style.card}>
      <div
        className={Style.slider_box}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sliderData[idNumber] && (
          <>
            <div className={Style.border_box_svg}>
              <svg viewBox="-10 -10 20 30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#ff5733" }} />
                    <stop offset="100%" style={{ stopColor: "#ffa500" }} />
                  </linearGradient>
                </defs>
                <path
                  d="M-10-9-9-10 9-10 10-9 10 19l-1 1L-9 20-10 19-10 7-10-9ZM-7-8-8-7-8 7-7 8 7 8 8 7 8-4 7-5 2-5-1-8-7-8"
                  fill="url(#gradient)" // Use gradient fill
                  stroke="none"
                  strokeWidth="0"
                  className={Style.border_svg}
                />
              </svg>
            </div>
            <div className={Style.slider_box_right}>
              <div className={Style.slider_box_right_box}>
                <Image
                  src={sliderData[idNumber].nftImage}
                  className={Style.slider_box_right_img}
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className={Style.slider_box_left}>
              <div className={Style.slider_box_left_collection}>
                <div className={Style.slider_box_left_collection_info}>
                  <p>Collection</p>
                  <h4 className="flex text-2xl">
                    {sliderData[idNumber].collection}
                    <MdVerified className={Style.verlogo} />
                  </h4>
                </div>
              </div>
              <div className={Style.slider_box_left_collection}>
                <div className={Style.slider_box_left_collection_info}>
                  <h4 className="flex text-2xl">
                    {sliderData[idNumber].title}
                  </h4>
                </div>
              </div>
              <div className={Style.slider_box_left_bidding}>
                <div className={Style.slider_box_left_bidding_box}>
                  <small className="">Price</small>
                  <p>
                    {sliderData[idNumber].price}{" "}
                    <span className="felx-end">$1353</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="-card">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === idNumber ? "active" : ""}`}
            ></div>
          ))}
          <button className="prev hidden md:block" onClick={handlePrev}>
            Previous
          </button>
          <button className="next hidden md:block" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
