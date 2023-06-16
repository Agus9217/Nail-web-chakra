import { Box, Button, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import heroImg from '../../assets/img/hero-img.jpeg'
import { FiCornerRightDown } from 'react-icons/fi'

export const Hero = () => {
  return (
    <Flex
      alignItems={ 'center' }
      h={ '90dvh' }
      direction={ { base: 'column', md: 'row' }}
    >
      <Box
        h={ '100%' }
        w={ '50%' }
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
            fontSize={ 'clamp(2.3rem, 5vw, 8rem)' }
          >
            Realza tu belleza
          </Heading>
          <Text
            alignItems={ 'center' }
            display={ 'flex' }
            fontSize={ 'clamp(1.2rem, 2vw, 2rem)' }
            fontWeight={ 'thin' }
            gap={ 2 }
            textAlign={ 'center' }
          >
            Mira nuestro catálogo <FiCornerRightDown />
          </Text>
          <Wrap spacing={2}>
            <WrapItem>
              <Button>Uñas</Button>
            </WrapItem>
            <WrapItem>
              <Button>Peluqueria</Button>
            </WrapItem>
            <WrapItem>
              <Button>Tintura</Button>
            </WrapItem>
            <WrapItem>
              <Button>Manos</Button>
            </WrapItem>
            <WrapItem>
              <Button>Pies</Button>
            </WrapItem>
            <WrapItem>
              <Button>Cortes</Button>
            </WrapItem>
          </Wrap>
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
