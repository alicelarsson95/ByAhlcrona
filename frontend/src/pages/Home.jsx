import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <Portfolio />
      {/* <Shop />
      <About />
      <Contact />
      <Footer />  */}
    </>
  );
};

export default Home