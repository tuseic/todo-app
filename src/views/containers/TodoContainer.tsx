import React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  todos: State['todo']['todos']
}

const TodoContainer: React.FC = () => {
  const todos = useSelector<State, Type['todos']>(state => state.todo.todos)

  const props = { todos }

  return (
    <Todo { ...props }/>
  )
}

export default TodoContainer
