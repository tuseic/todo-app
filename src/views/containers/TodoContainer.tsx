import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, actions } from 'state'
import { Todo } from 'views/components/Todo'

type Type = {
  todos: State['todo']['todos']
  todoWithIndex: {
    todo: State['todo']['todos'][0]
    index: number
  }
}

const TodoContainer: React.FC = () => {
  const todos = useSelector<State, Type['todos']>(state => state.todo.todos)

  const dispatch = useDispatch()
  const handleSetTodo = useCallback(
    (todoWithIndex: Type['todoWithIndex']) => {
      dispatch(actions.todo.setTodo(todoWithIndex))
    }, [dispatch]
  )

  const props = { todos, handleSetTodo }

  return (
    <Todo { ...props }/>
  )
}

export default TodoContainer
