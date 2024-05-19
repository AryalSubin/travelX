import HomePage from "@/components/Home/Home";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Navbar />
      <HomePage />
      <div className="h-[100vh] w-full bg-black"></div>
    </div>
  );
}
