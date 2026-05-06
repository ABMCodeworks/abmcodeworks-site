import { Box } from "@chakra-ui/react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import Clients from "../components/home/Clients";
import Contact from "../components/home/Contact";

import useContactForm from "../hooks/useContactForm";

function Home() {
  const contactForm = useContactForm();

  return (
    <Box bg="abm.paper">
      <Navbar />

      <Box as="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Clients />
        <Contact {...contactForm} />
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
