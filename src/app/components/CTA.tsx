import Image from "next/image";
export default function CTA() {
  return (
    <section
      id="CTA"
      className="relative flex min-h-screen w-full items-center overflow-hidden rounded-b-2xl "
    >
      <Image
        src="/cozy-living-room.webp"
        alt="Warm modern living room interior"
        fill
        sizes="100vw"
        className="object-cover z-0 object-center rounded-b-2xl"
      />

      <div className="absolute gap-3 flex flex-col ml-12 backdrop-blur-md bg-[#2a2628]/90 px-6 py-6 rounded-3xl mt-15 mx-auto">
        <p className="tracking-wider border-b font-semibold border-[#F7F3EB] w-fit ">
          {" "}
          Bring Your Vision to Life
        </p>
        <p className="text-4xl font-serif text-[#9C7A54]">
          See. Touch. Experience.
        </p>
        <p className="tracking-wider border-b font-semibold border-[#F7F3EB] w-fit ">
          Secure your vision
        </p>
        <a
          href=""
          className="rounded-2xl bg-[#C8BBAE] text-[#2A2826] font-serif px-5 font-semibold py-3 w-fit"
        >
          Lets talk
        </a>
      </div>
    </section>
  );
}
