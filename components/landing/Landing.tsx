"use client";
import React, { useEffect, useRef } from "react";
import clouds from "@/public/landing/clouds22.png";
// import clouds2 from "@/public/landing/clouds2.png";
import middleCloud from "@/public/landing/middleCloud.png";
import thickcloud from "@/public/landing/thick-cloud.png";
// import clouds3 from "@/public/landing/clouds3.png";
import mountain11 from "@/public/landing/mountain11.png";
import mountain1 from "@/public/landing/mountain1.jpg";
import stars from "@/public/landing/stars.webp";
import mountain2 from "@/public/landing/mountain22.png";
import mountainfiller from "@/public/landing/mountainfill.png";
import mountainfiller2 from "@/public/landing/mountainfill2.png";
import secondmountainrange from "@/public/landing/second-mountain-range.png";
import secondmountainrange2 from "@/public/landing/second-mountain-range2.png";
import secondmountainrange3 from "@/public/landing/second-mountain-range3.png";
import sky1 from "@/public/landing/sky1.jpg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import "./Landing.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Landing({}: Props) {
  const m1Ref = useRef(null);
  const m2Ref = useRef(null);
  const m3Ref = useRef(null);

  // useEffect(() => {
  //   scrollTo(0, 0);
  // });

  useGSAP(() => {
    const t11p = gsap.timeline();
    t11p.to(".landingtitle", {
      scale: 1,
      x: 0,
      duration: 1,
    });
    const t2p = gsap.timeline({
      scrollTrigger: {
        trigger: ".landingtitle",
        start: "50% 49%",
        end: "90% 25%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });
    t2p
      .to(".landingtitle", {
        color: "#fff",
      })
      .to(
        ".landingtitle",
        {
          opacity: 0.2,
        },
        1
      );

    const t1p = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxdiv",
        start: "top top",
        end: "90% 25%",
        scrub: 1,
        // pin: true,
        // markers: true,
      },
    });
    // const t1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".parallaxdiv",
    //     start: "top top",
    //     end: "90% 25%",
    //     scrub: 1,
    //     // markers: true,
    //   },
    // });
    t1p.to(
      m1Ref.current,
      {
        // y: "100px",
        // y: 0,
        // scale: 1.3,
        opacity: 0.7,
      },

      "parallax"
    );

    // t1p.to(
    //   m2Ref.current,
    //   {
    //     y: "-100px",
    //     // scale: 1,
    //   },
    //   "parallax"
    // );
    // t1p.to(
    //   m3Ref.current,
    //   {
    //     // y: "150px",
    //   },
    //   "parallax"
    // );
  });
  return (
    <div
      data-scroll
      data-scroll-section
      className="h-screen  overflow-hidden parallaxdiv relative scale-1 w-full "
    >
      {/* <div className="absolute top-0 left-0 w-full h-full z-50 text-4xl font-bold   ">
        <div className="flex justify-center  text-[#676BDE] font-bold scale-[0.4] translate-x-[10%] landingtitle pb-16 h-full text-[8vw] items-center">
          Expedition
        </div>
      </div> */}
      <div
        data-scroll
        data-scroll-speed="-0.95"
        // style={{
        //   backgroundImage: `url(${stars})`,
        // }}
        className="h-screen landingbgimage bg-fixed scale-[1.2] relative  z-0 w-full"
      >
        {/* <Image
          className="h-full w-full absolute -top-20 left-0 "
          src={sky1}
          alt="stars"
        /> */}
      </div>
      <div className="h-[10rem] w-full bg-gradient-to-t from-white to-transparent  absolute bottom-0 left-0 z-20 "></div>
      <div
        data-scroll
        data-scroll-speed="-0.5"
        ref={m1Ref}
        className="h-full  img1 absolute z-[1] -top-[10%] left-0  w-full "
      >
        <Image
          className="h-screen  w-full object-cover  "
          src={mountain11}
          alt="mountain"
        />
      </div>
      {/* <div
        data-scroll
        data-scroll-speed="0.2"
        ref={m2Ref}
        className="h-full img2 absolute top-[40%] z-[3]  -left-[30%]  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={mountain2}
          alt="mountain"
        />
      </div> */}
      <div
        data-scroll
        data-scroll-speed="-0.2"
        // ref={m2Ref}
        className="h-full img2 absolute top-[20%] z-[2]    left-[0%]  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={secondmountainrange3}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0"
        className="h-full img3 absolute z-[6] top-[50%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={thickcloud}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0.2"
        className="h-full img3 absolute z-[6] top-[60%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={thickcloud}
          alt="mountain"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.2"
        // ref={m2Ref}
        className="h-[50vh] img2 absolute -bottom-[5vh] z-[4]    right-[10%]  w-[50vw] "
      >
        <Image
          className="h-full  w-full object-cover  "
          src={mountain2}
          alt="mountain"
        />
      </div>
      {/* use this below not above if want to readjust */}
      {/* <div
        data-scroll
        data-scroll-speed="0.2"
        // ref={m2Ref}
        className="h-full img2 absolute top-[25%] z-[4] !scale-50   left-[10%]  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={mountain2}
          alt="mountain"
        />
      </div> */}
      <div
        data-scroll
        data-scroll-speed="0.2"
        ref={m3Ref}
        className="h-full img3 absolute z-[5] top-[25%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={middleCloud}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0"
        className="h-full img3 absolute z-[5] top-[30%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={clouds}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0"
        className="h-full img3 absolute z-[5] top-[40%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={clouds}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0"
        className="h-full img3 absolute z-[5] top-[40%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={clouds}
          alt="mountain"
        />
      </div>

      {/* <div className="bg-black  z-50  left-[50%] -translate-x-[50%] w-[100%] h-fit px-20 ">
        <p className="text-[8vw] z-20 landingtitle  text-center font-medium  text-[#264368] ">
          Expedition
        </p>
      </div> */}
    </div>
  );
}

export default Landing;
