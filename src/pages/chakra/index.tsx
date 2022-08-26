import * as React from 'react'
import { TopBar, TodoList, TodoAdd } from '../../components'
import { Box } from '@chakra-ui/react'

function chakra() {
  return (
    <Box maxWidth="8xl" margin="auto" p={5}>
      <TopBar />
      <TodoList />
      <TodoAdd />
    </Box>
  )
}

export default chakra
