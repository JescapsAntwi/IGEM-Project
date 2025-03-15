import { Link } from "react-router-dom";
import {
  ArrowUpCircle,
  Mail,
  Globe,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="iGEM Sea Titans Logo"
                className="h-16 object-contain"
              />
            </Link>
            <p className="mb-4 text-sea-200">
              Addressing coastal erosion and plastic pollution through synthetic
              biology and community engagement.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/human-practices"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  Human Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sea-400" />
                <a
                  href="mailto:info@igemseatitatns.org"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  info@igemseatitatns.org
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-sea-400" />
                <a
                  href="https://igem.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sea-200 hover:text-sea-400 transition-colors"
                >
                  igem.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-sea-200 hover:text-sea-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-sea-200 hover:text-sea-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-sea-200 hover:text-sea-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sea-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sea-300 text-sm">
            © {new Date().getFullYear()} iGEM Sea Titans. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 inline-flex items-center text-sea-300 hover:text-sea-400 transition-colors"
          >
            Back to Top
            <ArrowUpCircle className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
