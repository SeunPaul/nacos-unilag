import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import { newsAndEvents } from "../blog";

function Post() {
  return (
    <div>
      {/* Header */}
      <div>
        <DesktopNavigation page="bits" />
        <h3>Banner</h3>
      </div>

      {/* News & Events */}
      <div className="pb-24 pt-12 md:pt-24">
        <SectionWrapper>
          <>
            <h3 className="mb-4 text-center text-2xl font-bold md:mb-12 md:text-5xl md:leading-tight">
              News & Events
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:gap-6 lg:grid-cols-3 xl:gap-8">
              {newsAndEvents
                .slice(0, 3)
                .map(({ id, thumbnail, date, title, preview }) => (
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

export default Post;
