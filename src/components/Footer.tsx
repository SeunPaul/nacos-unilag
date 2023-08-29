import { SectionWrapper } from "./StyledComponents";
import logo from "../assets/illustrations/logo.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { navItems } from "./contansts";

interface IFooter {
  page: "home" | "about" | "bits" | "contact";
}

function Footer({ page }: IFooter) {
  return (
    <div className="pb-32">
      <SectionWrapper>
        <div className="rounded-3xl bg-black px-4 py-16 text-white md:px-12">
          <img src={logo} alt="" className="mx-auto w-24" />
          <h2 className="mb-4 mt-10 text-center text-2xl font-bold md:text-6xl">
            Collaborate with us
          </h2>
          <p className="mx-auto max-w-lg text-center text-sm leading-7 sm:text-base">
            Mauris viverra platea aenean nec id nisl imperdiet vulputate
            imperdiet. Volutpat ut blandit scelerisque laoreet habitasse libero{" "}
          </p>
          <div className="my-10 flex justify-center">
            <button
              type="button"
              className="rounded-2xl bg-white px-10 py-4 text-sm font-bold text-green"
            >
              Send a message
            </button>
          </div>
          <div className="border-t border-[#ffffff30] pt-0 md:pt-24">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex w-full items-center gap-2 border-b border-[#ffffff30] py-4 md:w-auto md:border-none">
                <BiTargetLock />
                <p className="w-52 text-xs">
                  Department Of Computer Sciences UNILAG, Akoka, Lagos
                </p>
              </div>
              <ul className="flex list-none flex-col gap-4 text-sm font-semibold md:flex-row md:gap-0">
                {navItems.map((item) => (
                  <li
                    key={item.value}
                    className={`mx-4 cursor-pointer ${
                      page === item.value ? "text-[#ffffffaa]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <div className="cursor-pointer rounded-full border border-white p-2">
                  <AiOutlineTwitter className="fill-white text-xl" />
                </div>
                <div className="cursor-pointer rounded-full border border-white p-2">
                  <AiOutlineInstagram className="fill-white text-xl" />
                </div>
              </div>
            </div>
            <p className="mt-20 text-center text-sm text-[#ffffff62] ">
              © 2023 NACOS Unilag
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Footer;
