import React from "react";
import Image from "next/image";

interface companiesProps {
  image: string;
  alt: string;
}

const Companiescard = ({ image, alt }: companiesProps) => {
  return (
    <div className=" group hover:bg-white rounded-[10px] px-[40px] hover:shadow-lg h-[86px] items-center flex justify-center hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
      <Image
        src={image}
        alt={alt}
        width={130}
        height={50}
        className="saturate-0  group-hover:saturate-100"
      />
    </div>
  );
};
const Subscription = () => {
  return (
    <section className="flex flex-col items-center justify center mt-[100px] mx-[140px]">
      <div className="flex flex-row items-center justify-between w-full relative">
        <Companiescard image="/axon.png" alt="axon" />
        <Companiescard image="/jetstar.png" alt="jetstar" />
        <Companiescard image="/expedia.png" alt="expedia" />
        <Companiescard image="/quants.png" alt="qantas" />
        <Companiescard image="/alitalia.png" alt="alitalia" />
      </div>
      <div className="w-full flex flex-col p-[100px] relative">
        <div className="flex flex-col items-center gap-[75px] bg-purple-50 rounded-tl-[130px] rounded-tr-[20px] py-[80px] rounded-b-[20px] relative">
          <h1 className="font-poppins font-semibold text-[30px] text-themevil text-center">
            Subscribe to get information, latest news and other <br />
            interesting offers about Jadoo
          </h1>
          <div className="flex flex-row items-center justify-center gap-[24px]">
            <div className="relative flex flex-row">
              <Image
                src="/mail.svg"
                alt="mail"
                width={21}
                height={18}
                className="absolute top-[25px] left-[30px]"
              />
              <input
                type="text"
                placeholder=" Your email"
                className="bg-white rounded-[10px] w-[420px] py-[25px] pl-[65px]"
              />
            </div>
            <button className="bg-linear-to-t from-linear1 to-linear2 text-white rounded-[10px] py-[23px] px-[50px]">
              Subscribe
            </button>
          </div>
          <Image
            src="/watermark_1.png"
            alt="qantas"
            width={284.8}
            height={290.88}
            className="absolute top-[-17px] right-[-86px] saturate-0"
          />
          <Image
            src="/watermark_2.png"
            alt="qantas"
            width={361}
            height={480}
            className="absolute bottom-0 left-0"
          />
          <Image
            src="/share_blue.svg"
            alt="share_blue"
            width={70}
            height={70}
            className="absolute right-[-10px] top-[-10px]"
          />
        </div>
        <Image
          src="/group.svg"
          alt="mark"
          width={153}
          height={166}
          priority
          className=" absolute right-0 bottom-0 -z-10"
        />
      </div>
    </section>
  );
};

export default Subscription;
