import React from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import References from "./Components/References/References";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ServicesIProvide from "./Components/ServicesIProvide/ServicesIProvide";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <ServicesIProvide />
      <Portfolio />
      <References />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
