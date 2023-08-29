import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import events from "../blog/events";
import news from "../blog/news";

function BitsAndBytes() {
  return (
    <div>
      {/* Header */}
      <div>
        <DesktopNavigation page="bits" />
        <h1>Bits & Bytes</h1>
      </div>

      {/* Upcoming Events */}
      <div className="pb-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-2xl font-bold md:mb-12 md:text-5xl md:leading-tight">
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
            <h3 className="mb-4 text-2xl font-bold md:mb-12 md:text-5xl md:leading-tight">
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
