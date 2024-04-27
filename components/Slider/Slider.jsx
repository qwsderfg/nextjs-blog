import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import images from "../../img";
import Style from "./Slider.module.css";

const Slider = ({ data }) => {
  const [idNumber, setIdNumber] = useState(0); // Initialize idNumber to 0
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const sliderData = data || [
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
      nftImage: images.nft_image_4,
    },
    // Add more slider data as needed
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
    <div className={Style.slider}>
      <div
        className={Style.slider_box}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sliderData[idNumber] && (
          <>
            <div className={Style.slider_box_left}>
              <div className={Style.slider_box_left_collection}>
                <div className={Style.slider_box_left_collection_info}>
                  <p>Collection:</p>
                  <h4 className="flex text-2xl">
                    {sliderData[idNumber].collection}
                    <MdVerified className={Style.verlogo} />
                  </h4>
                </div>
              </div>
              <div className={Style.slider_box_left_bidding}>
                <div className={Style.slider_box_left_bidding_box}>
                  <small className="">Price</small>
                  <p>
                    {sliderData[idNumber].price} <span className="felx-end">$1353</span>
                  </p>
                </div>
              </div>
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
          </>
        )}
        <div className="-slider">
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

export default Slider;
