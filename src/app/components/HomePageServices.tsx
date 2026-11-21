const services = [
  {
    number: "01",
    title: "Modular Interiors",
    description:
      "Tailored kitchen, wardrobe, and storage systems built for seamless everyday living.",
  },
  {
    number: "02",
    title: "Full-Home Architecture & Design",
    description:
      "End-to-end spatial planning, material curation, and turnkey execution from bare shell to move-in.",
  },
  {
    number: "03",
    title: "Bespoke Furniture & Millwork",
    description:
      "Custom-crafted solid wood pieces and built-ins proportioned specifically for your rooms.",
  },
  {
    number: "04",
    title: "Styling & Material Curation",
    description:
      "Warm lighting, natural textiles, and art placement that bring quiet character to modern spaces.",
  },
];

export default function HomePageServices() {
  return (
    <section
      id="services"
      className="w-full bg-[#F7F3EB] px-6 py-24 text-[#2A2826] md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="w-fit border-b border-[#9C7A54] pb-1 text-xs font-semibold tracking-widest text-[#9C7A54] uppercase">
          What We Do
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          Design Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-[#2A2826]/15 bg-[#C8BBAE]/20 p-8 transition "
            >
              <span className="font-serif text-sm font-semibold text-[#9C7A54]">
                {service.number}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-[#2A2826]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2A2826]/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-3 bg-[#2A2826] text-[#F7F3EB] px-3 py-3 rounded-xl fon">
        View more....
      </p>
    </section>
  );
}
