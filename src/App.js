import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';
import './App.css';
import Certifications from './components/Certifications';
import Landing from "./components/Landing"
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Alert status='warning'>
        <AlertIcon />
        <AlertTitle mr={2}>Site under construction.</AlertTitle>
        <CloseButton position='absolute' right='8px' top='8px' />
      </Alert>
      <Navbar />
      <Landing />
      <Certifications />
      <br />
    </>
  );
}

export default App;
