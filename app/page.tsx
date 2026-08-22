import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F1]">
      <Navbar />
      <FadeIn><Hero /></FadeIn>
      <FadeIn delay={0.1}><About /></FadeIn>
      <FadeIn delay={0.1}><Services /></FadeIn>
      <FadeIn delay={0.1}><Gallery /></FadeIn>
      <FadeIn delay={0.1}><Contacts /></FadeIn>
      <Footer />
    </main>
  );
}