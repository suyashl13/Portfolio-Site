import { Code, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Skills() {
  const skills = [
    { title: "Front End", emoji: "💻" },
    { title: "Backend Web", emoji: "🕸" },
    { title: "API", emoji: "{}" },
    { title: "Web Automation", emoji: "🤖" },
    { title: "Mobile", emoji: "📱" },
    { title: "UX/UI", emoji: "📱" },
  ];
  return (
    <Container
      maxW={{ base: "container.md", md: "container.md", lg: "container.xl" }}
      marginTop={{ lg: "2rem", base: "1rem" }}
    >
      <SimpleGrid columns={{ base: 2, md: 5, lg: 6 }} spacing={3}>
        {skills.map((skill, i) => (
          <Code
            border="1px"
            textAlign="center"
            borderStyle="dashed"
            borderColor="gray.300"
            borderRadius="4px"
            padding="12px"
          >
            {skill.emoji} {skill.title}
          </Code>
        ))}
      </SimpleGrid>
    </Container>
  );
}
