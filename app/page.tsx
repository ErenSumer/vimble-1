import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#fafafa] font-sans">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
