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
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-23129",
    },
    {
      title: "React.js",
      icon: <FaReact fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-71676",
    },
    {
      title: "Django",
      icon: <DiDjango fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-17379",
    },
    {
      title: "Flutter",
      icon: <RiFlutterFill fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-36624",
    },
    {
      title: "Android",
      icon: <SiAndroid fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-27376",
    },
    {
      title: "Java",
      icon: <FaJava fontSize="4rem" color="#718096" />,
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8053b84c-4160-485f-ad87-1d1e4fb5c6d8.pdf",
    },
    {
      title: "Dart",
      icon: <SiDart fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-35916",
    },
    {
      title: "React-Django Integration",
      icon: <FaCode fontSize="4rem" color="#718096" />,
      link: "https://courses.learncodeonline.in/learn/certificate/1490773-71676",
    },
  ];

  return (
    <Box>
      <Container
        maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
        marginTop={{ lg: "4rem", base: "2rem" }}
      >
        <br />
        <hr style={{ marginBottom: "12px" }} />
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={{ sm: 5, md: 1, lg: 1, base: 5 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="8xl" color="teal">
                {certificates.length}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="teal">
                Certifications
              </Text>
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
                  base: "regular",
                  sm: "regular",
                  md: "bolder",
                  lg: "bolder",
                }}
                marginLeft={{ lg: "16px" }}
                margin={{ sm: "8px", base: "8px", md: "8px", lg: "0px" }}
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

function CertificateBox({ title, icon, link }) {
  return (
    <Box
      onClick={() => {
        window.open(link);
      }}
      _hover={{
        boxShadow: "0px 0px 4px grey",
      }}
      borderRadius='2.8px'
      className="cert_box"
      w="100%"
      p="14px"
      border="solid #718096 2px"
    >
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
