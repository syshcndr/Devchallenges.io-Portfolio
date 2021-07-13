import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  return (
    <Box boxShadow="xl" m="5" p="10" rounded="md" bg="white">
      <Text fontSize="3xl">Projects</Text>
      <Flex direction="row">
        <ProjectCard
          logo="https://media.discordapp.net/attachments/856193244421029890/864551172718198794/51c6775fa270938a872eb94817ec2bdc.png"
          tags="#HTML # CSS #reponsive"
          title="Recipe Blog"
          desc="In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
          demo="https://calvindsouza.me"
          code="https://calvindsouza.me"
        />
        <ProjectCard
          logo="https://media.discordapp.net/attachments/856193244421029890/864551172718198794/51c6775fa270938a872eb94817ec2bdc.png"
          tags="#HTML # CSS #reponsive"
          title="Recipe Blog"
          desc="In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
          demo="https://calvindsouza.me"
          code="https://calvindsouza.me"
        />
        <ProjectCard
          logo="https://media.discordapp.net/attachments/856193244421029890/864551172718198794/51c6775fa270938a872eb94817ec2bdc.png"
          tags="#HTML # CSS #reponsive"
          title="Recipe Blog"
          desc="In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
          demo="https://calvindsouza.me"
          code="https://calvindsouza.me"
        />
      </Flex>
    </Box>
  );
}
export default Projects;
