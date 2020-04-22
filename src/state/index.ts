import * as Todo from 'state/todo'

export type State = {
  todo: Todo.State
}

export const initialState: State = {
  todo: Todo.initialState
}

export const reducers = {
  todo: Todo.reducer
}
