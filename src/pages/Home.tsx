import DesktopNavigation from "../components/DesktopNavigation";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import { newsAndEvents } from "../blog";
import { SectionWrapper } from "../components/StyledComponents";
import { ReactComponent as Network } from "../assets/icons/network.svg";
import { ReactComponent as Security } from "../assets/icons/security.svg";
import { ReactComponent as Productivity } from "../assets/icons/productivity.svg";
import { ReactComponent as Code } from "../assets/icons/code.svg";
import { ReactComponent as Union } from "../assets/illustrations/union.svg";
import hero from "../assets/illustrations/hero.png";
import learning from "../assets/images/learning.jpg";
import people from "../assets/icons/people.svg";
import verified from "../assets/icons/verified.svg";
import book from "../assets/icons/book.svg";
import "aos/dist/aos.css";

function Home() {
  const numbers = [
    {
      icon: people,
      text: "500+",
      description: "Great Students",
      aosValue: "fade-right",
    },
    {
      icon: verified,
      text: "40+",
      description: "Expert Mentors",
      aosValue: "fade-up",
    },
    {
      icon: book,
      text: "100+",
      description: "Innovative Courses",
      aosValue: "fade-left",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-lgreen pb-20 xs:pb-24 vs:pb-40 sm:pb-52 lg:pb-72">
        <DesktopNavigation page="home" />
        <SectionWrapper className="relative mt-6 md:mt-16">
          <>
            <h1 className="mb-2 text-center text-3xl font-extrabold xs:text-4xl md:mb-4 md:text-7xl lg:text-8xl">
              NACOS UNILAG
            </h1>
            <p className="px-4 text-center text-lg font-semibold xs:text-2xl lg:text-3xl">
              Building the Future of Computing
            </p>
            <img
              src={hero}
              alt=""
              className="absolute -bottom-36 left-1/2 mx-auto w-[95%] -translate-x-1/2 xs:-bottom-44 vs:-bottom-64 sm:-bottom-80 md:-bottom-96 lg:-bottom-[30rem] lg:w-4/5"
            />
          </>
        </SectionWrapper>
      </div>

      {/* What we do */}
      <div className="pb-48 pt-32 sm:pb-64 md:pt-80">
        <SectionWrapper className="relative">
          <>
            <div className="flex justify-between">
              <div className="md:w-3/5">
                <h3
                  data-aos="fade-up"
                  className="mb-4 text-2xl font-bold md:mb-10 md:text-5xl"
                >
                  What we do here
                </h3>
                <div className="leading-7">
                  <p data-aos="fade-up" className="mb-8 text-justify">
                    Hey there! Welcome to the Department of Computer Science at
                    the University of Lagos! We're all about embracing
                    innovation and staying on the cutting edge of technology.
                    Our faculty and students are passionate about exploring AI,
                    cybersecurity, software engineering, and more. With hands-on
                    projects and real-world experiences, we're here to empower
                    you on your journey to becoming a tech leader. We love to
                    think outside the box and work closely with industry
                    partners to make a meaningful impact.
                  </p>
                  <p data-aos="fade-up" className="text-justify">
                    Our inclusive community celebrates diversity and provides a
                    warm and supportive environment for everyone. Join us for
                    enriching seminars, workshops, and tech talks to stay
                    up-to-date with the latest tech trends. We're committed to
                    helping you grow, from providing career support to offering
                    exciting extracurricular activities. Let's embark on this
                    exciting adventure together and shape the future of
                    technology!
                  </p>
                </div>
              </div>
              <div className="hidden w-1/3 items-center justify-end pr-2 md:flex lg:w-2/5">
                <div className=" relative h-52 w-52 animate-spin-slow lg:h-72 lg:w-72">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green lg:h-24 lg:w-24">
                    <Network className="h-6 w-6 lg:h-[35px] lg:w-[35px]" />
                  </div>
                  <div className="absolute right-0 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-green lg:h-24 lg:w-24">
                    <Security className="h-6 w-6 lg:h-[35px] lg:w-[35px]" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 flex  h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-green lg:h-24 lg:w-24">
                    <Productivity className="h-6 w-6 lg:h-[35px] lg:w-[35px]" />
                  </div>
                  <div className="absolute left-0 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-green lg:h-24 lg:w-24">
                    <Code className="h-6 w-6 lg:h-[35px] lg:w-[35px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[700px] left-1/2 flex w-full -translate-x-1/2 flex-col flex-wrap items-center justify-center gap-5 overflow-hidden px-5 sm:-bottom-[550px] sm:flex-row md:-bottom-[350px] md:w-auto md:flex-nowrap lg:-bottom-96">
              {numbers.map((item) => (
                <div
                  data-aos={item.aosValue}
                  key={item.text}
                  className="flex h-48 w-56 flex-col items-center justify-center rounded-2xl bg-lgreen lg:h-60 lg:w-72"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="mb-8 h-10 w-10 lg:h-14 lg:w-14"
                  />
                  <h2 className="text-3xl font-bold text-[#222222]">
                    {item.text}
                  </h2>
                  <p className="font-semibold text-[#222222]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* Dynamic learning environment */}
      <div className="overflow-hidden bg-green pb-32 pt-[600px] sm:pb-56 sm:pt-96 md:pt-64">
        <SectionWrapper className="flex flex-wrap items-center justify-between gap-10">
          <>
            <div data-aos="fade-right">
              <div className="h-72 -rotate-3 rounded-3xl bg-[#FFFFFF33] p-4 lg:h-96 lg:w-96 xl:h-[500px] xl:w-[490px]">
                <img
                  src={learning}
                  alt=""
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </div>
            <div className="relative w-full text-white md:w-1/2 xl:w-[590px]">
              <h3
                data-aos="fade-up"
                className="mb-4 text-2xl font-bold md:mb-10 md:leading-tight lg:text-3xl xl:text-5xl"
              >
                Join our Dynamic learning environment
              </h3>
              <div className="leading-7">
                <p data-aos="fade-up" className="mb-6 text-justify">
                  Here at Computer Science, we prioritise change, activity and
                  progress. Our core focus is intentionally designed to meet the
                  needs of all students while challenging them to enhance
                  existing skills, interests and understandings, as well as
                  meaningfully building new ones.
                </p>
                <p data-aos="fade-up" className="text-justify">
                  Not only do our students learn in a supportive environment
                  well equipped with use of modern educational facilities that
                  nurtures self-sufficiency and responsibility, but they also
                  learn in ways that challenge them and help cultivate a greater
                  sense of creativity and achieve their full potential.
                </p>
              </div>
              <Union className="absolute -bottom-32 -right-20 h-64 sm:-bottom-72 sm:h-auto" />
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* News & Events */}
      <div className="pb-24 pt-12 md:pt-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-center text-2xl font-bold md:mb-12 md:text-5xl">
              News & Events
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:gap-6 lg:grid-cols-3 xl:gap-8">
              {newsAndEvents
                .slice(0, 3)
                .map(({ id, thumbnail, date, title, preview }) => (
                  <NewsCard
                    id={id}
                    key={id}
                    thumbnail={thumbnail}
                    date={date}
                    title={title}
                    preview={preview}
                  />
                ))}
            </div>
          </>
        </SectionWrapper>
      </div>

      {/* Footer */}
      <Footer page="home" />
    </div>
  );
}

export default Home;
