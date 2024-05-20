"use client";
import React, { useRef } from "react";
import clouds from "@/public/landing/clouds22.png";
// import clouds2 from "@/public/landing/clouds2.png";
import middleCloud from "@/public/landing/middleCloud.png";
// import clouds3 from "@/public/landing/clouds3.png";
import mountain11 from "@/public/landing/mountain11.png";
import mountain1 from "@/public/landing/mountain1.jpg";
import mountain2 from "@/public/landing/mountain22.png";
import mountainfiller from "@/public/landing/mountainfill.png";
import mountainfiller2 from "@/public/landing/mountainfill2.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Landing({}: Props) {
  const m1Ref = useRef(null);
  const m2Ref = useRef(null);
  const m3Ref = useRef(null);
  useGSAP(() => {
    const t1p = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallaxdiv",
        start: "top top",
        end: "90% 25%",
        scrub: 1,
        // pin: true,
        markers: true,
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
    t1p.to(
      m2Ref.current,
      {
        y: "-100px",
        // scale: 1,
      },
      "parallax"
    );
    t1p.to(
      m3Ref.current,
      {
        // y: "150px",
      },
      "parallax"
    );
  });
  return (
    <div
      data-scroll
      data-scroll-section
      className="h-screen overflow-hidden parallaxdiv relative scale-1 w-full "
    >
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
          src={mountainfiller2}
          alt="mountain"
        />
      </div>
      <div
        // ref={m3Ref}
        data-scroll
        data-scroll-speed="0"
        className="h-full img3 absolute z-[3] top-[20%] left-0  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={clouds}
          alt="mountain"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.2"
        // ref={m2Ref}
        className="h-full img2 absolute top-[40%] z-[4] !scale-[0.5]  left-[10%]  w-full "
      >
        <Image
          className="h-full w-full object-cover  "
          src={mountain2}
          alt="mountain"
        />
      </div>
      <div
        data-scroll
        data-scroll-speed="0.2"
        ref={m3Ref}
        className="h-full img3 absolute z-[5] top-[30%] left-0  w-full "
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

      <div className="absolute top-0 z-10  left-0 w-[100%] h-full px-20 ">
        <div className="flex relative w-full h-full flex-col gap-4">
          <div className="absolute flex flex-col gap-4 bottom-[20%] left-0 w-[40%] ">
            <p className="text-4xl font-medium landingtitle">Expedition</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem ipsa repellat ipsum obcaecati reprehenderit alias ex
              distinctio veniam. Eum, exercitationem? Ipsam debitis explicabo
              nostrum eos minus sunt ea voluptas alias assumenda tenetur odio
              vel perferendis ab distinctio veritatis eum eveniet molestias
              illo, reiciendis, quis blanditiis magni ex recusandae? Corrupti,
              delectus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
