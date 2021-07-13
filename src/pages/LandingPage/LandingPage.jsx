import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
function LandingPage() {
  return (
    <Flex color="black" bg="#22283C">
      <Box flex="1">
        <Profile />
        <Experience />
        <Hobbies />
      </Box>
<<<<<<< Updated upstream
      <Box flex="2">
        <Skills />
=======
      <Box flex="3" bg="orange" height="100vh">
        2
>>>>>>> Stashed changes
      </Box>
    </Flex>
  );
}

export default LandingPage;
