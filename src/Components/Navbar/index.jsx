import { Box, Container, Flex, IconButton, Image, Link, Menu, MenuButton, Stack } from '@chakra-ui/react'
import logoImg from '../../assets/img/nails-logo.jpg'
import { BsFillCartFill, BsInstagram, BsSearch, BsWhatsapp } from 'react-icons/bs'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  return (
    <Box 
      alignItems={'center'}
      as='header'
      display={'flex'}
      backdropFilter={'blur(8px)'}
      justifyContent={'center'}
      minH={'60px'}
      position={'sticky'}
      py={1}
      top={'0'}
      w={'100%'}
      zIndex={100}
    >
      <Container
        maxW={'container.xl'}
        px={3}
      >
        <Box
          alignItems={'center'}
          as='nav'
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }} 
            display={{ base: 'none', md: 'flex' }}
            w={'300px'}
          >
            <Link>Home</Link>
            <Link>Trabajos</Link>
            <Link>Turnos</Link>
          </Stack>

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            maxW={'60px'}
          >
            <Image 
              boxSize={'100%'}
              borderRadius={'full'}
              objectFit={'cover'}
              src={ logoImg }
            />
          </Flex>
          <Flex 
            alignItems={'center'}
            fontSize={'1.2rem'}
            gap={5}
            justifyContent={'flex-end'}
            w={'300px'}
          >
            <Link>
              <BsInstagram />
            </Link>
            <Link>
              <BsWhatsapp />
            </Link>
            <Link>
              <BsFillCartFill />
            </Link>
          </Flex>
          <Box
            display={{ base: 'block', md: 'none' }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'ghost'}
              />
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
