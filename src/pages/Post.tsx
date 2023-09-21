import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import news from "../blog/news";
import events from "../blog/events";
import { newsAndEvents } from "../blog";

interface IPost {
  id: string;
  thumbnail: string;
  date: string;
  time?: string;
  location?: string;
  title: string;
  preview: string;
  body: JSX.Element;
}

function Post() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");

  // find the post
  let post: IPost | undefined = undefined;
  if (q && q[0] === "e") {
    post = events.find((event) => event.id === q);
  }

  if (q && q[0] === "n") {
    post = news.find((n) => n.id === q);
  }

  useEffect(() => {
    if (!q || !post) {
      navigate("/bits-and-bytes");
    }

    // eslint-disable-next-line
  }, []);

  return q && post ? (
    <div>
      {/* Header */}
      <div>
        <DesktopNavigation page="bits" />
        <SectionWrapper>
          <div className="relative h-72 w-full overflow-hidden rounded-[16px]">
            <img
              src={post.thumbnail}
              alt=""
              className="absolute h-full w-full object-cover"
            />
            <div>
              <h1>{post.title}</h1>
              <div>
                {post.date && <p>{post.date}</p>}
                {post.time && <p>{post.time}</p>}
                {post.location && <p>{post.location}</p>}
              </div>
            </div>
            <div className="bg-bgradient absolute inset-0" />
          </div>
        </SectionWrapper>
      </div>

      <div className="pt-16">
        <SectionWrapper>{post.body}</SectionWrapper>
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
      <Footer page="bits" />
    </div>
  ) : null;
}

export default Post;
