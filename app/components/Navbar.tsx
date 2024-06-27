import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <Link href="/" className="font-bold text-xl sm:text-2xl md:text-3xl">
        Keith<span className="text-primary">Blog</span>
      </Link>
      <Link href="/donate" className="text-blue-600 hover:text-blue-800">
        Donate
      </Link>
    </nav>
  );
}

export default NavBar;
