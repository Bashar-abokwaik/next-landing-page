import { footerLinks } from "../../Data/dummyData";

export default function Footer() {
  return (
    <footer className="bg-[#3b5b81] text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start gap-10">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-[#c07e2b] mb-3">Company</h3>
          <ul className="space-y-1">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white hover:text-[#c07e2b] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-[#c07e2b] mb-3">Support</h3>
          <ul className="space-y-1">
            {footerLinks.support.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white hover:text-[#c07e2b] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#c07e2b] mb-3">Follow Us</h3>
          <ul className="flex space-x-4">
            {footerLinks.social.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white hover:text-[#c07e2b] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} NovaStyle. All rights reserved.
      </div>
    </footer>
  );
}
