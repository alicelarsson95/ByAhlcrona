import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio";
import Shop from "../components/Shop/Shop";
import About from "./About";
import Contact from "./ContactPage";

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <Portfolio />
       <Shop />
      <About />
      <Contact />
    </>
  );
};

export default Home