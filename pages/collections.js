import Stlye from "../styles/collections.module.css";
import images from "../img";
import React from "react";
import { Banner, collectionProfile } from "../collectionsPage/collectionindex";

const collections = () => {
  return (
    <div class="bg-[#263238] h-screen w-screen ">
      <Banner></Banner>
      <collectonsProfile></collectonsProfile>
    </div>
  );
};

export default collections;
