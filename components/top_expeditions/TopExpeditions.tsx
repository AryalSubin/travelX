import React from "react";

type Props = {};

function TopExpeditions({}: Props) {
  return (
    <div className="h-full    flex justify-center w-full bg-white">
      <div className=" h-full  w-full bg-white  z-50 flex flex-col gap-4 items-center ">
        <p className="text-5xl waitlisttext1 font-medium">Top Expeditons</p>

        <div className=" w-full  h-[50vh] flex justify-center gap-8  overflow-visible px-4 sm:px-16">
          {[1, 2, 3, 4, 5].map(() => (
            <div className="relative flex-grow basis-[]  flex-wrap h-[300px] w-[230px] size-[70%] group mx-auto my-auto z-50 ">
              <div className=" absolute top-0 left-0 size-full group-hover:rotate-[-8deg] rounded-xl origin-center    group-hover:translate-y-[-12%] transition-all duration-500 ease-out  bg-gray-800">
                back
              </div>
              <div className=" absolute top-0 left-0 size-full  mx-auto group-hover:rotate-[8deg] rounded-xl origin-center    group-hover:translate-y-[12%] transition-all duration-500 ease-out  bg-gray-100">
                front
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopExpeditions;
