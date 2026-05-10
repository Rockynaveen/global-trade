import { useNavigate } from "react-router";

import Header from "../components/common/header";
import HeroSection from "../components/home/hero-section";
import Footer from "../components/common/footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      {/* HERO */}
      <HeroSection />
      <Footer />
    </div>
  );
}