import * as React from 'react'
import { ChakraProvider, Box, theme } from '@chakra-ui/react'
import { TopBar, TodoList, TodoAdd } from '../../components'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  )
}
