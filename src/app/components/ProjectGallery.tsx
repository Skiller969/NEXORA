"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Urban Retreat",
    location: "Pune, Maharashtra",
    category: "Residential",
    year: "2025",
    image: "/01.jpg",
    description:
      "A calm urban residence where natural light, warm wood and minimal detailing create a peaceful escape from the pace of city life.",
  },
  {
    number: "02",
    title: "The Atelier Office",
    location: "Mumbai, Maharashtra",
    category: "Commercial",
    year: "2025",
    image: "/02.jpg",
    description:
      "A contemporary workspace designed to encourage creativity and collaboration, combining bold architectural details with warm, functional interiors.",
  },
  {
    number: "03",
    title: "Coastal House",
    location: "Goa",
    category: "Residential",
    year: "2024",
    image: "/03.jpg",
    description:
      "Inspired by its coastal surroundings, this home combines organic textures, natural materials and open spaces to create a relaxed tropical retreat.",
  },
  {
    number: "04",
    title: "The Social Space",
    location: "Bengaluru, Karnataka",
    category: "Commercial",
    year: "2023",
    image: "/04.jpeg",
    description:
      "A hospitality space built around atmosphere and connection, featuring rich materials, layered lighting and intimate seating arrangements.",
  },
  {
    number: "05",
    title: "Minimal Living",
    location: "Solapur, Maharashtra",
    category: "Residential",
    year: "2023",
    image: "/05.webp",
    description:
      "An exploration of simplicity through clean architectural lines, restrained materials and carefully considered details.",
  },
  {
    number: "06",
    title: "Form & Function",
    location: "Mumbai, Maharashtra",
    category: "Commercial",
    year: "2022",
    image: "/06.jpg",
    description:
      "A retail environment where thoughtful spatial planning meets contemporary aesthetics, creating a distinctive and welcoming customer experience.",
  },
];

export default function ProjectCards() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="mt-10 mx-5">
      <div className="flex justify-center gap-4 mb-8">
        <button
          className=" bg-[#9C7A54] text-[#F7F3EB] rounded-full px-6 py-2.5 transition hover:bg-[#80521d]"
          onClick={() => setSelectedCategory("All Projects")}
        >
          All Projects
        </button>

        <button
          className=" bg-[#9C7A54] text-[#F7F3EB] rounded-full px-6 py-2.5 transition hover:bg-[#80521d]"
          onClick={() => setSelectedCategory("Residential")}
        >
          Residential
        </button>

        <button
          className=" bg-[#9C7A54] text-[#F7F3EB] rounded-full px-6 py-2.5 transition hover:bg-[#80521d]"
          onClick={() => setSelectedCategory("Commercial")}
        >
          Commercial
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        {filteredProjects.map((project) => (
          <div
            key={project.number}
            className="rounded-2xl flex flex-col min-w-70 shrink-0 border border-[#2A2826]/15 bg-[#C8BBAE]/20 px-4 py-6 gap-4 max-w-xl"
          >
            <span className="text-[#9C7A54] flex items-start">
              {project.number}
            </span>

            <div className="relative h-64 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <h3 className="text-[#2A2826] font-semibold font-serif tracking-wide">
              {project.title}
            </h3>

            <span className="text-[#9C7A54]">{project.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
