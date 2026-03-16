import "./globals.css";
import Navbar from "../components/Navbar";
import HeroCampaignSlider from "../components/HeroCampaignSlider";
import About from "../components/About";
import BestSellers from "@/components/BestSellers";
import NewArrivals from "@/components/NewArrivals";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroCampaignSlider />
      <About />
      <BestSellers />
      <NewArrivals />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}