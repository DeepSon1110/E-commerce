import { Link, useLocation } from "react-router-dom";
import { navbarFields } from "../config/navbarFields";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-3 md:justify-center justify-between lg:justify-around border-2 border-gray-400 px-6 py-2 flex-wrap bg-red-500 md:bg-green-400">
      {navbarFields.map(({ name, pathname }) => (
        <Link
          key={name}
          to={pathname}
          className={`${
            location.pathname === pathname
              ? "font-bold bg-white text-black rounded"
              : "text-white"
          } px-2 py-1`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
