type Todo = {
  text: string,
  doneflag: boolean
}

export type State = {
  todos: Todo[]
}

export const initialState: State = {
  todos: [
    { text: "this is Todo's text", doneflag: false },
    { text: "list", doneflag: true },
    { text: "example", doneflag: false },
    { text: "hoge", doneflag: true },
    { text: "huga", doneflag: true },
    { text: "foo", doneflag: false },
    { text: "bar", doneflag: false },
    { text: "this is Todo's text", doneflag: false },
    { text: "list", doneflag: true },
    { text: "example", doneflag: false },
    { text: "hoge", doneflag: true },
    { text: "huga", doneflag: true },
    { text: "foo", doneflag: false },
    { text: "bar", doneflag: false },
  ]
}
