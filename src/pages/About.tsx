import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      {/* Header */}
      <div>
        <DesktopNavigation page="about" />
        <SectionWrapper>
          <h1>Charting the path for Innovation</h1>
        </SectionWrapper>
      </div>

      {/* Footer */}
      <Footer page="about" />
    </div>
  );
}

export default About;
