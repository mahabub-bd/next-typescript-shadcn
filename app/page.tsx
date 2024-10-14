export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200">
      <div className="container mx-auto py-20 flex flex-col items-center justify-center  px-6 space-y-16 md:space-y-16 ">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-black text-center leading-tight">
          Next.js, Tailwind, TypeScript & ShadCN Template
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-black text-center max-w-3xl leading-relaxed">
          Kickstart your web development project with a powerful template that
          leverages modern technologies like Next.js, Tailwind CSS, TypeScript,
          and ShadCN UI. Build scalable, responsive, and beautiful interfaces
          effortlessly.
        </p>
      </div>
    </section>
  );
}
