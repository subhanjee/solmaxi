import React from "react";
import "./index.css";
import Symbol from "../images/Symbol.png";
import tel from "../images/tel.png";
import twi from "../images/Symbol (2).png";
import x from "../images/Vector.png";
import layer from "../images/Layer_1-2.png";
import vector from "../images/SVG.png";
function HeroSection() {
  return (
    <div className="bg-main">
      <h1 className="text-8xl">$SOLMAXI</h1>
      <p className="text-xl mt-5">
        Are you also tired of Ethereum? Then you are in the right
        <br />
        place. We are the SOLMAXI's.
      </p>

      <div className="flex gap-12 justify-center items-center mt-5">
        <button className="btn-sol flex justify-center items-center gap-5">
          <img src={Symbol} alt="abc" />
          <h2>chart</h2>
        </button>
        <div className="flex justify-center items-center gap-5">
          <img src={tel} alt="abc" />
          <h2>Join Us on Telegram</h2>
        </div>
      </div>
      <h1 className="text-5xl mt-5">Find Us On</h1>
      <div className="flex gap-3 mt-2">
        <div className="bg-black rounded-md px-4 py-3 flex justify-center items-center  ">
        <a href="https://t.me/+uAgJV7S_RRBmNDdk" target="_blank" rel="noreferrer">  <img src={twi} alt="abc"/></a>  
        </div>
        <div className="bg-black rounded-md px-4 py-3 flex justify-center items-center">
        <a href="https://x.com/WeAreSolmaxi" target="_blank" rel="noreferrer">      <img src={x} alt="abc"/></a>
        </div>
        <div className="bg-black rounded-md px-4 py-3 flex justify-center items-center">
        <a href="https://www.dextools.io" target="_blank" rel="noreferrer">      <img src={layer} alt="abc"/> </a>
        </div>
        <div className="bg-black rounded-md px-4 py-3 flex justify-center items-center">
            <img src={vector} alt="abc"/>
        </div>
        </div>
    </div>
  );
}

export default HeroSection;
