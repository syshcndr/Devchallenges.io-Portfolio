import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
function LandingPage() {
  return (
    <Flex color="black" bg="#22283C">
      <Box flex="1">
        <Profile />
        <Experience />
        <Hobbies />
      </Box>
      <Box flex="2">
        <Skills />
        <Projects />
      </Box>
    </Flex>
  );
}

export default LandingPage;
