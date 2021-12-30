import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
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
      <hr />
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        <GridItem colSpan={{ sm: 5, md: 1, lg: 1, base: 5 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="8xl" color="teal">
              {projects.length}
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="teal">
              Projects
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
              I love to build secure and fast applications. Here are some personal and client projects done by me.
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
            gap="3">
            {projects.map((e) => (
              <Project {...e} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
      <Box mt='5rem'>
        <hr />
      </Box>
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
          backgroundColor="white"
          filter="grayscale(100%)"
          borderRadius={200}
          height={46}
          src={image}
          shadow="0.4px 2px 3px #718096"
        />
        <Text color="#718096" href={link} marginTop="16px">
          {title}
        </Text>
      </Center>
    </Box>
  );
}
