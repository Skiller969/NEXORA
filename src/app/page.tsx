import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="relative bg-[#F7F3EB]  ">
      <NavBar />
      <Hero />
      <Services />
    </main>
  );
}
