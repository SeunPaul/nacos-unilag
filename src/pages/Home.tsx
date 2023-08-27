import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import hero from "../assets/illustrations/hero.png";
import { ReactComponent as Network } from "../assets/icons/network.svg";
import { ReactComponent as Security } from "../assets/icons/security.svg";
import { ReactComponent as Productivity } from "../assets/icons/productivity.svg";
import { ReactComponent as Code } from "../assets/icons/code.svg";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="vs:pb-40 bg-lgreen pb-20 xs:pb-24 sm:pb-52 lg:pb-72">
        <DesktopNavigation page="home" />
        <SectionWrapper className="relative">
          <>
            <h1 className="mb-2 text-center text-3xl font-extrabold xs:text-4xl md:mb-4 md:text-7xl lg:text-8xl">
              NACOS UNILAG
            </h1>
            <p className="text-center text-lg font-semibold xs:text-2xl lg:text-3xl">
              Building the Future of Computing
            </p>
            <img
              src={hero}
              alt=""
              className="vs:-bottom-64 absolute -bottom-36 left-1/2 mx-auto w-[95%] -translate-x-1/2 xs:-bottom-44 sm:-bottom-80 md:-bottom-96 lg:-bottom-[30rem] lg:w-4/5"
            />
          </>
        </SectionWrapper>
      </div>

      {/* What we do */}
      <div className="pb-80 pt-32 md:pt-80">
        <SectionWrapper className="flex justify-between">
          <>
            <div className="md:w-3/5">
              <h3 className="mb-4 text-2xl font-bold md:mb-10 md:text-5xl">
                What we do here
              </h3>
              <p className="mb-8 text-justify">
                Hey there! Welcome to the Department of Computer Science at the
                University of Lagos! We're all about embracing innovation and
                staying on the cutting edge of technology. Our faculty and
                students are passionate about exploring AI, cybersecurity,
                software engineering, and more. With hands-on projects and
                real-world experiences, we're here to empower you on your
                journey to becoming a tech leader. We love to think outside the
                box and work closely with industry partners to make a meaningful
                impact.
              </p>
              <p className="text-justify">
                Our inclusive community celebrates diversity and provides a warm
                and supportive environment for everyone. Join us for enriching
                seminars, workshops, and tech talks to stay up-to-date with the
                latest tech trends. We're committed to helping you grow, from
                providing career support to offering exciting extracurricular
                activities. Let's embark on this exciting adventure together and
                shape the future of technology!
              </p>
            </div>
            <div className="hidden w-2/5 items-center justify-end md:flex">
              <div className=" relative h-[270px] w-80 rounded-full ">
                <div className="absolute left-32 top-0 flex h-24 w-24 items-center justify-center rounded-full bg-green">
                  <Network className="h-[35px] w-[35px]" />
                </div>
                <div className="absolute right-0 top-28 flex h-24 w-24 items-center justify-center rounded-full bg-green">
                  <Security className="h-[35px] w-[35px]" />
                </div>
                <div className="absolute bottom-0 left-24 flex h-24 w-24 items-center justify-center rounded-full bg-green">
                  <Productivity className="h-[35px] w-[35px]" />
                </div>
                <div className="absolute left-0 top-16 flex h-24 w-24 items-center justify-center rounded-full bg-green">
                  <Code className="h-[35px] w-[35px]" />
                </div>
              </div>
            </div>
          </>
        </SectionWrapper>
      </div>
    </div>
  );
}

export default Home;
