import { Link } from "react-router-dom";
import { navItems } from "./contansts";

interface INav {
  page: "home" | "about" | "bits" | "contact";
  show: boolean;
}

function MobileNavigation({ page, show }: INav) {
  return (
    <div
      className={`fixed left-0 ${
        show ? "top-0 opacity-100" : "-top-96 opacity-0"
      } z-10 h-96 w-full bg-lgreen pt-20 transition-all duration-200 md:hidden`}
    >
      <ul className="flex list-none flex-col items-center font-semibold">
        {navItems.map((item) => (
          <Link
            to={item.url}
            key={item.value}
            className={`mx-4 my-5 cursor-pointer ${
              page === item.value ? "text-green" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavigation;
