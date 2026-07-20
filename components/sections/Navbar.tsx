import HamburgerMenu from "../UI/HamburgerMenu";
import ScrolledNav from "../UI/ScrolledNav";
import ThemeToggle from "../UI/ThemeToggle";

function Navbar() {
  // Define the classes for the list items in the navigation menu
  const liClasses =
    "cursor-pointer transition-colors duration-300 hover:text-[#c07e2b]";
  return (
    <nav>
      <ScrolledNav>
        <HamburgerMenu liClasses={liClasses}>
          <h1 className="text-3xl font-logo tracking-tight">NovaStyle</h1>
          <ul className="hidden md:flex space-x-8 text-lg font-heading">
            <li className={liClasses}>
              <a href="#about">About</a>
            </li>
            <li className={liClasses}>
              <a href="#best-sellers">Best Sellers</a>
            </li>
            <li className={liClasses}>
              <a href="#new-arrivals">New Arrivals</a>
            </li>
            <li className={liClasses}>
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
          </ul>

          <ThemeToggle />

          <a
            href="https://novastyle-store.web.app/"
            className="hidden md:inline-block px-5 py-2 bg-[#c07e2b] text-white font-semibold rounded-md hover:bg-[#b06c26] transition"
          >
            Shop Now
          </a>
        </HamburgerMenu>
      </ScrolledNav>
    </nav>
  );
}

export default Navbar;
