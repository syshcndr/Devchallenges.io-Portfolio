import React from "react";
import { Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";
function Skills() {
  return (
    <Box boxShadow="xl" m="2" p="2" rounded="md" bg="white">
      <Flex direction="column" justify="center">
        <Text p={1}>Skills</Text>

        <Flex direction="column">
          <Box>
            <UnorderedList fontSize={12} pl={4}>
              <ListItem>
                <Text as="b">Programming Languages :</Text> Java, Javascript,
                Python
              </ListItem>
              <ListItem>
                <Text as="b">Databases :</Text> MongoDB, PostgreSQL
              </ListItem>
              <ListItem>
                <Text as="b">Web Application Development :</Text> Reactjs,
                Express js, Node.js, Django
              </ListItem>
              <ListItem>
                <Text as="b">Mobile Application Development :</Text> React
                Native, Flutter SDK
              </ListItem>
              <ListItem>
                <Text as="b">Desktop Application Development:</Text> Electron.js
              </ListItem>
              <ListItem>
                <Text as="b">Game Development :</Text> Three.js, Phaser.js,
                Unity
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Skills;
