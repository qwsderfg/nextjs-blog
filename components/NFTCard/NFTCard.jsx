import React, { useState } from 'react'
import Style from './NFTCard.module.css'
import {BsImage} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import Image from 'next/image'
import images from '../../img/'

const NFTCard = () => {
    const featureArray = [1,2,3,4,5,6,7,8,9];
    
    const [like, setLike] = useState(true);

  return (
    <div class='NFTCard'>
        {featureArray.map((el, i)=>(
            <div class='NFTCard_box' key={i+1}>
                <div class='NFTCard_box_img'>
                    <Image class='NFTCard_box_img_img' src={images.nft_image_1} alt='NFT images' width={600} height={600}/>
                </div>
                <div class='NFTCard_box_update'>
                    <div class='NFTCard_box_update_left'>
                        <div class='NFTCard_box_update_left_like' onClick={()=> likeNft()}>
                        {like ? (
                            <AiFillHeart class=''/>
                        ) : (
                            <AiFillHeart class=''/>
                        )}
                        {""} 22
                        </div>
                    </div>
                </div>
                <div calss='box-update-right'>
                    <div class='^info'>
                        <small>Remaining time</small>
                    </div>
                </div>
                <div class='update-details-price-box'>
                    <div class='-price'>
                        <div class='-box'>
                            <h4>Yugi #369</h4>
                            <div class='-box'>
                                <div class='bid'>
                                    <small>Price</small>
                                    <p>0.0369BTC</p>
                                </div>
                                <div class='-stock'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCard