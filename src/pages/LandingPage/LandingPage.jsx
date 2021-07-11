import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
function LandingPage() {
  return (
    <Flex color="black">
      <Box flex="1" bg="#22283C" height="100%">
        <Profile />
        <Experience />
        <Hobbies />
      </Box>
      <Box flex="2" bg="orange" height="100vh">
        2
      </Box>
    </Flex>
  );
}

export default LandingPage;
