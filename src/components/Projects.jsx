import {
  Box,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import shetkaribasket from "../assets/project_icons/shetkaribasket.png";
import xpense from "../assets/project_icons/xpense.png";
import grablink from "../assets/project_icons/grablink.png";

export default function Projects() {
  const projects = [
    {
      title: "Shetkari-Basket",
      link: "https://play.google.com/store/apps/details?id=com.flutter.shetkaribasket",
      image: shetkaribasket,
    },
    {
      title: "Xpense",
      link: "https://play.google.com/store/apps/details?id=suyeshlawand.xpence",
      image: xpense,
    },
    {
      title: "Grab Link",
      link: "https://play.google.com/store/apps/details?id=suyeshlawand.grab_link",
      image: grablink,
    },
    {
      title: "Quickshare",
      link: "https://github.com/suyashl13/Quickshare",
      image: grablink,
    },
  ];

  return (
    <Container
      maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
      marginTop="3.4rem"
    >
      <Text
        color="teal"
        textAlign={{ base: "center", lg: "start", md: "start" }}
        letterSpacing="1.8px"
        fontSize="3xl"
        textTransform="uppercase"
        fontWeight="bold"
      >
        My Projects
      </Text>
      <br />
      <SimpleGrid columns={{ base: 2, lg: 4, md: 4 }} spacing="2">
        {projects.map((e) => (
          <Project {...e} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

function Project({ title, link, image }) {
  return (
    <Box
      onClick={() => {
        window.open(link);
      }}
      _hover={{
        boxShadow: "0px 0px 4px grey",
      }}
      border="solid #718096 2px"
      padding={6}
      borderRadius="2px"
      textAlign="center"
    >
      <Center display="flex" justifyContent={"center"} flexDirection="column">
        <Image
        backgroundColor='white'
          filter="grayscale(90%)"
          borderRadius={200}
          height={70}
          src={image}
          shadow="0px 4px 10px #718096"
        />
        <Text
          color="#718096"
          href={link}
          fontWeight="bold"
          marginTop="16px"
          fontSize="xl"
        >
          {title}
        </Text>
      </Center>
    </Box>
  );
}
