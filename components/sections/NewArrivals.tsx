import { newArrivals } from "../../Data/dummyData";
import Image from "next/image";

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-12 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3b5b81] text-center">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-72">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#3b5b81] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#c07e2b] font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}