import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImg from '../../assets/img/hero-img.jpeg'
import { FiCornerRightDown } from 'react-icons/fi'

export const Hero = () => {
  return (
    <Flex
      alignItems={ 'center' }
      h={{ base: '100%', md: '90dvh' }}
      direction={ { base: 'column', md: 'row' }}
    >
      <Box
        h={ '100%' }
        w={ { base: '90%', md: '50%' } }
      >
        <Flex
          align={ 'center' }
          direction={ 'column' }
          h={ '100%' }
          justifyContent={ 'center' }
          py={ { base: '2rem', md: '0' } }
        >
          <Heading 
            textAlign={ 'center' }
            as={ 'h2' }
            fontWeight={ 'light' }
            fontSize={ 'clamp(3rem, 5vw, 8rem)' }
          >
            Realza tu belleza
          </Heading>
          <Text
            py={2}
            alignItems={ 'center' }
            display={ 'flex' }
            fontSize={ 'clamp(1.2rem, 2vw, 2rem)' }
            fontWeight={ 'thin' }
            gap={ 2 }
            textAlign={ 'center' }
          >
            Mira nuestro catálogo <FiCornerRightDown />
          </Text>
          <Flex maxW={'450px'} gap={2} flexWrap={'wrap'} justifyContent={{ base: 'center', md: 'flex-start' }} p={4}>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Uñas</Button>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Peluqueria</Button>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Tintura</Button>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Manos</Button>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Cortes</Button>
            <Button borderRadius={50} variant={'outline'} _hover={{ bg: 'orange.300', color: 'white' }} fontWeight={'thin'}>Pies</Button>
          </Flex>
        </Flex>

      </Box>
      <Box
        h={ '100%' }
        w={ { base: '80%', md: '50%' } }
      >
        <Image 
          src={ heroImg } 
          boxSize={ '100%' } 
          objectFit={ 'cover' }
          borderRadius={ { base: '8px', md: 'none' } } 
        />
      </Box>

    </Flex>
  )
}
