import React from 'react'
import { State } from 'state'

type Type = {
  todos: State['todo']['todos']
}

type OwnProps = {
  todos: Type['todos']
}

type Handler = {
  handleSetTodo: (
    (todos: Type['todos']) => void
  )
}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {

  const setTodoText =  (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTodo({
      text: e.target.value,
      doneflag: props.todos.doneflag
    })
  }

  const setTodoDoneFlag = () => {
    props.handleSetTodo({
      text: props.todos.text,
      doneflag: !props.todos.doneflag
    })
  }

  return (
    <div>
      <input
        type='text'
        value={props.todos.text}
        onChange={setTodoText}
      />
      <input
        type='checkbox'
        checked={props.todos.doneflag}
        onClick={setTodoDoneFlag}
        readOnly
      />
    </div>
  )
}
