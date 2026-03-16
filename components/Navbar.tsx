// import Link from "next/link";
function Navbar() {
    const liClasses: string = "hover:text-gray-400 cursor-pointer";
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">NovaStyle</h1>
      <ul className="flex space-x-6">
        <li className={liClasses}><a href="#categories">Collections</a></li>
        <li className={liClasses}><a href="#best-sellers">Best Sellers</a></li>
        <li className={liClasses}><a href="#new-arrivals">New Arrivals</a></li>
        <li className={liClasses}><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

