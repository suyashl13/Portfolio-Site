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
      {/* <Alert status='warning' id='warning'>
        <AlertIcon />
        <AlertTitle mr={2}>Site under construction.</AlertTitle>
        <CloseButton position='absolute' right='8px' top='8px' onClick={() => {
          document.getElementById('warning').remove();
        }} />
      </Alert> */}
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
