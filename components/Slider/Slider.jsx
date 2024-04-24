import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AiFillFire } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import images from '../../img';

const Slider = () => {
  const [idNumber, setIdNumber] = useState(0); // Initialize idNumber to 0

  const sliderData = [
    {
      title: "Yugi #369",
      id: 1,
      name: "Yugi Labs",
      collection: "Yugies",
      price: "0.004 BTC",
      image: images.YugiSq,
      nftImage: images.nft_image_1
    }
  ];

  // Ensure that idNumber is within bounds of sliderData length
  useEffect(() => {
    if (idNumber < 0) {
      setIdNumber(0); // Reset to 0 if idNumber is negative
    } else if (idNumber >= sliderData.length) {
      setIdNumber(sliderData.length - 1); // Set to the last index if idNumber exceeds the length
    }
  }, [idNumber, sliderData.length]);

  return (
    <div className='slider'>
      <div className='-box'>
        <div className='-left'>
          {/* Check if sliderData[idNumber] exists before accessing its properties */}
          {sliderData[idNumber] && (
            <>
              <h2>{sliderData[idNumber].title}</h2>
              <div className='-creator'>
                <div className='-profile'>
                  <Image src={sliderData[idNumber].image} className='-img' width={50} height={50} />
                  <div className='-img'>
                    <p>Creator</p>
                    <h4>{sliderData[idNumber].name} <span><MdVerified/></span></h4>
                  </div>
                </div>
                <div className='-collection'>
                  <AiFillFire className='-icon'/>
                  <div className='-info'> 
                  <p>Collection</p>
                  <h4>{sliderData[idNumber.collection]}</h4>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className='-bidding'></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
