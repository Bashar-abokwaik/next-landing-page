import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/Images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/60 to-transparent"></div>
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 pt-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3b5b81] mb-4">
            Discover Your Style
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Modern fashion that fits your lifestyle. Clean, elegant and made for
            you.
          </p>
          <button className="bg-[#c07e2b] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
