import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import myphoto from "../assets/my_photo.jpg";

export default function Landing() {
  return (
    <Container
      maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      marginTop="1.8rem"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Image borderRadius="full" src={myphoto} fit={"cover"} boxSize={310} />
        <Box
          ml={{ lg: "78px" }}
          textAlign={{ sm: "center", base: "center", lg: "start" }}
          marginTop={{ sm: "24px", base: "24px" }}
        >
          <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={900}>
            Full Stack Developer
          </Text>
          <br />
          Hello, I am full stack developer based in Pune. I love to work with
          startups and serve them with an amazing piece of software. Every
          opportunity is a golden chance for me hence I give my best in terms of
          UI, performance and security to deliver perfect applications.
        </Box>
      </Flex>
    </Container>
  );
}
