import { Alert, AlertIcon, AlertTitle, Center, CloseButton } from '@chakra-ui/react';
import './App.css';
import SkillBadge from './components/general/SkillBadge';
import Landing from "./components/Landing"
import Navbar from './components/Navbar';
import Skills from './components/Skills';

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
      <Center>
        <SkillBadge />
      </Center>
      <Skills />
      <br />
    </>
  );
}

export default App;
