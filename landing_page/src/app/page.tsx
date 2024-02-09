import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurWorks from "@/components/OurWorks";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${inter}`}>
      <Header />
      <HeroSection />
      <Projects />
      <OurWorks />
      <Footer />
    </main>
  );
}
