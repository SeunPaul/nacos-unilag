import { SectionWrapper } from "./StyledComponents";
import logo from "../assets/illustrations/logo.png";
import navIcon from "../assets/icons/navIcon.svg";

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
          <img
            src={logo}
            alt="students in front of the department"
            className="w-12 cursor-pointer sm:w-14 md:w-16"
          />
          <div className="hidden md:block">
            <ul className="flex list-none font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.value}
                  className={`mx-4 ${page === item.value ? "text-green" : ""}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <img src={navIcon} alt="" className="w-6 cursor-pointer md:hidden" />
          <div className="hidden md:block" />
        </>
      </SectionWrapper>
    </div>
  );
}

export default DesktopNavigation;
