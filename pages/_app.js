import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes';



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
    </ThemeProvider>
  )
}
