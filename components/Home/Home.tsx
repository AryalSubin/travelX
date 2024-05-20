import React from "react";
import Landing from "../landing/Landing";

type Props = {};

function HomePage({}: Props) {
  return (
    <div data-scroll
    data-scroll-section className="min-h-screen  w-full">
      <Landing />
    </div>
  );
}

export default HomePage;
