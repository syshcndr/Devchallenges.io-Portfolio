import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ProjectCard({ logo, tags, title, desc, demo, code }) {
  return (
    <Box boxShadow="xl" m="2" p="5" rounded="md" bg="white" width="33.33%">
      <Center flexDirection="column">
        <Image src={logo} w="100%" h="15%" rounded="md" />
      </Center>
      <Text p={1} paddingTop={2}>
        {tags}
      </Text>
      <Heading fontSize="3xl" p="1">
        {title}
      </Heading>
      <Text color="#828282" p={2}>
        {desc}
      </Text>
      <HStack spacing={5} align="center" alignContent="center">
        <Spacer />
        <Link href={demo} isExternal>
          <Button colorScheme="blue" variant="solid" size="lg">
            Demo
          </Button>
        </Link>
        <Link href={code} isExternal>
          <Button colorScheme="blue" variant="outline" size="lg">
            Code
          </Button>
        </Link>
        <Spacer />
      </HStack>
    </Box>
  );
}

export default ProjectCard;
