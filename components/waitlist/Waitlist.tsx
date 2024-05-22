import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

type Props = {};

function Waitlist({}: Props) {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".waitlist",
        // markers: true,
        start: "top 75%",
        scrub: 2,
        end: "10% 60%",
      },
    });
    t1.from(
      ".waitlisttext1",
      {
        scale: 2,
        opacity: 0,
        //   x: "500px",
        //   duration: 2,
      },
      "lala"
    );
    t1.from(
      ".waitlisttext2",
      {
        opacity: 0.8,
        //   delay: 0.005,
        scale: 1.4,
        //   x: "500px",
        //   duration: 2,
      },
      0.2
    );
  });
  return (
    <>
      <div
        // data-scroll
        // data-scroll-speed="1"
        className="h-full pt-32 pb-48 mb-[20vh] waitlist flex justify-center w-full bg-white"
      >
        <div className=" pt-16  flex flex-col gap-4 items-center ">
          <p className="text-5xl waitlisttext1 font-medium">
            Join the waitlist
          </p>
          <div className="bg-[#CB926A] waitlisttext2 text-white font-medium  text-2xl py-4 px-12 rounded-full">
            Secure you spot
          </div>
        </div>
      </div>
    </>
  );
}

export default Waitlist;
