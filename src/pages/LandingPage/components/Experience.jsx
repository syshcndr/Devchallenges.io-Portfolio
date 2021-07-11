import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import ExperienceCard from "../../../components/ExperienceCard";
function Experience() {
  return (
    <Box padding="15">
      <Container className="card">
        <Text>Experiences</Text>
        <ExperienceCard
          image="https://s3-alpha-sig.figma.com/img/0c39/799a/364c0a3410cba48399fd137e4ca19ccb?Expires=1626652800&Signature=PT47fgNu~RE0cP3Uila0DBPWhTMY6K33ndp0Z81mmYeaHPbrj3Q2Jb5hbqsKNPNjHlvLaO8KFkXVrpVH6eLPidq8tWdC7nbqW4tvZWwBjWm1~YhZqzhWXezFaMuqN10qji0nrZ26Y5IQWgXTpQr4KynmF9gnaQ-L8289BUkdifDWZw1ZvnVndK2y3m5pJ9PKk0WmBhh~byWSvVWRqS2AVm3HGP39ipksScvjbJOv8k7ddPZpT35wn1EesZJVMncryxxSwo-qcQdYNPeEIzZX1YteBlR2aVxMCldv8pRnPvxzxx2nqWjfN8OCBYLVb~ExcHkb66t6Bp5gGIXKT6hhnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          start="Feb 2017"
          end="Current"
          position="Front-end Developer"
          description="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        />
        <ExperienceCard
          image="https://s3-alpha-sig.figma.com/img/0c39/799a/364c0a3410cba48399fd137e4ca19ccb?Expires=1626652800&Signature=PT47fgNu~RE0cP3Uila0DBPWhTMY6K33ndp0Z81mmYeaHPbrj3Q2Jb5hbqsKNPNjHlvLaO8KFkXVrpVH6eLPidq8tWdC7nbqW4tvZWwBjWm1~YhZqzhWXezFaMuqN10qji0nrZ26Y5IQWgXTpQr4KynmF9gnaQ-L8289BUkdifDWZw1ZvnVndK2y3m5pJ9PKk0WmBhh~byWSvVWRqS2AVm3HGP39ipksScvjbJOv8k7ddPZpT35wn1EesZJVMncryxxSwo-qcQdYNPeEIzZX1YteBlR2aVxMCldv8pRnPvxzxx2nqWjfN8OCBYLVb~ExcHkb66t6Bp5gGIXKT6hhnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          start="Feb 2017"
          end="Current"
          position="Front-end Developer"
          description="Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        />
      </Container>
    </Box>
  );
}

export default Experience;
