import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from 'state/todo'

export const reducer = reducerWithInitialState(initialState)
