import React from "react";
import Image from "next/image";
interface Top_destinationsProps {
  image: string;
  place: string;
  price: string;
  days: number;
}

const Top_destinationsCard = ({
  image,
  place,
  price,
  days,
}: Top_destinationsProps) => {
  return (
    <div className="flex flex-col tiems-center justify-center w-[314px] border rounded-[24px] border-transparent shadow-lg shadow-gray-900/7 relative">
      <Image
        src={image}
        alt={place}
        width={314}
        height={457}
        className="w-full h-full rounded-[24px]"
      />
      <div className=" flex flex-col items-center justify-center px-[20px] py-[30px] gap-[20px] bg-white rounded-b-[24px] absolute w-full bottom-0 ">
        <div className="flex flex-row items-center gap-[103px]">
          <p className="text-[18px] text-themevil font-medium font-poppins">
            {place}
          </p>
          <p className="text-[18px] text-themevil font-medium font-poppins">
            {price}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start w-full gap-[14px] ">
          <Image src="/share.svg" alt="share" width={20} height={20} />
          <p className="text-[18px] text-themevil font-medium font-poppins">
            {days} Days Trip
          </p>
        </div>
      </div>
    </div>
  );
};
const Top_destinations = () => {
  return (
    <section className=" flex flex-col items-center justify-between mx-[150px]  mt-[120px]">
      <div className="flex flex-col items-center justify-between">
        <p className="text-[18px] font-poppins font-semibold text-themevil">
          Top Selling
        </p>
        <h1 className="text-[50px] font-volkhov font-bold text-darkblue">
          Top Destinations
        </h1>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-[60px] relative">
        <Top_destinationsCard
          image="/destination_1.jpg"
          place="Rome, Italty"
          price="$5,42k"
          days={10}
        />
        <Top_destinationsCard
          image="/destination_2.jpg"
          place="London, UK"
          price="$4.2k"
          days={12}
        />
        <Top_destinationsCard
          image="/destination_3.jpg"
          place="London, UK"
          price="$15k"
          days={28}
        />

        <div className=" right-[-65px] absolute -z-10">
          <Image src="/Decore_2.svg" alt="decore" width={96} height={252} />
        </div>
      </div>
    </section>
  );
};

export default Top_destinations;
