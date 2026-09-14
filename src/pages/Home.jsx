import Separator from "../components/common/Separator";
import Features from "../components/Features";
import Header from "../components/Header";
import Navbar from "../components/layout/Navbar";
import Timeline from "../components/Timeline";
import RecipeShowcase from "../components/RecipeShowcase";

import SeparatorImg from "../assets/Separator.png";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Separator img={SeparatorImg} />
      <Features />
      <Timeline />
      <RecipeShowcase />
      <div className="h-200 w-full"></div>
    </>
  );
}

export default Home;
