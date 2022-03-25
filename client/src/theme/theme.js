import { extendTheme } from '@chakra-ui/react'

//  add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

// extend the theme
const theme = extendTheme({ 
  config 
})

export default theme