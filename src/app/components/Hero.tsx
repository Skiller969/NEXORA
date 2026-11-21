import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <Image
        src="/hero-bg.webp"
        alt="Warm modern living room interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center rounded-b-2xl"
      />
      <div className="absolute gap-3 flex flex-col ml-12 backdrop-blur-md bg-[#F7F3EB]/90 px-6 py-6 rounded-3xl">
        <p className="text-[#9C7A54] tracking-wider border-b font-semibold border-[#F7F3EB] w-fit drop-shadow-2xl ">
          Make your space truly your
        </p>
        <h1 className="font-serif text-6xl text-[#2A2826] drop-shadow-4xl  ">
          Spaces that tell stories
        </h1>
        <p className="text-[#9C7A54] tracking-wider border-b font-semibold border-[#F7F3EB] w-fit ">
          Interior that makes you fell at home
        </p>

        <div className="flex text-[#2A2826] font-semibold gap-5 font-serif mt-3.5">
          <a
            href=""
            className="rounded-2xl bg-[#2A2826] text-[#F7F3EB] px-3 py-3"
          >
            View work
          </a>
          <a
            href=""
            className="rounded-2xl bg-[#C8BBAE] text-[#2A2826] px-3 py-3 w-fit"
          >
            Enquire
          </a>
        </div>
      </div>
    </section>
  );
}

// Color Name	HEX Code	Best UI Role	Visual Vibe
// Warm Cream	#F7F3EB	Main page background	Soft, sunlit plaster; much gentler on the eyes than pure #FFFFFF
// Charcoal	#2A2826	Primary headings, body text, dark buttons	Deep espresso-charcoal; carries a warm undertone instead of cold #000000
// Muted Bronze	#9C7A54	Accent buttons, links, active borders	Understated metallic warmth; pairs well with oversized wood/linen photography
// Warm Taupe	#C8BBAE	Secondary card backgrounds, subtle dividers	Earthy stone-beige; creates gentle contrast against the cream background
