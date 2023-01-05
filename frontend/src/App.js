
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Projects } from "./Components/Projects";
import { Resume } from "./Components/Resume";
import { Skills } from "./Components/Skills";
import Github from "./Components/Github";
import Footer from "./Components/Footer";
import './App.css';
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box id="home" className="container">
      <Navbar  />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Github />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
