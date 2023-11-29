import Marquee from "react-fast-marquee";
import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import StaffCard from "../components/StaffCard";
import Footer from "../components/Footer";
import staff from "../data/staff";
import excos from "../data/excos";
import aboutPattern from "../assets/illustrations/about-pattern.png";
import resilience from "../assets/illustrations/resilience.png";
import inclusion from "../assets/illustrations/inclusion.png";
import integrity from "../assets/illustrations/integrity.png";
import growth from "../assets/illustrations/growth.png";
import fun1 from "../assets/images/fun/IMG_0409.jpg";
import fun2 from "../assets/images/fun/IMG_0427.jpg";
import fun3 from "../assets/images/fun/IMG_0437.jpg";
import fun4 from "../assets/images/fun/IMG_0461.jpg";
import fun5 from "../assets/images/fun/IMG_0487.jpg";
import fun6 from "../assets/images/fun/IMG_0509.jpg";
import fun7 from "../assets/images/fun/IMG_0555.jpg";
import fun8 from "../assets/images/fun/IMG_0588.jpg";
import fun9 from "../assets/images/fun/IMG_0594.jpg";

function About() {
  const values = [
    {
      img: resilience,
      title: "Resilience",
      aosValue: "fade-right",
      desc: "We believe in perseverance and the power of dedication in achieving professional goals, in line with our mission of excellence.",
    },
    {
      img: inclusion,
      title: "Inclusion",
      aosValue: "fade-up",
      desc: "As a team that is striving for a legacy of world-class results, we are ardent about working cordially with people of different backgrounds.",
    },
    {
      img: integrity,
      title: "Integrity",
      aosValue: "fade-up",
      desc: "It's imperative to us to maintain a culture of morality in the midst of achieving our mission. We believe that integrity is key to a long-lasting legacy.",
    },
    {
      img: growth,
      title: "Growth",
      aosValue: "fade-left",
      desc: "We are passionate about amplifying opportunities that will enrich the lives of our community supporting our members as they upskill professionally.",
    },
  ];

  const funImages = [
    { type: "l", value: fun1 },
    { type: "p", value: fun2 },
    { type: "p", value: fun3 },
    { type: "l", value: fun4 },
    { type: "p", value: fun5 },
    { type: "p", value: fun6 },
    { type: "p", value: fun7 },
    { type: "l", value: fun8 },
    { type: "l", value: fun9 },
    { type: "l", value: fun1 },
    { type: "p", value: fun2 },
    { type: "p", value: fun3 },
    { type: "l", value: fun4 },
    { type: "p", value: fun5 },
    { type: "p", value: fun6 },
    { type: "p", value: fun7 },
    { type: "l", value: fun8 },
    { type: "l", value: fun9 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-10 overflow-hidden sm:mb-20 lg:mb-0">
        <DesktopNavigation page="about" />
        <SectionWrapper className="mt-6 md:mt-20">
          <>
            <h1 className="w-full text-3xl font-extrabold xs:w-80 xs:text-4xl sm:w-[450px] sm:text-5xl md:w-[700px] md:text-7xl">
              Charting the path for Innovation
            </h1>
          </>
        </SectionWrapper>
        <img
          src={aboutPattern}
          alt=""
          className="top:0 relative mx-auto object-cover lg:-top-32"
        />
      </div>

      {/* mission */}
      <div className="mb-10 bg-lgreen py-10 sm:py-24">
        <SectionWrapper>
          <p className="text-justify text-base font-bold sm:text-start sm:text-2xl md:text-4xl md:leading-snug">
            Our mission is to cultivate a community that strives for excellence
            in their professional careers in order to leave a legacy of members
            who can compete at global standards in their fields.
          </p>
        </SectionWrapper>
      </div>

      {/* Values */}
      <div className="pb-24 pt-12">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-2xl font-bold md:mb-8 md:text-[40px]">
              Values
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map(({ img, title, aosValue, desc }) => (
                <div
                  key={title}
                  data-aos={aosValue}
                  className="w-full rounded-xl border border-green px-3 py-8 sm:w-[270px]"
                >
                  <img src={img} alt="" className="mx-auto" />
                  <h3 className="mb-4 mt-8 text-center text-xl font-bold">
                    {title}
                  </h3>
                  <p className="text-center text-[13px] leading-5">{desc}</p>
                </div>
              ))}
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* awards */}
      <div className="mb-32 py-10 sm:py-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 max-w-xl text-2xl font-bold leading-snug md:mb-8 md:text-[40px]">
              We've won some nice awards over the years
            </h3>
          </>
        </SectionWrapper>
      </div>

      {/* fun */}
      <div className="mb-20 bg-lgreen py-10 sm:mb-32 sm:py-24">
        <SectionWrapper>
          <>
            <h3 className="mx-auto mb-4 max-w-3xl text-center text-2xl font-bold leading-snug md:mb-8 md:text-[40px]">
              Its not just all about work, work, work. We know how to have fun
              too.
            </h3>
          </>
        </SectionWrapper>
        <div className="overflow-hidden">
          <Marquee speed={100}>
            {funImages.map((img) => (
              <div
                key={img.value}
                className={`mx-2 h-[350px] shrink-0 grow-0 ${
                  img.type === "l" ? "basis-[500px]" : "basis-[300px]"
                } `}
              >
                <img
                  src={img.value}
                  alt=""
                  className="h-full w-full rounded-[8px] object-cover"
                />
              </div>
            ))}
          </Marquee>
          <Marquee className="my-5" direction="right">
            {funImages.map((img) => (
              <div
                key={img.value}
                className={`mx-2 h-[350px] shrink-0 grow-0 ${
                  img.type === "l" ? "basis-[500px]" : "basis-[300px]"
                } `}
              >
                <img
                  src={img.value}
                  alt=""
                  className="h-full w-full rounded-[8px] object-cover"
                />
              </div>
            ))}
          </Marquee>
          <Marquee speed={100}>
            {funImages.map((img) => (
              <div
                key={img.value}
                className={`mx-2 h-[350px] shrink-0 grow-0 ${
                  img.type === "l" ? "basis-[500px]" : "basis-[300px]"
                } `}
              >
                <img
                  src={img.value}
                  alt=""
                  className="h-full w-full rounded-[8px] object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Faculty & Staff */}
      <div className="mb-20">
        <SectionWrapper>
          <>
            <h3 className="mb-6 text-center text-2xl font-bold sm:text-start md:mb-10 md:text-[40px]">
              Faculty & Staff
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8">
              {staff.map(({ id, img, name, title }) => (
                <StaffCard key={id} img={img} name={name} title={title} />
              ))}
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* Executive Leadership */}
      <div className="mb-10">
        <SectionWrapper>
          <>
            <h3 className="mb-6 text-center text-2xl font-bold sm:text-start md:mb-10 md:text-[40px]">
              Executive Leadership
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8">
              {excos.map(({ id, img, name, title }) => (
                <StaffCard key={id} img={img} name={name} title={title} />
              ))}
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* Footer */}
      <Footer page="about" />
    </div>
  );
}

export default About;
