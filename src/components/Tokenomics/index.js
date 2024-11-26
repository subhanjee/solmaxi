import React from "react";

const Tokenomics = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
      {/* Title Section */}
      <h1 className="text-6xl font-bold tracking-wider mb-4">TOKENOMICS</h1>
      <p className="text-center text-1xl tracking-wide mb-10">
        CONTRACT <br />
        <p className="text-black text-xl">
          0X34A7CF530BFE97A40EDB695F56AD996318A017D
        </p>
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {/* Supply */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">420,690,000,000</h2>
          <p className="text-black mt-2 font-medium">SUPPLY</p>
        </div>
        {/* Symbol */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">$MAXI</h2>
          <p className="text-black mt-2 font-medium">SYMBOL</p>
        </div>
        {/* Contract Safety */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">RENOUNCED</h2>
          <p className="text-black mt-2 font-medium">CONTRACT SAFETY</p>
        </div>
        {/* Buy Tax */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">0%</h2>
          <p className="text-black mt-2 font-medium">BUY TAX</p>
        </div>
        {/* Sell Tax */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">0%</h2>
          <p className="text-black mt-2 font-medium">SELL TAX</p>
        </div>
        {/* Liquidity Pool */}
        <div className="bg-white shadow-2xl hover:shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold">100% BURNED</h2>
          <p className="text-black mt-2 font-medium">LIQUIDITY POOL</p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <p className="text-center text-xl md:text-2xl text-black font-medium max-w-3xl">
        <span className="text-1xl">$SOLMAXI</span> IS A SPECULATIVE MEMECOIN
        WITH NO INTRINSIC VALUE. TRADING MEMECOINS IS A HIGH-RISK ACTIVITY AND
        CAN LEAD TO THE LOSS OF FUNDS.
      </p>
    </div>
  );
};

export default Tokenomics;
