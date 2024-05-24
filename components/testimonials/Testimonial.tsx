import { motion } from "framer-motion";
import React from "react";
// import reviewHeadImage from "@/public/assets/designinc_avtar.png";
import Image from "next/image";

type Props = {};

function ParallaxTestimonial({ testimonialRef }: any) {
  return (
    <div
      ref={testimonialRef}
      className="h-screen flex px-4 sm:px-16 my-16  flex-col justify-center items-center w-full pt-20 bg-white overflow-hidden "
    >
      <div className="w-full">
        {/* <h1 className="  text-sm text-[#40B69E] ">Testimonials</h1> */}
        <p className="font text-2xl md:text-7xl text-start w-full trackong-wider">
          Client Reviews
        </p>
      </div>

      {/* vertical  */}
      <div className="flex  justify-center relative gap-4 py-4  w-full sm:h-[80vh] h-[90vh]  ">
        <div className="absolute w-full h-[20%]  top-0 left-0  bg-gradient-to-b from-[#fff] via-[#fff] to-transparent   z-20"></div>
        <div className="absolute w-full h-[20%]   bottom-0 right-0 bg-gradient-to-b from-transparent via-[#fff] to-[#fff] z-20"></div>
        <div className="whole-div max-sm:hidden  relative flex flex-col   flex-nowrap overflow-hidden  ">
          {[1, 2, 3].map((item) => {
            return (
              <motion.div
                key={item}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 65,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="move  gap-8 flex w-full  flex-col pt-8  justify-center z-10"
              >
                {reviewData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col  min-w-[300px] max-w-full h-fit  "
                    >
                      <div className="four w-full flex flex-col gap-4 justify-between p-4 bg-[#f1f1f1]  border border-gray-200 rounded-2xl h-full">
                        <div className="flex flex-col gap-2 ">
                          <p className="text-sm font-[300] font-sans  leading-5 text-gray-800">
                            {item.review}
                            <span className="text-[#33aa77] font-bold">
                              {item.hpart}{" "}
                            </span>
                            {item.lpart}
                          </p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <svg
                                key={item}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-yellow-500"
                              >
                                <path
                                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex  gap-2 px-2 ">
                            <div className="size-12 bg-white  border-2 border-gray-300  rounded-full overflow-hidden">
                              {/* <Image
                                className="w-full h-full object-cover"
                                src={reviewHeadImage}
                                alt="testimonial designinc"
                              /> */}
                            </div>
                            <div className="flex flex-col justify-center gap-1 text-sm text-gray-500 font-semibold ">
                              <p className="text-base capitalize">
                                {item.name}
                              </p>
                              <p className="text-xs font-normal">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
        <div className="whole-div max-xl:hidden relative flex flex-col   flex-nowrap overflow-hidden  ">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <motion.div
                key={item}
                initial={{ y: "-100%" }}
                animate={{ y: "-50%" }}
                transition={{
                  duration: 75,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="move  gap-8 flex w-full  flex-col pt-8  justify-center z-10"
              >
                {reviewData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col  min-w-[300px] max-w-full h-fit  "
                    >
                      <div className="four w-full flex flex-col gap-4 justify-between p-4 bg-[#f1f1f1]  border border-gray-200 rounded-2xl h-full">
                        <div className="flex flex-col gap-2 ">
                          <p className="text-sm font-[300] font-sans  leading-5 text-gray-800">
                            {item.review}
                            <span className="text-[#33aa77] font-bold">
                              {item.hpart}{" "}
                            </span>
                            {item.lpart}
                          </p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <svg
                                key={item}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-yellow-500"
                              >
                                <path
                                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex  gap-2 px-2 ">
                            <div className="size-12 bg-white  border-2 border-gray-300  rounded-full overflow-hidden">
                              {/* <Image
                                className="w-full h-full object-cover"
                                src={reviewHeadImage}
                                alt="testimonial designinc"
                              /> */}
                            </div>
                            <div className="flex flex-col justify-center gap-1 text-sm text-gray-500 font-semibold ">
                              <p className="text-base capitalize">
                                {item.name}
                              </p>
                              <p className="text-xs font-normal">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>{" "}
        <div className="whole-div relative flex flex-col   flex-nowrap overflow-hidden  ">
          {[1, 2, 3].map((item) => {
            return (
              <motion.div
                key={item}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 55,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="move  gap-8 flex w-full  flex-col pt-8  justify-center z-10"
              >
                {reviewData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col  min-w-[300px] max-w-full h-fit  "
                    >
                      <div className="four w-full flex flex-col gap-4 justify-between p-4 bg-[#f1f1f1]  border border-gray-200 rounded-2xl h-full">
                        <div className="flex flex-col gap-2 ">
                          <p className="text-sm font-[300] font-sans  leading-5 text-gray-800">
                            {item.review}
                            <span className="text-[#33aa77] font-bold">
                              {item.hpart}{" "}
                            </span>
                            {item.lpart}
                          </p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <svg
                                key={item}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-yellow-500"
                              >
                                <path
                                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex  gap-2 px-2 ">
                            <div className="size-12 bg-white  border-2 border-gray-300  rounded-full overflow-hidden">
                              {/* <Image
                                className="w-full h-full object-cover"
                                src={reviewHeadImage}
                                alt="testimonial designinc"
                              /> */}
                            </div>
                            <div className="flex flex-col justify-center gap-1 text-sm text-gray-500 font-semibold ">
                              <p className="text-base capitalize">
                                {item.name}
                              </p>
                              <p className="text-xs font-normal">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div>{" "}
        {/* <div className="whole-div max-lg:hidden relative flex flex-col   flex-nowrap overflow-hidden  ">
          {[1, 2, 3].map((item) => {
            return (
              <motion.div
                key={item}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 95,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="move  gap-8 flex w-full  flex-col pt-8  justify-center z-10"
              >
                {reviewData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col  min-w-[300px] max-w-full h-fit  "
                    >
                      <div className="four w-full flex flex-col gap-4 justify-between p-4 bg-[#f1f1f1]  border border-gray-200 rounded-2xl h-full">
                        <div className="flex flex-col gap-2 ">
                          <p className="text-sm font-[300] font-sans  leading-5 text-gray-800">
                            {item.review}
                            <span className="text-[#33aa77] font-bold">
                              {item.hpart}{" "}
                            </span>
                            {item.lpart}
                          </p>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((item) => (
                              <svg
                                key={item}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 text-yellow-500"
                              >
                                <path
                                  d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex  gap-2 px-2 ">
                            <div className="size-12 bg-white  border-2 border-gray-300  rounded-full overflow-hidden">
                              
                            </div>
                            <div className="flex flex-col justify-center gap-1 text-sm text-gray-500 font-semibold ">
                              <p className="text-base capitalize">
                                {item.name}
                              </p>
                              <p className="text-xs font-normal">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </div> */}
        {/* ))} */}
      </div>
    </div>
  );
}

const reviewData = [
  {
    id: 1,
    name: "Anjali Sharma",
    title: "CTO of Himalayan Treks",
    review:
      "Working with DesignInc was a pleasure.Their MERN stack expertise and React Native skills made our website stunning and functional.",
    hpart: "Native skills made our website stunning and functional.",
    lpart: "We couldn't be happier!",
  },
  {
    id: 2,
    name: "Priya Karki",
    title: "Founder of EduNepal",
    review:
      "DesignInc developed a comprehensive company profile for us that is both professional and visually appealing.",
    hpart: " It effectively communicates our values and mission.",
    lpart: "We couldn't be happier with the result",
  },
  {
    id: 3,
    name: "Rita Thapa",
    title: "COO of Urban Lifestyle",
    review:
      "DesignInc's brochure design for our latest product launch was outstanding.",
    hpart: " The layout was clean and engaging,",
    lpart:
      "making it easy for our customers to understand our offerings. Excellent work!",
  },
  {
    id: 4,
    name: "Kiran Shrestha",
    title: "CEO of Base Enterprise",
    review:
      "DesignInc designed an eye-catching event poster for our annual festival.",
    hpart:
      "The vibrant colors and creative layout captured everyone's attention ",
    lpart: "and boosted our event attendance significantly. Amazing job!",
  },
];

export default ParallaxTestimonial;
