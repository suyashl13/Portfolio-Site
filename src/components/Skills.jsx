import { Code, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Skills() {
  const skills = [
    { title: "Frontend" },
    { title: "Backend" },
    { title: "API" },
    { title: "Automation" },
    { title: "Mobile" },
    { title: "UX/UI" },
  ];
  return (
    <SimpleGrid columns={{ base: 2, md: 5, lg: 6 }} spacing={2}>
      {skills.map((skill, i) => (
        <Code
          border="1px"
          textAlign="center"
          borderStyle="dashed"
          borderColor="gray.300"
          borderRadius="4px"
          padding="2px"
        >
          {skill.title}
        </Code>
      ))}
    </SimpleGrid>
  );
}

