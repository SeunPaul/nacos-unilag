import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import events from "../blog/events";
import news from "../blog/news";
import bits from "../assets/illustrations/bits.png";

function BitsAndBytes() {
  return (
    <div>
      {/* Header */}
      <div className="pb-12 md:pb-24">
        <DesktopNavigation page="bits" />
        <SectionWrapper className="mt-2">
          <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-lgreen md:h-64">
            <div className="bg-pgreen absolute -right-4 -top-6 z-10 h-20 w-20 rounded-full md:-top-16 md:h-44 md:w-44">
              <div className="h-16 w-16 rounded-full bg-green md:h-40 md:w-40" />
            </div>
            <div className="absolute -bottom-6 -left-4 z-10 h-20 w-20 rounded-full bg-green md:-bottom-16 md:h-44 md:w-44">
              <div className="bg-pgreen h-16 w-16 rounded-full md:h-40 md:w-40" />
            </div>
            <h1 className="text-3xl font-extrabold md:text-6xl">
              Bits & Bytes
            </h1>
            <img src={bits} alt="" className="absolute h-full w-4/5" />
          </div>
        </SectionWrapper>
      </div>

      {/* Upcoming Events */}
      <div className="pb-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-2xl font-bold md:mb-8 md:text-[40px] md:leading-tight">
              Upcoming Events
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:gap-6 lg:grid-cols-3 xl:gap-8">
              {events.map(({ id, thumbnail, date, title, preview }) => (
                <NewsCard
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

      {/* News */}
      <div className="pb-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-2xl font-bold md:mb-8 md:text-[40px] md:leading-tight">
              News
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:gap-6 lg:grid-cols-3 xl:gap-8">
              {news.map(({ id, thumbnail, date, title, preview }) => (
                <NewsCard
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
      <Footer page="bits" />
    </div>
  );
}

export default BitsAndBytes;
