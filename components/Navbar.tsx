import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <Image src="/organic-store-logo5.svg" alt="Logo" width={90} height={90} />
          <span className="text-xl font-bold">Organza</span>
        </Link>

        
        <ul className="hidden md:flex space-x-120">
          <div className="flex space-x-10">
            <li>
              <Link href="/products" className="hover:text-blue-600">
                All Products
              </Link>
            </li>
            <li>
            <Link href="/category/groceries" className="hover:text-blue-600">
                 Groceries
            </Link>

            </li>
            <li>
            <Link href="/category/fashion" className="hover:text-blue-600">
                Juice
            </Link>
          </li>
          </div>

        
          <li className="ml-20">
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>

          <li className="ml-10">
            <Link href="/category/home" className="hover:text-blue-600">
              About
            </Link>
          </li>
        </ul>

        {/* Cart & User */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="hover:text-blue-600">
            🛒 Cart
          </Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
