import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Shop Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/collections/men" className="hover:underline">
                Men
              </Link>
            </li>
            <li>
              <Link href="/collections/women" className="hover:underline">
                Women
              </Link>
            </li>
            <li>
              <Link href="/collections/kids" className="hover:underline">
                Kids
              </Link>
            </li>
            <li>
              <Link href="/collections/sale" className="hover:underline">
                Sale
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:underline">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:underline">
                Shipping Info
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:underline">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get the latest updates on new arrivals and exclusive offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-5">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Shoe Shop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
