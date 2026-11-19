import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex px-4 py-6 justify-between rounded-2xl mx-5">
        <Link href="/" className="text-2xl font-semibold">
          Home
        </Link>
        <Link href="#about" className="text-2xl font-semibold">
          About
        </Link>
        <Link href="#services" className="text-2xl font-semibold">
          Services
        </Link>
        <Link href="#contact" className="text-2xl font-semibold">
          Contact
        </Link>
      </div>
    </nav>
  );
}
