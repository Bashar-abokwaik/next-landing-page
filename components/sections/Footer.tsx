import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = {
  quickLinks: [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "New Arrivals", href: "#new-arrivals" },
    { title: "Best Sellers", href: "#best-sellers" },
    { title: "Why Choose Us", href: "#why-choose-us" },
  ],

  account: [
    { title: "Explore Store", href: "http://localhost:5173" },
    { title: "Products", href: "http://localhost:5173/products" },
    { title: "Contact", href: "http://localhost:5173/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#3b5b81] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-3">
        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-bold text-[#c07e2b]">Quick Links</h3>

          <ul className="space-y-3">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="transition-all duration-300 hover:pl-1 hover:text-[#c07e2b]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 text-xl font-bold text-[#c07e2b]">Explore</h3>

          <ul className="space-y-3">
            {footerLinks.account.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="transition-all duration-300 hover:pl-1 hover:text-[#c07e2b]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-xl font-bold text-[#c07e2b]">Connect</h3>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/bashar-abokwaik/"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#c07e2b] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/bashar_5520/"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#c07e2b] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/bashar.abokwaik"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#c07e2b] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:basharabokaik@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#c07e2b] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
            Follow NovaStyle for the latest fashion trends and exclusive
            updates.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/70 md:flex-row">
          <p>© {new Date().getFullYear()} NovaStyle. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-[#c07e2b]">
              Bashar Abokwaik
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
