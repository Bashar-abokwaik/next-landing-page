import { FaShippingFast, FaGem, FaUndo, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={30} />,
    title: "Fast Shipping",
    description: "Get your favorite styles delivered quickly and safely.",
  },
  {
    icon: <FaGem size={30} />,
    title: "Premium Quality",
    description: "We provide high-quality clothing made to last.",
  },
  {
    icon: <FaUndo size={30} />,
    title: "Easy Returns",
    description: "Not satisfied? Return items easily and hassle-free.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Secure Payment",
    description: "Your payment information is safe and encrypted.",
  },
];

function WhyChooseUs() {
  return (
    <section id="way-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3b5b81] mb-12">
          Why Choose NovaStyle?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-[#c07e2b] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#3b5b81] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
