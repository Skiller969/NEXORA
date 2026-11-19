import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <section className="px-8 py-24 text-center">
        <h1 className="text-5xl font-bold">Business Website</h1>
        <p className="mt-4 text-lg text-gray-600">
          first full-stack development project.
        </p>
      </section>
    </main>
  );
}
