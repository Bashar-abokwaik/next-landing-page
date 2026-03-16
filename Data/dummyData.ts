
// Hero Campaigns
export const campaigns: { id: number; title: string; subtitle: string; image: string; link: string }[] = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Discover the new styles",
    image: "/campaigns/summer.jpg",
    link: "/store",
  },
  {
    id: 2,
    title: "Streetwear Drop",
    subtitle: "Limited edition",
    image: "/campaigns/streetwear.jpg",
    link: "/store",
  },
  {
    id: 3,
    title: "Winter Jackets",
    subtitle: "Stay warm in style",
    image: "/campaigns/winter.jpg",
    link: "/store",
  },
];

// Categories
export const categories: { id: number; name: string; image: string }[] = [
  { id: 1, name: "T-Shirts", image: "/categories/tshirts.jpg" },
  { id: 2, name: "Hoodies", image: "/categories/hoodies.jpg" },
  { id: 3, name: "Jeans", image: "/categories/jeans.jpg" },
  { id: 4, name: "Jackets", image: "/categories/jackets.jpg" },
];

// Best Sellers
export const bestSellers: { id: number; name: string; price: string; image: string; link: string }[] = [
  {
    id: 1,
    name: "Black Hoodie",
    price: "$49.99",
    image: "/products/black-hoodie.jpg",
    link: "/store/product/black-hoodie",
  },
  {
    id: 2,
    name: "Blue Denim Jacket",
    price: "$89.99",
    image: "/products/denim-jacket.jpg",
    link: "/store/product/denim-jacket",
  },
  {
    id: 3,
    name: "Graphic T-Shirt",
    price: "$29.99",
    image: "/products/graphic-tshirt.jpg",
    link: "/store/product/graphic-tshirt",
  },
];

// New Arrivals
export const newArrivals: { id: number; name: string; price: string; image: string; link: string }[] = [
  {
    id: 1,
    name: "Red Hoodie",
    price: "$54.99",
    image: "/products/red-hoodie.jpg",
    link: "/store/product/red-hoodie",
  },
  {
    id: 2,
    name: "White Sneakers",
    price: "$79.99",
    image: "/products/white-sneakers.jpg",
    link: "/store/product/white-sneakers",
  },
  {
    id: 3,
    name: "Black Jeans",
    price: "$59.99",
    image: "/products/black-jeans.jpg",
    link: "/store/product/black-jeans",
  },
];

// About Brand
export const aboutBrand: { title: string; description: string; image: string } = {
  title: "About NovaStyle",
  description:
    "NovaStyle is a fashion-forward brand delivering quality clothing for men and women. We combine comfort, style, and sustainability to bring you the best.",
  image: "/about/about-us.jpg",
};


// Footer Links
export const footerLinks: { company: string[]; support: string[]; social: string[] } = {
  company: ["About Us", "Careers", "Press"],
  support: ["Contact Us", "FAQ", "Shipping & Returns"],
  social: ["Facebook", "Instagram", "Twitter", "TikTok"],
};

