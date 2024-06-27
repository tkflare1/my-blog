import Link from "next/link";
import Image from "next/image";
import { UrlFor } from "@/app/lib/sanity";
import "../mystyles.css"

type Author = {
  name: string;
  image: any;
  bio: string;
};

type FooterProps = {
  authors: Author[];
};

function Footer({ authors }: FooterProps) {
  return (
    <footer className="mt-16 bg-blue-100 py-8 footer-text">
      <div className="flex flex-col items-center justify-center text-center py-8 bg-blue-100">
        <div className="flex items-center justify-between bg-blue-600 text-white rounded-full py-4 px-6 max-w-full w-full">
          <div className="flex -space-x-4">
            {authors.map((author, idx) => (
              <Image
                key={idx}
                src={UrlFor(author.image).url()}
                alt={author.name}
                width={40}
                height={40}
                className="footer-author-image"
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold flex-grow text-center">Uncommon stories start with people like you.</h2>
          <Link href="/donate">
            <button className="ml-4 px-6 py-2 bg-white text-blue-600 rounded-full border border-white">Donate</button>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold">Subscribe to our mailing list</h3>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="mt-4 p-2 border rounded w-full sm:w-auto"
          id="footer"
        />
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">Send</button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-gray-600">Uncommon.org is a 501(c)(3) non-profit organization.</p>
          <ul className="flex space-x-4 mt-4">
            <li>Annual Report</li>
            <li>Volunteer Opportunities</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;