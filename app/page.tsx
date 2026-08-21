import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F1]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contacts />
    </main>
  );
}