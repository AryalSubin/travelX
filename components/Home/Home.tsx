import React from "react";
import Landing from "../landing/Landing";
import Waitlist from "../waitlist/Waitlist";
import Services from "../services/Services";

type Props = {};

function HomePage({}: Props) {
  return (
    <div data-scroll data-scroll-section className="min-h-screen  w-full">
      <Landing />
      <Waitlist />
      <Services />
    </div>
  );
}

export default HomePage;
