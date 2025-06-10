import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className='  relative top-0 bg-[url("/Decore.jpg")] bg-cover bg-no-repeat w-full h-screen z-[-1]'>
      <div className="flex flex-row items-center justify-center mx-auto w-full h-full pt-[100px]">
        <div className="flex flex-col items-start justify-center pl-[140px] gap-[30px] w-full h-full">
          <div className="flex flex-col items-start justify-center gap-[24px] ">
            <p className="font-poppins font-bold text-lightred text-[20px] ">
              BEST DESTINATION AROUND THE WORLD
            </p>
            <div>
              <h1 className="font-volkhov font-bold text-darkblue text-[84px] ">
                Travel,
                <span className="relative inline-block ">
                  enjoy
                  <div className="absolute left-0 bottom-4 w-full  z-[-1] ">
                    <Image
                      src="/Highlet_mark.svg"
                      alt="mark"
                      width={385}
                      height={12}
                      className=" w-full h-full"
                    />
                  </div>
                </span>
                <br />
                and live a new <br />
                and full life
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[34px]">
            <p className="font-poppins font-medium text-themevil text-[16px]">
              Built Wicket longer admire do barton vanity itself do in it.{" "}
              <br /> Preferred to sportsmen it engrossed listening. <br /> Park
              gate sell they west hard for the.
            </p>
            <div className="flex flex-row items-center gap-[45px]">
              <button
                className="bg-themeyello py-[19px] px-[26px] rounded-[10px] shadow-xl shadow-themeyello/40"
                type="button"
              >
                <p className="text-[18px] font-sans font-medium text-white">
                  Find out more
                </p>
              </button>
              <button
                type="button"
                className=" flex flex-row items-center justify-center gap-[20px] cursor-pointer"
              >
                <div className="p-[20px] rounded-full bg-lightred shadow-xl shadow-lightred/40 flex items-center justify-center ">
                  <Image src="/play.svg" width={15} height={15} alt="play" />
                </div>
                <p className="text-[17px] font-poppins font-medium text-themevil">
                  Play Video
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  h-full">
          <Image
            src="/Hero_image.png"
            alt="logo"
            width={10000}
            height={1000}
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
