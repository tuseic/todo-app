import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

const actionCreator = actionCreatorFactory('TODO')

type Type = {
  todoWithIndex: {
    todo: State['todos'][0]
    index: number
  }
}

export const actions = {
  setTodo: actionCreator<Type['todoWithIndex']>('SET_TODO'),
}
