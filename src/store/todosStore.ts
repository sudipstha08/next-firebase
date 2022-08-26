import { proxy } from 'valtio'
// Standard interface and functions
export interface Todo {
  id: number
  text: string
  done: boolean
}

interface Store {
  todos: Todo[]
  newTodo: string
  addTodo: () => void
  toggle: (id: number) => void
  remove: (id: number) => void
  update: (id: number, text: string) => void
}

export const todosStore = proxy<Store>({
  todos: [],
  newTodo: '',
  addTodo() {
    todosStore.todos = addTodo(todosStore.todos, todosStore.newTodo)
    todosStore.newTodo = ''
  },
  toggle: (id: number) => {
    todosStore.todos = toggleTodo(todosStore.todos, id)
    todosStore.newTodo = ''
  },
  remove: (id: number) => {
    todosStore.todos = removeTodo(todosStore.todos, id)
    todosStore.newTodo = ''
  },
  update: (id: number, text: string) => {
    todosStore.todos = updateTodo(todosStore.todos, id, text)
    todosStore.newTodo = ''
  },
})

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map(todo => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }))

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map(todo => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }))

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter(todo => todo.id !== id)

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  if (!text) return [...todos]
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false,
    },
  ]
}
