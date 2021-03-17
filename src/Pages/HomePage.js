import WelcomePage from "./WelcomePage";
import About from "./About";
import Skill from "./Skill";
import EducationAndExpirence from "./EduAndExp";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        minWidth: "100vh",
      }}
    >
      <WelcomePage />
      <About />
      <Skill />
      <EducationAndExpirence />
      <Footer />
    </div>
  );
}
