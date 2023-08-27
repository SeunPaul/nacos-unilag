import { SectionWrapper } from "./StyledComponents";
import { ReactComponent as NavIcon } from "../assets/icons/navIcon.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

interface INav {
  page: "home" | "about" | "bits" | "contact";
}

function DesktopNavigation({ page }: INav) {
  const navItems = [
    { label: "Home", value: "home", url: "/" },
    { label: "About", value: "about", url: "/about" },
    { label: "Bits & Bytes", value: "bits", url: "/bits-and-bytes" },
    { label: "Contact us", value: "contact", url: "/contact" },
  ];

  return (
    <div>
      <SectionWrapper className="mb-6 flex items-center justify-between py-6 md:mb-16">
        <>
          <Logo className="w-12 cursor-pointer sm:w-14 md:w-16" />
          <div className="hidden md:block">
            <ul className="flex list-none font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.value}
                  className={`mx-4 cursor-pointer ${
                    page === item.value ? "text-green" : ""
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <NavIcon className="cursor-pointer md:hidden" />
          <div className="hidden md:block" />
        </>
      </SectionWrapper>
    </div>
  );
}

export default DesktopNavigation;
