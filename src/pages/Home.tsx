import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import hero from "../assets/illustrations/hero.png";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-lgreen pb-10 lg:pb-64">
        <DesktopNavigation page="home" />
        <SectionWrapper className="relative">
          <>
            <h1 className="xs:text-4xl mb-2 text-center text-3xl font-extrabold md:mb-4 md:text-7xl lg:text-8xl">
              NACOS UNILAG
            </h1>
            <p className="xs:text-2xl text-center text-lg font-semibold lg:text-3xl">
              Building the Future of Computing
            </p>
            <img
              src={hero}
              alt=""
              className="absolute left-1/2 mx-auto w-[95%] -translate-x-1/2 md:-bottom-96 lg:-bottom-[30rem] lg:w-4/5"
            />
          </>
        </SectionWrapper>
      </div>

      {/* What we do */}
      <div className="pt-96">
        <SectionWrapper className="flex justify-between">
          <>
            <div>
              <h3>What we do here</h3>
            </div>
            <div>
              <p>robo</p>
              <p>robo</p>
              <p>robo</p>
              <p>robo</p>
            </div>
          </>
        </SectionWrapper>
      </div>
    </div>
  );
}

export default Home;
