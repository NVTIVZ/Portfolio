import { Box, Flex, GridItem, Link } from '@chakra-ui/layout';
import { Heading, Image, Text } from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';
import NextImage from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectCard = (props: any) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '-100px 0px -100px 0px',
    triggerOnce: true,
  });
  return (
    <GridItem key={props.name} rowSpan={[2]} colSpan={1} ref={ref}>
      <SlideFade
        offsetX={props.index === 0 || props.index === 2 ? '20px' : '-20px'}
        offsetY={0}
        in={inView}
        unmountOnExit={true}
        style={{
          position: 'relative',
        }}
        transition={{ enter: { duration: 0.5 } }}
      >
        <Flex
          flexDirection="column"
          backgroundColor="brand.third"
          borderRadius="lg"
          boxShadow="lg"
          ml={props.index === 0 || props.index === 2 ? [0, 0, 4] : '0'}
          mr={props.index === 0 || props.index === 2 ? '0' : [0, 0, 4]}
          my="6"
        >
          {' '}
          <Box borderTopRadius="lg" overflow="hidden" blur>
            <NextImage
              src={props.imgURL}
              alt="project"
              layout="responsive"
              width="929"
              height="505"
              priority={true}
            />
          </Box>
          <Box ml="4" mt="1" d="flex" alignItems="center">
            <Heading color="brand.text">{props.name}</Heading>
            <Link ml="auto" href={props.github} target="_blank">
              <Image
                src="/images/github-white.svg"
                alt="github"
                height="7"
                mr={2}
                cursor="pointer"
              />
            </Link>
            <Link href={props.live} target="_blank" disabled>
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
        </Flex>{' '}
      </SlideFade>
    </GridItem>
  );
};

export default ProjectCard;
