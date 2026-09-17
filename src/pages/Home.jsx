import Separator from "../components/common/Separator";
import Features from "../components/Features";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import RecipeShowcase from "../components/RecipeShowcase";
import CallToAction from "../components/CallToAction";

import SeparatorImg from "../assets/Separator.png";

function Home() {
  return (
    <>
      <Header />
      <Separator img={SeparatorImg} />
      <Features />
      <Timeline />
      <RecipeShowcase />
      <CallToAction />
    </>
  );
}

export default Home;
