import React from "react";
import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";
function Hobbies() {
  return (
    <Box boxShadow="xl" m="2" p="2" rounded="md" bg="white">
      <Flex direction="column" justify="center">
        <Text p={1}>Hobbies</Text>
        <Center>
          <Flex direction="column">
            <Box>
              <Image
                height="20vh"
                width="20vw"
                objectFit="fit"
                src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2020/10/31/gaming.jpg"
                alt="Gaming"
                borderRadius="4"
              />
              <Text as="em" fontSize="xs">
                Gaming
              </Text>
            </Box>
            <Box>
              <Image
                height="20vh"
                width="20vw"
                objectFit="fit"
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-760x400.png"
                alt="Blogging"
                borderRadius="4"
              />
              <Text as="em" fontSize="xs">
                Blogging
              </Text>
            </Box>
            <Box>
              <Image
                height="20vh"
                width="20vw"
                objectFit="fit"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IQhETfuZ3cEuOw6dlL4gkAla96FafbF6Qg&usqp=CAU"
                alt="Blogging"
                borderRadius="4"
              />
              <Text as="em" fontSize="xs">
                Weight Lifting
              </Text>
            </Box>
          </Flex>
        </Center>
      </Flex>
    </Box>
  );
}

export default Hobbies;
