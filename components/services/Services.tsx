import React from "react";
import serviceBack from "@/public/services/service_back.jpg";
import serviceBackimage from "@/public/services/service_back.jpg";
import Image from "next/image";
import "./Services.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
type Props = {};

function Services({}: Props) {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bgchangediv",
        start: "top 50%",
        end: "80% bottom",
        // markers: true,
        scrub: 2,
      },
    });
    // t1.to(".bgchangediv", {
    //   // background: "linear-gradient(to bottom right, #525252, #000)",
    //   backgroundColor: "transparent",
    //   color: "#fff",
    // });
  });
  return (
    <>
      <div className="h-[100vh]  overflow-hidden">
        <div className="image-container relative ">
          {/* <div className="text h-[80vh] overflow-hidden bg-white absolute top-[0%] -translate-x-[50%]  text-[11vw] leading-[11vw] tracking-wider font-semibold mix-blend-screen px-[60vh] pb-[10vh] text-start text-nowrap  left-[50%]">
            <span>
              Explore more <br /> worry less, <br /> always
            </span>
          </div> */}
          <div className="absolute top-0 left-0 bg-black/40 h-full w-full z-20"></div>
          <div className="h-[100vh] z-30 bgchangediv bg-transparent text-white  absolute bottom-0 left-0 w-full ">
            <div className="h-full w-full flex flex-col items-center gap-16 py-[20vh] px-20  ">
              <div className="flex flex-col gap-4">
                <p className="text-4xl  font-bold ">Our services</p>
                <p className="w-[70%]  ">
                  Our travel website offers a seamless experience for adventure
                  seekers and leisure travelers alike. We provide comprehensive
                  services including personalized travel itineraries, exclusive
                  deals on flights and accommodations, and 24/7 customer
                  support. Discover hidden gems, enjoy hassle-free bookings, and
                  embark on unforgettable journeys with our expertly curated
                  travel solutions.
                </p>
              </div>
              <div className="flex justify-center  gap-4">
                {[1, 2, 3, 4].map(() => (
                  <div className=" h-full w-full   flex flex-col gap-4  py-8 items-start  ">
                    <div className="size-[80px] ">
                      <Icon
                        className="h-full w-full"
                        icon="hugeicons:service"
                      />
                    </div>
                    <p className="font-semibold text-xl pt-4"> Lorem ipsum</p>
                    <p className="">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut minima possimus voluptate
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
