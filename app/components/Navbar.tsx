import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <Link href="/" className="font-bold text-3xl">
        Uncommon
      </Link>
      <div className="flex space-x-4">
        <Link href="/our-story" className="text-black hover:text-gray-800">
          Our Story
        </Link>
        <Link href="/our-programs" className="text-black hover:text-gray-800">
          Our Programs
        </Link>
        <Link href="/get-involved" className="text-black hover:text-gray-800">
          Get Involved
        </Link>
      </div>
      <Link href="/donate" className="bg-blue-600 text-white px-4 py-2 rounded-full">
        Donate
      </Link>
    </nav>
  );
}

export default NavBar;
