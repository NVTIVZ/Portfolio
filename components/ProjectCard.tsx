import { Box, Grid, Flex, GridItem } from '@chakra-ui/layout';
import React from 'react';

import { Text, Image, Heading } from '@chakra-ui/react';

const ProjectCard = (props: any) => {
  return (
    <GridItem
      flexDirection="column"
      key={props.name}
      mx="2"
      my="6"
      backgroundColor="brand.third"
      borderRadius="lg"
      rowSpan={[1, 2]}
      colSpan={1}
      boxShadow="lg"
    >
      <Box>
        <Image src={props.imgURL} alt="project" borderTopRadius="lg" />
      </Box>
      <Box ml="4" mt="1">
        <Heading color="brand.text">{props.name}</Heading>
      </Box>
      <Flex ml="4" flexDirection="row" mt="1" flexWrap="wrap">
        {props.stack.map((stack: any, index: number) => {
          return (
            <Text
              fontSize="lg"
              letterSpacing="wide"
              key={stack}
              as="kbd"
              fontWeight="semibold"
            >
              {index === 0 ? '' : '/'}
              {stack}
            </Text>
          );
        })}
      </Flex>
      <Box
        mx="4"
        my="2"
        pt="1"
        borderTop="1px"
        borderColor="rgba(255,255,255,0.5)"
      >
        <Text>{props.description}</Text>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
