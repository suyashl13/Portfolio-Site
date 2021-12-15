import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function SkillBadge() {
  return (
    <Box mt="2rem">
      <Text fontSize='4xl' fontWeight='800' bgClip='text' bgGradient="linear(to-l, #085078, #85D8CE)">My Skills</Text>
    </Box>
  );
}
