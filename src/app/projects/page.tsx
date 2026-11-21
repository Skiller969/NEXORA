import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";
import ProjectCards from "../components/ProjectGallery";
import ProjectCTA from "../components/ProjectCTA";

export default function Projects() {
  return (
    <main className="bg-[#F7F3EB] min-h-screen">
      <NavBar />
      <section className="text-center pt-36">
        <div className="flex flex-col gap-3">
          <p className="text-[#9C7A54] text-xs">SELECTED WORK — 2021-2026</p>
          <p className="text-[#9C7A54] text-5xl font-serif ">
            Spaces we shaped
          </p>
          <p className="text-[#9C7A54] tracking-wide">
            A collection of spaces shaped by thoughtful design, considered
            materials and a deeper understanding of how people live, work and
            connect.
          </p>
          <p className="text-xs text-[#9C7A54]  ">
            ~A selection of residential and commercial projects by Atelier
            Interiors.
          </p>
        </div>
        <div className="mt-6 text-center flex flex-col items-center">
          <p className="text-2xl text-[#9C7A54] mb-3 font-serif">
            The Residence
          </p>
          <div className="relative h-96  w-full max-w-3xl mx-auto items-center overflow-hidden rounded-b-2xl flex flex-col justify-center border border-[#9C7A54] ">
            <Image
              src="/featured image.jpg"
              alt="Warm modern living room interior"
              fill
              sizes="(max-width: 612px) 100vw, 612px"
              className="z-0 rounded-b-2xl object-cover object-center"
            />
          </div>
          <div className="flex text-[#C8BBAE]  mt-3 gap-2 text-sm">
            <p>Mumbai, Maharashtra •</p>
            <p>Residential •</p>
            <p>2025</p>
          </div>
          <p className="text-[#9C7A54] px-8">
            A contemporary residence designed around natural textures, warm
            materials and understated luxury. Every space balances functionality
            with a quiet sense of sophistication, creating a home that feels
            both personal and timeless.
          </p>
        </div>
        <ProjectCards />
        <ProjectCTA />

        <Footer />
      </section>
    </main>
  );
}

// Color Name	HEX Code	Best UI Role	Visual Vibe
// Warm Cream	#F7F3EB	Main page background	Soft, sunlit plaster; much gentler on the eyes than pure #FFFFFF
// Charcoal	#2A2826	Primary headings, body text, dark buttons	Deep espresso-charcoal; carries a warm undertone instead of cold #000000
// Muted Bronze	#9C7A54	Accent buttons, links, active borders	Understated metallic warmth; pairs well with oversized wood/linen photography
// Warm Taupe	#C8BBAE	Secondary card backgrounds, subtle dividers	Earthy stone-beige; creates gentle contrast against the cream background
