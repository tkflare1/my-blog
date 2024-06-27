import Link from "next/link";

function Header() {
  return (
    <header className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <Link href="/" className="font-bold text-xl sm:text-2xl md:text-3xl">
        Uncommon<span className="text-primary">Blog</span>
      </Link>
      <nav className="space-x-4">
        <Link href="/our-story" className="text-blue-600 hover:text-blue-800">
          Our Story
        </Link>
        <Link href="/our-programs" className="text-blue-600 hover:text-blue-800">
          Our Programs
        </Link>
        <Link href="/get-involved" className="text-blue-600 hover:text-blue-800">
          Get Involved
        </Link>
        <Link href="/donate" className="text-blue-600 hover:text-blue-800">
          Donate
        </Link>
      </nav>
    </header>
  );
}

export default Header;
