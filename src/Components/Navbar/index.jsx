import { Box, Container, Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import logoImg from '../../assets/img/nails-logo.jpg'
import { BsFillCartFill, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [changeBg, setChangeBg] = useState('none')
  const [changeColor, setChangeColor] = useState('black')

  const orangeRgb = 'rgba(237, 137, 54, 0.7)'

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY
      scrollY >= 20 ? (setChangeBg(orangeRgb), setChangeColor('white')) : (setChangeBg('none'), setChangeColor('black')) 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box 
      alignItems={ 'center' }
      as='header'
      backdropFilter={ 'blur(8px)' }
      background={changeBg}
      color={changeColor}
      display={ 'flex' }
      justifyContent={ 'center' }
      minH={ '60px' }
      position={ 'sticky' }
      py={ 1 }
      top={ '0' }
      transition={'0.2s ease-in-out'}
      w={ '100%' }
      zIndex={ 100 }
    >
      <Container
        maxW={ 'container.xl' }
        px={ 3 }
      >
        <Box
          alignItems={ 'center' }
          as='nav'
          display={ 'flex' } 
          justifyContent={ 'space-between' }
        >
          <Stack
            direction={ { base: 'column', md: 'row' } } 
            display={ { base: 'none', md: 'flex' } }
            w={ '300px' }
          >
            <Link>Home</Link>
            <Link>Trabajos</Link>
            <Link>Turnos</Link>
          </Stack>

          <Flex
            alignItems={ 'center' }
            justifyContent={ 'center' }
            maxW={ '60px' }
          >
            <Image 
              boxSize={ '100%' }
              borderRadius={ 'full' }
              objectFit={ 'cover' }
              src={ logoImg }
            />
          </Flex>
          <Flex 
            alignItems={ 'center' }
            display={ { base: 'none', md: 'flex' } }
            fontSize={ '1.2rem' }
            gap={5}
            justifyContent={ 'flex-end' }
            w={ '300px' }
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
            display={ { base: 'block', md: 'none' } }
          >
            <Menu>
              <MenuButton
                as={ IconButton }
                icon={ <HamburgerIcon fontSize={'1.5rem'} /> }
                color={changeColor}
                variant={ 'unstyled' }
              />
              <MenuList
                background={'orange.400'}
                border={'none'}
              >
                <MenuItem background={'orange.400'} color={'white'}>
                  <NavLink>Home</NavLink>
                </MenuItem>
                <MenuItem background={'orange.400'} color={'white'}>
                  <NavLink>Trabajos</NavLink>
                </MenuItem>
                <MenuItem background={'orange.400'} color={'white'}>
                  <NavLink>Turnos</NavLink>
                </MenuItem>
                <MenuItem py={4} background={'orange.400'} color={'white'} display={'flex'} gap={3}>
                  <Link>
                    <BsInstagram fontSize={'1.2rem'} />
                  </Link>
                  <Link>
                    <BsWhatsapp fontSize={'1.2rem'} />
                  </Link>
                  <Link>
                    <BsFillCartFill fontSize={'1.2rem'} />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
