import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomePageServices from "./components/HomePageServices";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="relative bg-[#F7F3EB]  ">
      <NavBar />
      <Hero />
      <HomePageServices />
      <CTA />
      <Footer />
    </main>
  );
}
