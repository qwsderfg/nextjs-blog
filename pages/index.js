import React from "react";
import Style from "./index.module.css";
import { NFTCard, Slider } from "../components/cindex";
import Image from "next/image";
import images from "../img";

const Home = () => {
  return (
    <div>
      <div class="bg-[#282020] h-screen w-screen ">
        <Slider/>
        {/*<NFTCard></NFTCard>*/}

      </div>
    </div>
  );
};

export default Home;
