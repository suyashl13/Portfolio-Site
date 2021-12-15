import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, Link } from '@chakra-ui/react';
import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Alert status='warning'>
        <AlertIcon />
        <AlertTitle mr={2}>Site under construction.</AlertTitle>
        <AlertDescription>Site is under development.<Link href="mailto:admin@hiresuyash.com"> Click here</Link> to contact us.</AlertDescription>
        <CloseButton position='absolute' right='8px' top='8px' />
      </Alert>
      <Navbar />
      <Landing />
    </>
  );
}

export default App;
