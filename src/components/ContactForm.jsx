import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function ContactForm() {
  return (
    <Container maxW={{ base: "container.sm", md: "container.sm", lg: 'container.md' }} mt="3.4rem" mb="3.2rem">
      <Center display='flex' flexDir='column' mb="2.7rem">
        <Text fontSize="3xl" fontWeight="bolder">
          Contact Us
        </Text>
        <Text fontWeight='light' color='teal' textAlign='center'>
          We'll help you out to build amazing piece of software.
        </Text>
      </Center>
      <FormControl>
        <SimpleGrid columns={2} spacing={4} mb="8px">
          <Box>
            <FormLabel htmlFor="fName">First Name</FormLabel>
            <Input type="text" placeholder="John" variant="filled" />
          </Box>
          <Box>
            <FormLabel htmlFor="lName">Last Name</FormLabel>
            <Input type="text" placeholder="Doe" variant="filled" />
          </Box>
        </SimpleGrid>
        <Box mb="8px">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            placeholder="johndoe@examplemail.com"
            variant="filled"
          />
        </Box>
        <Box mb="8px">
          <FormLabel htmlFor="fName">Company / Organisation</FormLabel>
          <Input type="text" placeholder="XYZ Corp." variant="filled" />
        </Box>
        <Box mb="30px">
          <FormLabel htmlFor="fName">Describe your project</FormLabel>
          <Textarea
            noOfLines={4}
            type="text"
            placeholder="I need an ERP system for my business."
            variant="filled"
          />
        </Box>
        <Button backgroundColor="teal" w="100%" color="white">
          Submit
        </Button>
      </FormControl>
    </Container>
  );
}
