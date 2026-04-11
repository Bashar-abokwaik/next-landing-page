
// Best Sellers
export const bestSellers: {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    name: "Black Hoodie",
    price: "$49.99",
    image: "/Images/products-imges/Black Hoodie.jpg",
    link: "/store/product/black-hoodie",
  },
  {
    id: 2,
    name: "Blue Denim Jacket",
    price: "$89.99",
    image: "/Images/products-imges/Blue Denim Jacket.jpg",
    link: "/store/product/denim-jacket",
  },
  {
    id: 3,
    name: "Graphic T-Shirt",
    price: "$29.99",
    image: "/Images/products-imges/Graphic T-Shirt.jpg",
    link: "/store/product/graphic-tshirt",
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    price: "$69.99",
    image: "/Images/products-imges/Slim Fit Jeans.jpg",
    link: "/store/product/slim-jeans",
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: "$199.99",
    image: "/Images/products-imges/Leather Jacket.jpg",
    link: "/store/product/leather-jacket",
  },
  {
    id: 6,
    name: "White Sneakers",
    price: "$79.99",
    image: "/Images/products-imges/White Sneakers.jpg",
    link: "/store/product/white-sneakers",
  },
];

// New Arrivals
export const newArrivals: {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    name: "Red Hoodie",
    price: "$54.99",
    image: "/Images/products-imges/Red Hoodie.jpg",
    link: "/store/product/red-hoodie",
  },
  {
    id: 2,
    name: "White Sneakers",
    price: "$79.99",
    image: "/Images/products-imges/White Sneakers.jpg",
    link: "/store/product/white-sneakers",
  },
  {
    id: 3,
    name: "Black Jeans",
    price: "$59.99",
    image: "/Images/products-imges/Black Jeans.jpg",
    link: "/store/product/black-jeans",
  },
  {
    id: 4,
    name: "Green T-Shirt",
    price: "$24.99",
    image: "/Images/products-imges/Green T-Shirt.jpg",
    link: "/store/product/green-tshirt",
  },
];

export const aboutSections = [
  {
    title: "Our Story",
    description:
      "NovaStyle was built with a vision to redefine modern fashion. We focus on simplicity, elegance, and timeless designs that fit every lifestyle.",
    image: "/Images/about-images/about1.jpg",
  },
  {
    title: "Quality First",
    description:
      "Every piece we create is crafted with premium materials to ensure comfort and durability. We believe quality is not optional, it's essential.",
    image: "/Images/about-images/about2.jpg",
  },
  {
    title: "Sustainable Future",
    description:
      "We are committed to sustainable practices, reducing waste and supporting ethical production to protect our planet.",
    image: "/Images/about-images/about3.jpg",
  },
];

// Footer Links
export const footerLinks: {
  company: string[];
  support: string[];
  social: string[];
} = {
  company: ["About Us", "Careers", "Press"],
  support: ["Contact Us", "FAQ", "Shipping & Returns"],
  social: ["Facebook", "Instagram", "Twitter", "TikTok"],
};
