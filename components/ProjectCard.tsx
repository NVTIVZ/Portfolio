import { Box, Grid, Flex, GridItem } from '@chakra-ui/layout';
import React from 'react';
import buttonDeterminer from '../utils/buttonDeterminer';
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
        {props.stack.map((stack: any) => {
          return (
            <Box
              d="flex"
              alignItems="center"
              py="1"
              px="2"
              backgroundColor={`${buttonDeterminer(stack)}`}
              borderRadius="md"
              mr="2"
              key={stack}
            >
              <Image
                src={`/images/${stack}-original.svg`}
                alt="react"
                width={4}
              />
              <Text fontSize="sm" ml="0.5">
                {stack}
              </Text>
            </Box>
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
        <Text fontWeight="semibold">{props.description}</Text>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
