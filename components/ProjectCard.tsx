import { Box, Flex, GridItem, Link } from '@chakra-ui/layout';
import { Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectCard = (props: any) => {
  return (
    <GridItem
      flexDirection="column"
      key={props.name}
      ml={props.index === 0 || props.index === 2 ? [0, 0, 4] : '0'}
      mr={props.index === 0 || props.index === 2 ? '0' : [0, 0, 4]}
      my="6"
      backgroundColor="brand.third"
      borderRadius="lg"
      rowSpan={[2]}
      colSpan={1}
      boxShadow="lg"
    >
      <Box>
        <Image src={props.imgURL} alt="project" borderTopRadius="lg" />
      </Box>
      <Box ml="4" mt="1" d="flex" alignItems="center">
        <Heading color="brand.text">{props.name}</Heading>
        <Link ml="auto" href={props.github} target="_blank">
          <Image
            src="/images/github-original.svg"
            alt="github"
            height="7"
            mr={2}
            cursor="pointer"
          />
        </Link>
        <Link href={props.live} target="_blank">
          <Image
            src="/images/external-link.svg"
            alt="github"
            height="7"
            mr={2}
            cursor="pointer"
          />
        </Link>
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
