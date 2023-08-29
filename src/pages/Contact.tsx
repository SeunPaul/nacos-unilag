import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      {/* Header */}
      <div>
        <DesktopNavigation page="contact" />
        <SectionWrapper>
          <h1>
            For sponsorships, collaborations, or even queries, feel free to drop
            a message
          </h1>
        </SectionWrapper>
      </div>

      {/* Footer */}
      <Footer page="contact" />
    </div>
  );
}

export default Contact;
