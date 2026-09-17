import Separator from "../components/common/Separator";
import Features from "../components/Features";
import Header from "../components/Header";
import Navbar from "../components/layout/Navbar";
import Timeline from "../components/Timeline";
import RecipeShowcase from "../components/RecipeShowcase";
import CallToAction from "../components/CallToAction";
import Footer from "../components/layout/Footer";

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
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
