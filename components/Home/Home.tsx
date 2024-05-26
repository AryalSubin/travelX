import React from "react";
import Landing from "../landing/Landing";
import Waitlist from "../waitlist/Waitlist";
import Services from "../services/Services";
import ParallaxTestimonial from "../testimonials/Testimonial";
import PopularTrek from "../popularDestinations/PopularDestinations";
import TopExpeditions from "../top_expeditions/TopExpeditions";

type Props = {};

function HomePage({}: Props) {
  return (
    <div data-scroll data-scroll-section className="min-h-screen  w-full">
      <Landing />
      <Waitlist />
      <Services />
      <PopularTrek />
      <TopExpeditions />
      <ParallaxTestimonial />
    </div>
  );
}

export default HomePage;
