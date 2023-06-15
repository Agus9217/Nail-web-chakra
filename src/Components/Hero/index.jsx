import { Box, Flex, Image } from '@chakra-ui/react'
import heroImg from '../../assets/img/hero-img.jpeg'

export const Hero = () => {
  return (
    <Flex
      border={'1px solid red'}
      h={'90dvh'}
    >
      <Box
        border={'1px solid green'}
        h={'100%'}
        w={'50%'}
      >

      </Box>
      <Box
        border={'1px solid brown'}
        h={'100%'}
        w={'50%'}
      >
        <Image src={ heroImg } boxSize={'100%'} objectFit={'cover'} />
      </Box>

    </Flex>
  )
}
