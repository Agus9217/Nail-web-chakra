import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import bottleImg from '../../assets/img/product-bottle.jpeg'
import React from 'react'

export const Products = () => {
  return (
    <Flex 
      w={'100%'} 
      mt={3} 
      display={'flex'} 
      direction={{ base: 'column', md: 'row' }} 
      gap={6} alignItems={'center'} 
      justifyContent={'center'} 
      px={3}
    >
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={ bottleImg }
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Lorem ipsum dolor</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='orange'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={ bottleImg }
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Lorem ipsum dolor</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='orange'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={ bottleImg }
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Lorem ipsum dolor</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='orange'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='orange'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  )
}
