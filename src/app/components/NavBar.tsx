import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 text-[#F7F3EB] md:px-16">
      <a href="" className="text-2xl font-bold tracking-wide">
        Atelier Interiors
      </a>
      <div className="flex px-4 py-4 gap-8  mx-5 rounded-full bg-[#F7F3EB]/85 text-[#2A2826]">
        <Link href="/" className="text-xl font-semibold">
          Home
        </Link>
        <Link href="#about" className="text-xl font-semibold">
          About
        </Link>
        <Link href="#services" className="text-xl font-semibold">
          Services
        </Link>
        <Link href="#contact" className="text-xl font-semibold">
          Contact
        </Link>
      </div>
    </nav>
  );
}
