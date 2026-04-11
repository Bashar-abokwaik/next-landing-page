import Navbar from "../components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import About from "../components/sections/About";
import BestSellers from "@/components/sections/BestSellers";
import NewArrivals from "@/components/sections/NewArrivals";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/sections/Footer";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <About />
      <BestSellers />
      <NewArrivals />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
