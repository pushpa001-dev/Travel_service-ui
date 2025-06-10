import React from "react";
import Image from "next/image";

interface serviceProps {
  logo: string;
  title: string;
  content: string;
  alt: string;
}

const ServiceCard = ({ logo, title, content, alt }: serviceProps) => {
  return (
    <div className=" group flex flex-col items-center justify-center gap-[30px] w-[181px] hover:w-[267px] hover:rounded-[36px] hover:p-[50px] border-transparent hover:border hover:shadow-lg  transition-all duation-500 ease-in hover:sticky hover:z-10 top-10">
      <Image src={logo} alt={alt} width={77} height={66} />
      <div className="flex flex-col gap-[15px]">
        <h1 className="fonr-sans font-semibold text-[20px] text-darkblue text-center">
          {title}
        </h1>
        <p className="font-poppins font-medium text-[16px] text-themevil text-center">
          {content}
        </p>
      </div>
      <div className="hidden group-hover:block absolute w-[100px] h-[100px] bg-lightred rounded-tl-[30px] rounded-br-[10px] -z-50 left-[-35px] bottom-[-35px]" />
    </div>
  );
};

const Service = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-[155px] mt-[100px]">
      <div className="flex flex-col items-center gap-[10px] relative">
        <p className="font-poppins font-semibold text-themevil text-[18px] ">
          CATEGORY
        </p>
        <h1 className="font-volkhov font-bold text-darkblue text-[50px] ">
          We Offer Best Services
        </h1>
      </div>

      <div className="mt-[100px] flex flex-row gap-[118px] w-full items-center justify-between relative">
        <ServiceCard
          logo="/service_1.svg"
          title="Calculated Weather "
          content="Built Wicket longer admire do barton vanity itself do in it."
          alt="Calculated Weather"
        />
        <ServiceCard
          logo="/service_2.svg"
          title="Best Flights "
          content="Engrossed listening. Park gate sell they west hard for the."
          alt="Best Flights "
        />
        <ServiceCard
          logo="/service_3.svg"
          title="Local Events "
          content="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          alt="Local Events"
        />
        <ServiceCard
          logo="/service_4.svg"
          title="Customization"
          content="We deliver outsourced
aviation services for
military customers"
          alt="Customization"
        />
      </div>

      <Image
        src="/group 4.svg"
        alt="mark"
        width={153}
        height={166}
        className=" absolute right-0"
      />
    </section>
  );
};

export default Service;
