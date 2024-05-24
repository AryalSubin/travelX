import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-between  w-full px-16 pt-16 ">
      <div className="flex">
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
      <div className="flex justify-between py-10 text-gray-400">
        <div>Terms & conditions | Privacy policy</div>
        <div>&copy; All right reserved</div>
      </div>
    </div>
  );
}

export default Footer;
