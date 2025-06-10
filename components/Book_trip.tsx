import React from "react";
import Image from "next/image";
interface Book_tripProps {
  logo: string;
  title: string;
  content: string;
  content_second: string;
}

const Book_card = ({
  logo,
  title,
  content,
  content_second,
}: Book_tripProps) => {
  return (
    <div className="flex flex-row items-center gap-[20px]">
      <Image src={logo} alt={title} width={48} height={47} />
      <div className="flex flex-col gap-[4px]">
        <h1 className="font-poppins font-bold text-[18px] text-themevil">
          {title}
        </h1>
        <p className="font-poppins font-regular text-[16px] text-themevil">
          {content} <br /> {content_second}
        </p>
      </div>
    </div>
  );
};
const Book_trip = () => {
  return (
    <section className="flex flex-row items-center justify-between mx-[155px] mt-[100px]">
      <div className="flex flex-col gap-[30px] w-full justify-start">
        <div className="flex flex-col gap-[15px]">
          <p className="font-poppins font-semibold text-[18px] text-themevil">
            Easy and Fast
          </p>
          <h1 className="font-volkhov font-bold text-[50px] text-darkblue">
            Book your next trip <br />
            in 3 easy steps
          </h1>
        </div>
        <div className="flex flex-col  gap-[48px] ">
          <Book_card
            logo="/step_1.svg"
            title="Choose Destination"
            content="Lorem ipsum dolor sit amet, consectetur"
            content_second="adipiscing elit. Urna, tortor tempus."
          />
          <Book_card
            logo="/step_2.svg"
            title="Make Payment"
            content="Lorem ipsum dolor sit amet, consectetur "
            content_second="adipiscing elit. Urna, tortor tempus. "
          />
          <Book_card
            logo="/step_3.svg"
            title="Reach Airport on Selected Date"
            content="Lorem ipsum dolor sit amet, consectetur"
            content_second="adipiscing elit. Urna, tortor tempus."
          />
        </div>
      </div>
      <div className="flex flex-row items-center relative w-full ">
        <div></div>
        <Image
          src="/blue.png"
          alt="blue"
          width={354}
          height={367}
          className="w-full"
        />

        <div className="flex flex-col items-center  gap-[26px]  max-w-full bg-white rounded-[24px] border border-transparent p-[25px]  shadow-lg absolute left-[20%] ">
          <div className=" rounded-[24px] w-full">
            <Image
              src="/next_trip.jpg"
              alt="next_trip"
              width={300}
              height={300}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start jsutify-start gap-[20px] w-full relative ">
            <div className="flex flex-col gap-[13px]">
              <h1 className="font-poppins font-medium text-[18px] text-black">
                Trip To Greece
              </h1>
              <p className="font-poppins font-medium text-[16px] text-themevil">
                14-29 June &nbsp;|&nbsp; by Robbin joseph
              </p>
            </div>

            <div className="flex flex-col items-center jsutify-start gap-[30px] w-full">
              <div className="flex flex-row items-center justify-start gap-[18px] w-full">
                <Image src="/leaf.svg" alt="leaf" width={36} height={36} />

                <Image src="/map icon.svg" alt="map" width={36} height={36} />
                <Image src="/send.svg" alt="send" width={36} height={36} />
              </div>

              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[6px]">
                  <Image
                    src="/building 1.svg"
                    alt="building"
                    width={16}
                    height={16}
                  />
                  <p className="font-poppins font-medium text-[14px] text-themevil">
                    24 people going
                  </p>
                </div>
                <Image
                  alt="Heart"
                  src="/Heart.svg"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[11px] p-[20px] bg-white rounded-[20px] border border-transparent shadow-lg w-full absolute right-[-50%]">
              <div className="h-full flex items-start">
                <Image
                  src="/on_going.svg"
                  alt="on_going"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col justify-start gap-[15px]  w-full">
                <div className="flex flex-col  items-start gap-[6px] w-full">
                  <p className="font-poppins font-medium text-[14px] text-themevil">
                    Ongoing
                  </p>
                  <h1 className="font-poppins font-medium text-[18px] text-black">
                    Trip to rome
                  </h1>
                </div>
                <div className="flex flex-col justify-start gap-[10px] w-full">
                  <p className="font-poppins font-medium text-[14px] text-black">
                    {" "}
                    <span className="text-thempurple">40%</span> completed
                  </p>
                  <div className="w-full h-[6px] bg-gray-100 rounded-[10px] relative">
                    <div className="w-full max-w-[40%] h-[6px] bg-thempurple rounded-[10px] absolute" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_trip;
