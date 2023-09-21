/* eslint-disable react-refresh/only-export-components */
import nacostn from "../../assets/images/news/Orientation cover.png";

const Content = () => {
  return (
    <div>
      <p>
        The Nigeria Association of Computing Students (NACOS) National Summit, a
        highly anticipated event which was originally scheduled to take place on
        28th - 31st August 2023 at our beloved school University of Lagos,
        Nigeria, has been postponed by the National Executive Council of The
        Nigeria Association of Computing Students (NACOS). Due to unforeseen
        circumstances, it became necessary to reschedule the event for a later
        date.
      </p>
      <br />
      <p>
        NACOS is committed to delivering a world-class summit that fosters
        innovation, collaboration, and knowledge sharing among computing
        students and professionals. Unfortunately, a series of unavoidable
        events compelled them to make this difficult decision. They assure all
        stakeholders, participants, and partners that the NACOS National
        Innovation Summit will indeed take place at a new date and location,
        which will be announced shortly. The team is working diligently to
        finalize all arrangements to ensure a seamless and enriching experience
        for everyone involved.
      </p>
      <br />
      <p>
        The postponement came as a disappointment, but they view it as an
        opportunity to enhance the overall quality of the summit and expand its
        impact on the computing community. By taking this brief respite, they
        aim to make the event even more innovative, informative, and
        transformative for all attendees.
      </p>
      <br />
      <p>
        They sincerely apologize for any inconvenience this may cause to
        registered participants, speakers, sponsors, and exhibitors. Your
        enthusiasm and support have been invaluable, they promise to deliver an
        exceptional event that exceeds everyone's expectations. Further updates
        and announcements regarding the new date and location of the NACOS
        National Innovation Summit and all updates will be communicated through
        their official social media channels. They thank everyone for their
        understanding and look forward to your continued support in making the
        NACOS National Innovation Summit an unparalleled success.
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
