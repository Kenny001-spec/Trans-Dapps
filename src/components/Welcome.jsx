import React from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] boder-gray-400 text-white";


const Input = ({placeholder, name, type, value, handleChange }) => {
  <input placeholder={placeholder}
  type={type}
  step="0.0001"
  value={value}
  // onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm"/>
}
const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />
            Across The World
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world with Dlt Africa web-3 club
          </p>
          <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <p className="text-white text-base font-semibold">connect wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Easy Send</div>
            <div className={`${commonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-start justify-start w-full mf:mt-o mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>

              <div>
                <p className="text-black font-bold text-lg ">
                  0xD1f4c42.....bef1e
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div>
            <Input 
            placeholder="Wallet Address"
            name='Address To'
            type="Text"
            // handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
