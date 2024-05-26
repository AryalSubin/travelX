import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Footer({}: Props) {
  const footerRef = useRef(null);
  // useGSAP(() => {
  //   const tl1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: footerRef.current,
  //       markers: true,
  //       start: "top 90%",
  //       end: "45% center",
  //       scrub: 2,
  //     },
  //   });
  //   tl1.from(".footer", {
  //     height: 0,
  //     scaleX: 1.1,
  //   });
  // });
  return (
    <div
      ref={footerRef}
      className="min-h-[70vh] fixed z-1  bottom-0 bg-zinc-50 flex flex-col justify-between  w-full px-16 pt-16 "
    >
      <div className="flex footer overflow-hidden  ">
        <div className="flex flex-1 h-full w-full ">
          <div className="h-full w-full flex flex-col gap-8">
            <p className="text-black font-semibold">travelX</p>
            <p className="text-gray-400">We do care about details and stuff</p>
          </div>
        </div>
        <div className="flex flex-1 h-full w-full ">
          <div className="h-full w-full flex flex-col  gap-24">
            <p className="text-black font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              tempora. Quam expedita repellendus odio adipisci autem maxime eum
              quod totam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eius, tempora. Quam expedita repellendus odio adipisci autem
              maxime eum quod totam.
            </p>
            <div className="flex ">
              <div className="flex flex-col gap-4 flex-1">
                <p className="uppercase font-medium">visit us</p>
                <div className="flex flex-col gap-2">
                  <p>samakhusi, kathmandu</p>
                  <p>Nepal</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <p className="uppercase font-medium">contact us</p>
                <div className="flex flex-col gap-2">
                  <p>travelX@gmail.com</p>
                  <p>+977984446633</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-10 text-sm text-gray-400">
        <div className="flex flex-1">Terms & conditions | Privacy policy</div>
        <div className="flex flex-1 justify-between">
          <div className="flex gap-2">
            <div className="size-[25px]  cursor-pointer ">
              <Icon
                className="h-full w-full  hover:scale-[1.10] transition-all duration-150 hover:text-gray-600"
                icon="eva:facebook-fill"
              />
            </div>
            <div className="size-[25px]  cursor-pointer">
              <Icon
                className="size-full  hover:scale-[1.10] transition-all duration-150 hover:text-gray-600"
                icon="fa6-brands:x-twitter"
              />
            </div>
            <div className="size-[25px]  cursor-pointer">
              <Icon
                className="size-full  hover:scale-[1.10] transition-all duration-150 hover:text-gray-600"
                icon="fa:instagram"
              />
            </div>
          </div>
          <div>&copy; All right reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
