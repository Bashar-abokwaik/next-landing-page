"use client";

import { useQuery } from "@tanstack/react-query";
import Placeholder from "../UI/Placeholder/Placeholder";
import { getDiscountedPrice }from "../../utils/discountedPrice";

// Define the type for a product item
type productTemplate = {
  _id: string;
  title: string;
  description: string;
  price: number;
  costPrice: number;
  imageUrl?: string;
  stock: number;
  categoryId: string;
  categorySlug: string;
  collectionId?: string;
  collectionSlug?: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  discount?: number;

  [key: string]: string | number | boolean | object | undefined;
};

// Define the response type for the new arrivals API
type NewArrivalsResponse = {
  message: string;
  products: productTemplate[];
};

export default function NewArrivals() {
  // Use React Query to fetch the new arrivals data
  const { data, isLoading, error } = useQuery<NewArrivalsResponse>({
    queryKey: ["new-arrivals"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/new-arrivals",
        );
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
        throw error;
      }
    },
  });

  if (error) {
    return <p className="text-center py-10">Failed to load products</p>;
  }


  // Show a loading state while the data is being fetched
  if (isLoading) {
    return (
      <section
        id="new-arrivals"
        className="bg-[#f3f3f3] py-12 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#3b5b81] dark:text-white md:text-4xl">
            New Arrivals
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Placeholder key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="new-arrivals" className="py-12 bg-[#f3f3f3] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3b5b81] text-center dark:text-white">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <a
                href={`${item.discount ? `http://localhost:5173/offers/${item._id}` : `http://localhost:5173/products/${item._id}`}`}
              >
                <div className="relative w-full h-72">
                  <img
                    src={item.imageUrl || ""}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-semibold text-[#3b5b81] mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[#c07e2b] font-bold text-lg">
                    ${item.discount ? getDiscountedPrice(item.price, item.discount) : item.price}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
