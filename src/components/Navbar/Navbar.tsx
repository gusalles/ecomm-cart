import { FaCartShopping } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { NavBarLink } from "./NavbarLink";

export function Navbar() {
  return (
    <nav className="py-6 px-8 mb-8 bg-slate-600 flex items-baseline">
      <p className="text-2xl font-semibold mr-4">E-commerce</p>
      <NavBarLink Icon={HiHome} text="Home" url="/" />
      <NavBarLink Icon={FaCartShopping} text="Cart" url="/cart" />
    </nav>
  );
}
