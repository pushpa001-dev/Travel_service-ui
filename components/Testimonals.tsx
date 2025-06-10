import React from "react";
import Image from "next/image";
interface TestimonalsProps {
  dots: "marked" | "unmarked";
}

const TestimonalsDot = ({ dots }: TestimonalsProps) => {
  if (dots === "marked") {
    return <div className="w-[10px] h-[10px] bg-themevil rounded-full" />;
  } else {
    return <div className="w-[10px] h-[10px] bg-gray-300 rounded-full" />;
  }
};
const Testimonals = () => {
  return (
    <section className="flex flex-row items-center justify-between mx-[140px] mt-[100px]">
      <div className="flex flex-col items-start gap-[82px]">
        <div className="flex flex-col items-start gap-[8px]">
          <p className="font-poppins font-semibold text-[18px] text-themevil">
            {" "}
            TESTIMONALS{" "}
          </p>
          <h1 className="font-volkhov font-bold text-[50px]">
            What people say <br />
            about Us.
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-[26px]">
          <TestimonalsDot dots="marked" />
          <TestimonalsDot dots="unmarked" />
          <TestimonalsDot dots="unmarked" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-[66] mt-[200px] ">
        <div className="relative bg-white flex flex-col gap-[44px] pl-[35px] pr-[64px] py-[15px] shadow-sm  rounded-[10px] ">
          <p className="font-sans font-regular text-[16px] text-themevil">
            “On the Windows talking painted pasture yet its <br /> express
            parties use. Sure last upon he same as knew <br /> next. Of believed
            or diverted no.”
          </p>
          <div>
            <h1 className="font-popins font-semibold text-[18px] text-themevil">
              Chris Thomas
            </h1>
            <p className="font-poppins font-medium text-[14px] text-themevil">
              CEO of Red Button
            </p>
          </div>
          <div className="absolute bg-white flex flex-col gap-[44px] pl-[35px] pr-[64px] py-[15px]  shadow-lg rounded-[10px] top-[-40%] left-[-10%]">
            <p className="font-sans font-regular text-[16px] text-themevil">
              “On the Windows talking painted pasture yet its <br /> express
              parties use. Sure last upon he same as knew <br /> next. Of
              believed or diverted no.”
            </p>
            <div>
              <h1 className="font-popins font-semibold text-[18px] text-themevil">
                Mike taylor
              </h1>
              <p className="font-poppins font-medium text-[14px] text-themevil">
                Lahore, Pakistan
              </p>
            </div>
            <Image
              src="/testimonial_profile.svg"
              alt="profile"
              width={68}
              height={68}
              className="object-cover rounded-full absolute top-[-35px] left-[-35px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[60px] ">
          <Image
            src="/up.svg"
            alt="up arrow"
            width={14}
            height={7}
            className="object-cover"
          />
          <Image
            src="/down.svg"
            alt="down arrow"
            width={14}
            height={7}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
