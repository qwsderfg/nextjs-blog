import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import images from "../../img";

const Slider = ({ data }) => {
  const [idNumber, setIdNumber] = useState(0); // Initialize idNumber to 0
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const sliderData = data || [
    {
      title: "Yugi #369",
      id: 1,
      name: "Yugi Labs",
      collection: "Yugies",
      price: "0.004 BTC",
      image: images.YugiSq,
      nftImage: images.nft_image_1,
    },
    {
      title: "Knight #369",
      id: 2,
      name: "lil nights",
      collection: "Newgies",
      price: "0.24 BTC",
      image: images.user2,
      nftImage: images.nft_image_2,
    },
    {
      title: "Snake #369",
      id: 3,
      name: "HTTOS",
      collection: "Spectra Snakes",
      price: "0.5 BTC",
      image: images.user3,
      nftImage: images.nft_image_3,
    },
    {
      title: "Doggie",
      id: 4,
      name: "Bandz",
      collection: "Errors",
      price: "0.064 BTC",
      image: images.user4,
      nftImage: images.nft_image_4,
    },
    // Add more slider data as needed
  ]; // Use passed data or initialize an empty array

  // Ensure that idNumber is within bounds of sliderData length and implement looping behavior
  useEffect(() => {
    const lastIndex = sliderData.length - 1;
    if (idNumber < 0) {
      setIdNumber(lastIndex); // Reset to last index if idNumber is negative
    } else if (idNumber > lastIndex) {
      setIdNumber(0); // Reset to 0 if idNumber exceeds the last index
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
    <div className="slider">
      <div className="-box">
        <div
          className="-left"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Check if sliderData[idNumber] exists before accessing its properties */}
          {sliderData[idNumber] && (
            <>
              <h2>{sliderData[idNumber].title}</h2>
              <div className="-creator">
                <div className="-profile">
                  <Image
                    src={sliderData[idNumber].image}
                    className="-img"
                    width={50}
                    height={50}
                  />
                  <div className="-img">
                    <p>Creator</p>
                    <h4>
                      {sliderData[idNumber].name}{" "}
                      <span>
                        <MdVerified />
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="-collection">
                  <AiFillFire className="-icon" />
                  <div className="-info">
                    <p>Collection</p>
                    <h4>{sliderData[idNumber].collection}</h4>
                  </div>
                </div>
              </div>

              <div className="-bidding">
                <div className="-box">
                  <small>Price</small>
                  <p>
                    {sliderData[idNumber].price} <span>$1353</span>
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="-slider">
            {/* Render slider items */}
            {sliderData.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === idNumber ? "active" : ""}`}
              ></div>
            ))}
            {/* Navigation buttons (hidden on mobile) */}
            <button className="prev hidden md:block" onClick={handlePrev}>
              Previous
            </button>
            <button className="next hidden md:block" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
