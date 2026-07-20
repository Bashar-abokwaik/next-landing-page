"use client";

import { useQuery } from "@tanstack/react-query";
import Slider from "../UI/Slider";
import Placeholder from "../UI/Placeholder/Placeholder";
import { motion } from "framer-motion";

import {getDiscountedPrice} from "../../utils/discountedPrice";

// Define the type for a product item
type ProductItem = {
  _id: string;
  totalSold: number;
  product: {
    _id: string;
    title: string;
    imageUrl: string;
    price: number;
    discount?: number;
  };
};

// Define the response type for the best sellers API
type BestSellersResponse = {
  message: string;
  products: ProductItem[];
};

// Define the animation for the container of the slider
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const itemAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function BestSellers() {
  // Use React Query to fetch the best sellers data
  const { data, isLoading, error } = useQuery<BestSellersResponse>({
    queryKey: ["best-sellers"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/best-sellers`,
        );
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      } catch (error) {
        console.error("Error fetching best sellers:", error);
        throw error;
      }
    },
  });

  // Extract the products from the fetched data, defaulting to an empty array if data is undefined
  const products: ProductItem[] = data?.products || [];

  if (error) {
    return <p className="text-center py-10">Failed to load products</p>;
  }

  // Show a loading state while the data is being fetched
  if (isLoading) {
    return (
      <section
        id="best-sellers"
        className="bg-[#f9f9f9] px-4 py-8 dark:bg-slate-950"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3b5b81] dark:text-white mb-16">
          Best Sellers
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-full sm:w-[48%] lg:w-[30%] xl:w-[23%]">
              <Placeholder />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Render the best sellers section
  return (
    <div id="best-sellers" className="py-8 px-4 bg-[#f9f9f9] dark:bg-slate-950">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3b5b81] dark:text-white mb-16">
        Best Sellers
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Slider items={products}>
          {products.map((item) => (
            <motion.div
              key={item._id}
              variants={itemAnimation}
              className="w-1/3 p-2 md:w-1/3 sm:w-1/2"
            >
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b5b81]/20 transition-transform duration-300">
                <a
                  href={`${item.product.discount ? `http://localhost:5173/offers/${item.product._id}` : `http://localhost:5173/products/${item.product._id}`}`}
                  className="block"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      width={400}
                      height={400}
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105 rounded mb-4"
                    />
                  </div>

                  <h3 className="text-[#3b5b81] dark:text-white text-lg font-semibold">
                    {item.product.title}
                  </h3>

                  <p className="text-[#c07e2b] font-bold">
                    ${item.product.discount ? getDiscountedPrice(item.product.price, item.product.discount) : item.product.price}
                  </p>
                </a>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default BestSellers;
