import React from "react";
import travellogo from "@/public/travelx-logo.png";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="h-[10vh] z-[99] fixed w-full lg:px-16  sm:px-8 px-4  ">
      <div className="h-full my-auto w-full flex items-center  justify-between">
        <div className="h-[30px] w-fit">
          <Image
            className="h-full w-full "
            src={travellogo}
            alt="travelx-logo"
          ></Image>
        </div>
        <div className="flex justify-between items-center  text-sm font-medium uppercase h-full gap-8">
          <span>about us</span>
          <span>destination</span>
          <span>roads</span>
          <span>why us?</span>
          <span>video</span>
          <span>reservation</span>
          <span>contact</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
