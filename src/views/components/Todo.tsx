import React from 'react'
import { State } from 'state'

type Type = {
  todos: State['todo']['todos']
}

type OwnProps = {
  todos: Type['todos']
}

type Handler = {}

type Props = OwnProps & Handler

export const Todo: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        type='text'
        value={props.todos.text}
      />
      <input
        type='checkbox'
        checked={props.todos.doneflag}
      />
    </div>
  )
}
