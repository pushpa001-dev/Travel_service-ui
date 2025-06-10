import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constrains";
const Navbar = () => {
  return (
    <section className="flex flex-row items-center justify-between  w-full px-[140px] py-[47px] absolute z-10 ">
      <div>
        <Image src="/logo.svg" alt="logo" width={114.91} height={50} />
      </div>
      <div className="flex flex-row items-center justify-between gap-[70px] font-sans">
        {NAV_LINKS.map((link) => (
          <div
            className=" text-[17px] font-medium  font-sans px-[22px] py-[9px] hover:sticky relative  hover:border rounded-[5px] "
            key={link.id}
          >
            <a href={link.src}>{link.lable}</a>
          </div>
        ))}
        <select name="language" id="language">
          <option className="text-[17px] font-medium" value="English">
            EN
          </option>
          <option className="text-[17px] font-medium" value="Arabic">
            AR
          </option>
        </select>
      </div>
    </section>
  );
};

export default Navbar;
