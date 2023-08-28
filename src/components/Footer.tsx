import { SectionWrapper } from "./StyledComponents";
import logo from "../assets/illustrations/logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { navItems } from "./contansts";

interface IFooter {
  page: "home" | "about" | "bits" | "contact";
}

function Footer({ page }: IFooter) {
  return (
    <div>
      <SectionWrapper className="bg-black">
        <>
          <img src={logo} alt="" className="w-20" />
          <h2>Collaborate with us</h2>
          <p>
            Mauris viverra platea aenean nec id nisl imperdiet vulputate
            imperdiet. Volutpat ut blandit scelerisque laoreet habitasse libero{" "}
          </p>
          <button type="button" className="bg-white text-green">
            Send a message
          </button>
          <div>
            <div className="flex">
              <div>
                <p>Department Of Computer Sciences UNILAG, Akoka, Lagos</p>
              </div>
              <ul className="flex list-none font-semibold">
                {navItems.map((item) => (
                  <li
                    key={item.value}
                    className={`mx-4 cursor-pointer ${
                      page === item.value ? "text-green" : "text-white"
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div>
                <div className="rounded-full border border-white">
                  <AiOutlineTwitter className="fill-white" />
                </div>
                <div className="rounded-full border border-white">
                  <AiOutlineTwitter className="fill-white" />
                </div>
              </div>
            </div>
            <p> © 2023 NACOS Unilag</p>
          </div>
        </>
      </SectionWrapper>
    </div>
  );
}

export default Footer;
