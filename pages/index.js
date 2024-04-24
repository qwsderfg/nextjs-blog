import React from "react";
import Style from "./index.module.css";
import { NFTCard } from "../components/cindex";
import Image from "next/image";
import images from "../img";

const Home = () => {
  return (
    <div>
      <div class="bg-black h-screen w-screen ">
        <Image src={images.creatorbackground1} class="h-500" />
        {/*<NFTCard></NFTCard>*/}
      </div>
    </div>
  );
};

export default Home;
