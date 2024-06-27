import Link from "next/link";

function Footer() {
    return (
      <footer className="mt-16 bg-blue-100 py-8">
        <div className="text-center py-8 bg-blue-100">
          <h2 className="text-3xl font-bold">Uncommon stories start with people like you.</h2>
          <Link href="/donate">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">Donate</button>
          </Link>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold">Subscribe to our mailing list</h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="mt-4 p-2 border rounded w-full sm:w-auto"
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
  