import * as React from 'react'
import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import { todosStore } from '../../../store'

function TodoListItems() {
  const snapshot = useSnapshot(todosStore)

  return (
    <>
      {snapshot.todos.map(todo => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => todosStore.toggle(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={evt => todosStore.update(todo.id, evt.target.value)}
          />
          <Button onClick={() => todosStore.remove(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  )
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}

export { TodoList }
