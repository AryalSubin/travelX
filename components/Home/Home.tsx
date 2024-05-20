import React from "react";
import Landing from "../landing/Landing";

type Props = {};

function HomePage({}: Props) {
  return (
    <div data-scroll data-scroll-section className="min-h-screen  w-full">
      <Landing />
      <div
        data-scroll
        data-scroll-speed="1"
        className="h-screen w-full bg-white"
      ></div>
    </div>
  );
}

export default HomePage;
