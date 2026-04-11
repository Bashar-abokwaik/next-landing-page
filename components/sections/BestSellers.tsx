import Image from "next/image";
import { bestSellers } from "../../Data/dummyData";
import Slider from "../UI/Slider";

function BestSellers() {
  return (
    <div id="best-sellers" className="py-8 px-4 bg-[#f9f9f9]">
      <h2 className="text-3xl font-bold mb-6 text-[#3b5b81] ml-[5%]">
        Best Sellers
      </h2>
      <Slider items={bestSellers}>
        {bestSellers.map((item) => (
          <div key={item.id} className="w-1/3 p-2 md:w-1/3 sm:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="w-full h-64 object-contain rounded mb-4"
              />
              <h3 className="text-[#3b5b81] text-lg font-semibold">{item.name}</h3>
              <p className="text-[#c07e2b] font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestSellers;
