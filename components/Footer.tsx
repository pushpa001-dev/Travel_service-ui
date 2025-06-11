import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="mt-[100px] items-center justify-center flex flex-col gap-[85px] mb-[90px] mx-[140px] relative">
      <div className="flex flex-row items-center gap-[83px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-poppins font-medium text-[44px] text-darkblue">
            Jadoo.
          </h1>
          <p className="font-poppins font-medium text-[13px] text-themevil">
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
        </div>
        <div className="flex flex-row items-center mt-[20px] gap-[82px]">
          <div className="grid grid-cols-3 gap-[72px]">
            <div className="flex flex-col gap-[34px]">
              <h1 className="font-poppins font-bold text-[21px] text-darkblue">
                Company
              </h1>
              <div className="flex flex-col gap-[12px]">
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  About
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Careers
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Mobile
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[34px]">
              <h1 className="font-poppins font-bold text-[21px] text-darkblue">
                Contact
              </h1>
              <div className="flex flex-col gap-[12px]">
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Help/FAQ
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Press
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Affilates
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[34px]">
              <h1 className="font-poppins font-bold text-[21px] text-darkblue">
                More
              </h1>
              <div className="flex flex-col gap-[12px]">
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Airlinefees
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Airline
                </p>
                <p className="font-poppins font-medium text-[18px] text-themevil">
                  Low fare tips
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[26px]">
            <div className="flex flex-row gap-[25px]">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={41}
                height={41}
              />
              <Image src="/insta.svg" alt="insta" width={41} height={41} />
              <Image src="/twitter.svg" alt="twitter" width={41} height={41} />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-poppins font-medium text-[20px] text-themevil">
                Discover our app
              </h1>
              <div className="flex flex-row gap-[7px]">
                <Image
                  src="/Google Play.png"
                  alt="play"
                  width={107}
                  height={35}
                  priority
                />
                <Image src="/apple.png" alt="play" width={107} height={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>All rights reserved@jadoo.co</p>
      <Image
        src="/purple.png"
        alt="purple"
        width={478.94}
        height={496.86}
        className="absolute bottom-[-100px] right-[-140px]"
      />
    </section>
  );
};

export default Footer;
