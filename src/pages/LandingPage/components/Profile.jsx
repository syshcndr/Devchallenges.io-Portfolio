import React from "react";
import { Box, Flex, Text, Image, Center } from "@chakra-ui/react";
function Profile() {
  return (
    <Center>
      <Box boxShadow="l" m="2" p="2" rounded="md" bg="white">


        <Flex direction="column">
          
          <Image
            height="100%"
            width="90%"
            objectFit="fit"
            src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2020/10/31/gaming.jpg"
            alt="Gaming"
            borderRadius="4"
          />
          
          <Text fontSize="md" pt={1}>
            Billy pearson
          </Text>
          <Text fontSize="sm" pb={6}>
            Full-Stack developer
          </Text>
          <Text fontSize="sm">
            billy@example.com
          </Text>
          <Text fontSize="sm" pb={6}>
            +91 7509315016
          </Text>
          <Text fontSize="sm">
            Self Motivated Developer.<br/> Who is willing to learn and create outstanding ui application.
          </Text>
         

        </Flex>


      </Box>
    </Center>
  );
}

export default Profile;
