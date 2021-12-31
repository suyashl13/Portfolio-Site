import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';
import './App.css';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Landing from "./components/Landing"
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Certifications />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
