import { footerLinks } from "../Data/dummyData";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul>
            {footerLinks.company.map((link, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <ul>
            {footerLinks.support.map((link, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            {footerLinks.social.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 NovaStyle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
