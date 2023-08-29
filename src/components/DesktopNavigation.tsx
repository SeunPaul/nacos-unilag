import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { SectionWrapper } from "./StyledComponents";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { navItems } from "./contansts";

interface INav {
  page: "home" | "about" | "bits" | "contact";
}

function DesktopNavigation({ page }: INav) {
  return (
    <div>
      <ScrollToTop />
      <SectionWrapper className="mb-6 flex items-center justify-between py-6 md:mb-16">
        <>
          <Logo className="w-12 cursor-pointer sm:w-14 md:w-16" />
          <div className="hidden md:block">
            <ul className="flex list-none font-semibold">
              {navItems.map((item) => (
                <Link
                  to={item.url}
                  key={item.value}
                  className={`mx-4 cursor-pointer ${
                    page === item.value ? "text-green" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <IoIosMenu className="h-8 w-8 cursor-pointer fill-green md:hidden" />
          <div className="hidden md:block" />
        </>
      </SectionWrapper>
    </div>
  );
}

export default DesktopNavigation;
