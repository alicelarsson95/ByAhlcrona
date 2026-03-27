import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <div style={{ height: "1500px" }}></div>
      {/* <Portfolio />
      <Shop />
      <About />
      <Contact />
      <Footer />  */}
    </>
  );
};

export default Home