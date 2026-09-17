import Separator from "../components/common/Separator";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import Timeline from "../components/Home/Timeline";
import RecipeShowcase from "../components/Home/RecipeShowcase";
import CallToAction from "../components/Home/CallToAction";

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
