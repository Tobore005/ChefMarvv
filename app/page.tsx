import Image from "next/image";
import Hero from "./Components/Hero";
import Specialties from "./Components/Specialties";
import AboutChef from "./Components/AboutChef";
import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";

export default function Home() {
  return (
    <div >
      <Hero />
      <Specialties />
      <AboutChef />
      <Booking />
      <Footer />
      <CustomCursor />
    </div>
  );
}
