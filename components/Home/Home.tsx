import React from "react";
import Landing from "../landing/Landing";
import Waitlist from "../waitlist/Waitlist";
import Services from "../services/Services";
import ParallaxTestimonial from "../testimonials/Testimonial";
import PopularTrek from "../popularDestinations/PopularDestinations";

type Props = {};

function HomePage({}: Props) {
  return (
    <div data-scroll data-scroll-section className="min-h-screen  w-full">
      <Landing />
      <Waitlist />
      <Services />
      <PopularTrek />
      <ParallaxTestimonial />
    </div>
  );
}

export default HomePage;
