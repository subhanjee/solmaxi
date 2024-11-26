import React from "react";
import adut from "../images/Group 1.png";
import adut1 from "../images/1 (1).png";
import adut2 from "../images/2 (1).png";
import adut3 from "../images/3 (1).png";
import adut4 from "../images/4 (1).png";
import adut5 from "../images/5 (1).png";
import adut6 from "../images/6 (1).png";
function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl text-left">About</h1>
            <p  className="text-xl text-left">
              A solana maximalist never worries about gasfee. he is open for
              every <br />
              investor, even a small one. Solana maximalists are simple but deep
              minded. a<br /> $SOLMAXI has no emotional issues and after buying
              a token, still have enough
              <br /> gas left to drive back home.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={adut} alt="abc" className="-mt-0  md:-mt-48 w-[35rem]"/>
        </div>
      </div>
      <div>
        <h1 className="text-4xl">$SOLMAXI</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 mt-5  mb-5">
            <img src={adut1} alt="abc"/>
            <img src={adut2} alt="abc"/>
            <img src={adut3} alt="abc"/>
            <img src={adut5} alt="abc"/>
            <img src={adut6} alt="abc"/>
            <img src={adut4} alt="abc"/>
            </div>
      </div>
    </div>
  );
}

export default About;
