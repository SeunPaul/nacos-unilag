/* eslint-disable react-refresh/only-export-components */
import nacostn from "../../assets/images/news/Orientation cover.png";

const Content = () => {
  return (
    <div>
      <p>
        Are you an incoming computer science student? Well, prepare to be
        formally welcomed!
      </p>
      <br />
      <p>
        Freshers can look forward to an orientation that will introduce them to
        their department. The welcome orientation will include a tour of the
        department, discussions with current students in the department and
        meetings with the Head of Department and Dean of the faculty. It is
        usually scheduled between the first to third week of official
        resumption.
      </p>
      <br />
      <p>
        This will be the time to bring all your questions and get the clarifying
        answers you need to give you a good start in your 5-year program at the
        department. Also, you can expect inside tips and personal perspectives
        from older students. Make sure you attend!
      </p>
    </div>
  );
};

export default {
  id: "n1",
  thumbnail: nacostn,
  date: "1st semester",
  title: "Freshmen Orientation",
  preview:
    "Are you an incoming computer science student? Well, prepare to be formally welcomed Freshers can look forward to an orientation that will introduce them to their department.",
  body: <Content />,
};
