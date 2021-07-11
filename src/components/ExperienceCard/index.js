import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

function ExperienceCard({ image, start, end, position, description }) {
  return (
    <Box padding="2">
      <Grid
        h="100px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Container centerContent>
            <Image w="84px" h="84px" src={image} />
          </Container>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text fontSize="xs" color="#828282">
              {start} - {end}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {position}
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Text fontSize="xs" color="#828282">
            {description}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ExperienceCard;
