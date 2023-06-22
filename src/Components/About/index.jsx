import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import aboutImg from '../../assets/img/about-img.jpeg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const About = () => {
  return (
    <Box
      background={'green.900'}
      borderTopRadius={'50px'}
      py={'3rem'}
      mt={10}
      w={'100%'}
    >
      <Flex
        mx={{ base: '5px', md: '3rem' }}
        alignItems={'center'}
        direction={{ base: 'column', md: 'row' }}
        color={'white'}
      >
        <Box
          maxW={{ base: '80%', md: '40%' }}
          w={'100%'}
        >
          <Image 
            src={ aboutImg }
            boxSize={ '100%' } 
            objectFit={ 'cover' } 
            borderRadius={'8px'}
          />
        </Box>
        <Flex
          direction={'column'}
          justifyContent={'center'}
          w={'100%'}
          maxW={{ base: '80%', md: '60%' }}
          p={{ base: '1rem', md: '3rem' }}
        >
          <Text
            fontSize={'2xl'}
            fontWeight={'light'}
          >
            Sobre mi
          </Text>
          <Heading
            as={'h3'}
            py={'2rem'}
            fontSize={'clamp(1.5rem, 3vw, 2.5rem)'}
          >
            Descubre tu mejor look conmigo
          </Heading>
          <Text
            fontWeight={'light'}
          >
            Soy experta en manicuras, tratamientos de uñas, peluquería y todo lo relacionado con el cuidado y embellecimiento de las mujeres. Mi pasión por hacer que las mujeres se sientan seguras y hermosas es lo que me motiva a brindar servicios de alta calidad y personalizados.
          </Text>
          <Link>
            <Text
              pt={'2rem'}
              display={'flex'}
              alignItems={'center'}
              gap={3}
              fontSize={'clamp(1rem, 3vw, 2rem)'}
            >
              Vistia el catálogo <BsFillArrowRightCircleFill /> 
            </Text>
          </Link>

        </Flex>
      </Flex>

    </Box>
  )
}
