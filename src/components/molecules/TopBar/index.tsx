import * as React from 'react'
import { Button, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { todosStore } from '../../../store'
import { Todo } from '../../../store/todosStore'

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const onLoadHandler = () =>
    fetch(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json',
    )
      .then(res => res.json())
      .then((data: Todo[]) => (todosStore.todos = data))

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoadHandler}>Load</Button>
    </Grid>
  )
}

export { TopBar }
