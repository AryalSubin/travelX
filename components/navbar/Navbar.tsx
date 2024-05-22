"use client";
import React, { useEffect, useState } from "react";
import travellogo from "@/public/travelx-logo.png";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  const [prevYPosition, setPreviousYPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [backblur, setbackblur] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (
        prevYPosition > currentYPosition &&
        prevYPosition - currentYPosition > 1
      ) {
        setVisible(true);
      }
      if (
        currentYPosition > prevYPosition &&
        currentYPosition - prevYPosition > 1
      ) {
        setVisible(false);
      }
      if (currentYPosition < 100) {
        setVisible(true);
      }
      if (currentYPosition > 500) {
        setbackblur(false);
      }
      setPreviousYPosition(currentYPosition);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, prevYPosition]);
  return (
    <div
      className={`h-[10vh] z-[99]  fixed transition-all text-white duration-300 w-full lg:px-16  sm:px-8 px-4  ${
        !visible && "-translate-y-[100%] "
      } `}
    >
      <div className="h-full my-auto w-full flex items-center  justify-between">
        <div className="h-[30px] font-sans uppercase w-fit">
          {/* <Image
            className="h-full w-full "
            src={travellogo}
            alt="travelx-logo"
          ></Image> */}
          travelX
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
