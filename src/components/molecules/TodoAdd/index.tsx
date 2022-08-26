import * as React from 'react'
import { Button, Input, Grid } from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import { todosStore } from '../../../store'

function TodoAdd() {
  const snapshot = useSnapshot(todosStore)

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={snapshot.newTodo}
        onChange={e => (todosStore.newTodo = e.target.value)}
      />
      <Button onClick={() => snapshot.addTodo()}>Add Todo</Button>
    </Grid>
  )
}

export { TodoAdd }
