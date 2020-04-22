import React from 'react'
import { State } from 'state'

type Type = {
  todos: State['todo']['todos']
  todoWithIndex: {
    todo: State['todo']['todos'][0]
    index: number
  }
}

type OwnProps = {
  todos: Type['todos']
}

type Handler = {
  handleSetTodo: (
    (todoWithIndex: Type['todoWithIndex']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setTodoTextFunc = (todoWithIndex: Type['todoWithIndex']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTodo({
      todo: {
        ...todoWithIndex.todo,
        text: e.target.value,
      },
      index: todoWithIndex.index
    })
  }

  const setTodoDoneFlagFunc = (todoWithIndex: Type['todoWithIndex']) => () => {
    props.handleSetTodo({
      todo: {
        ...todoWithIndex.todo,
        doneflag: !todoWithIndex.todo.doneflag
      },
      index: todoWithIndex.index
    })
  }

  return (
    <div>
      { props.todos.map((todo, index) => {
        return (
          <div>
            <input
              type='text'
              onChange={setTodoTextFunc({todo, index})}
              value={todo.text}
            />
            <input
              type='checkbox'
              onClick={setTodoDoneFlagFunc({todo, index})}
              checked={todo.doneflag}
              readOnly
            />
          </div>
        )
      }) }
    </div>
  )
}
