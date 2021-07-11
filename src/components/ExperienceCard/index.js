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
            <Image className="experienceImage" src={image} />
          </Container>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text className="experienceTime">
              {start} - {end}
            </Text>
            <Text className="experiencePosition">{position}</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Text className="experienceDesc">{description}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ExperienceCard;
