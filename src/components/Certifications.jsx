import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCode, FaJava, FaNode, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiAndroid, SiDart } from "react-icons/si";

export default function Certifications() {
  const certificates = [
    {
      title: "Node.js",
      icon: <FaNode fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "React.js",
      icon: <FaReact fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "Django",
      icon: <DiDjango fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "Flutter",
      icon: <RiFlutterFill fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "Android",
      icon: <SiAndroid fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "Java",
      icon: <FaJava fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "Dart",
      icon: <SiDart fontSize="4rem" color="#718096" />,
      link: "",
    },
    {
      title: "React & django Integration",
      icon: <FaCode fontSize="4rem" color="#718096" />,
      link: "",
    },
  ];

  return (
    <Box>
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
        marginTop={{ lg: "4rem", base: "2rem" }}
      >
        <br />
        <hr style={{ marginBottom: "12px" }} />
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={{ sm: 5, md: 1, lg: 1, base: 5 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="8xl" color="teal">
                8
              </Text>
              <Text color="teal"> Certifications</Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 5, sm: 5, md: 4, lg: 4 }}
            display="flex"
            justifyItems="center"
          >
            <Center>
              <Text
                textAlign={{
                  sm: "center",
                  md: "left",
                  lg: "left",
                  base: "center",
                }}
                fontSize={{ base: "md", md: "lg", lg: "lg", sm: "md" }}
                fontWeight={{
                  base: "bold",
                  sm: "bolder",
                  md: "bolder",
                  lg: "bolder",
                }}
                marginLeft={{ lg: "16px" }}
              >
                I am a student and freelancer having 2 years of experience in
                technologies like React.js, Node.js, Django, Native Android
                Development and Flutter. Here are some certifications of mine.
              </Text>
            </Center>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 1, lg: 1 }} />
          <GridItem
            colSpan={{ base: 5, md: 4, lg: 4 }}
            display="flex"
            justifyItems="center"
          >
            <SimpleGrid
              position="relative"
              w="100%"
              columns={{ base: 2, sm: 3, md: 3, lg: 4 }}
              gap="3"
            >
              {certificates.map((e) => (
                <CertificateBox {...e} />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

function CertificateBox({ title, icon }) {
  return (
    <Box className="cert_box" w="100%" p="14px" border="solid #718096 2px">
      <Center
        className="txt"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        {icon}
        <Text textAlign="center" fontSize="md" marginTop="12px" color="#718096">
          {title}
        </Text>
      </Center>
    </Box>
  );
}
