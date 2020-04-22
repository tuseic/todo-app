import { actionCreatorFactory } from 'typescript-fsa'
import { State } from 'state/todo'

const actionCreator = actionCreatorFactory('TODO')

type Type = {
  todo: State['todos']
}

export const actions = {
  setTodo: actionCreator<Type['todo']>('SET_TODO'),
}
