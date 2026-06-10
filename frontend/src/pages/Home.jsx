import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"
import Portfolio from "../components/Portfolio/Portfolio";
import Shop from "../components/Shop/Shop";
import About from "./About";
import Contact from "./ContactPage";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", "/");
        }
      }, 100);
    }
  }, []);

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