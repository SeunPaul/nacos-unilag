import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

interface INewsCard {
  id: string;
  thumbnail: string;
  date: string;
  title: string;
  preview: string;
}

function NewsCard({ id, thumbnail, date, title, preview }: INewsCard) {
  return (
    <div className="mb-6">
      <img
        src={thumbnail}
        alt=""
        className="h-48 w-full rounded-2xl object-cover lg:h-56"
      />
      <div className="my-4 flex items-center gap-2 text-sm text-green">
        <FaCalendarAlt className="fill-green" />
        {date}
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight">{`${title.substring(
        0,
        200
      )}${title.length > 200 ? "..." : ""}`}</h3>
      <p className="text-[15px] leading-6">{`${preview.substring(0, 300)}${
        preview.length > 300 ? "..." : ""
      }`}</p>
      <Link
        to={`/post?q=${id}`}
        className="mt-4 flex items-center gap-2 font-bold text-green"
      >
        Learn More <HiArrowRight className="fill-green" />
      </Link>
    </div>
  );
}

export default NewsCard;
