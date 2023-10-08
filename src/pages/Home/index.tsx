import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import Abstractions from "../../content/Abstractions.json";
import Market from "../../content/Market.json";
import DataDashboard from "../../content/DataDashboard.json";
import DeveloperConsole from "../../content/DeveloperConsole.json";
import Team from "../../components/Team";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="corego.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="blocks.png"
        id="about"
      />
      <ContentBlock
        type="right"
        title={Abstractions.title}
        content={Abstractions.text}
        section={Abstractions.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={Market.title}
        content={Market.text}
        section={Market.section}
        icon="product-launch.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={DataDashboard.title}
        content={DataDashboard.text}
        section={DataDashboard.section}
        icon="developer.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={DeveloperConsole.title}
        content={DeveloperConsole.text}
        section={DeveloperConsole.section}
        icon="graphs.svg"
        id="about"
      />
      <div id="team">
        <Team />
      </div>
      <ContentBlock
        type="left"
        title={ContactContent.title}
        content={ContactContent.text}
        section={ContactContent.section}
        icon="waving.svg"
        id="contact"
      />
    </Container>
  );
};

export default Home;
