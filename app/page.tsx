"use client";
import HomePage from "@/components/Home/Home";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("#ScrollElementId"), // Specify your scroll container element
        smooth: true,
      });
    })();
  }, []);

  return (
    <div id="ScrollElementId" className="h-full w-full overflow-hidden">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
