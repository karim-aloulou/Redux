export const filterTodo = (todos, searchKeyword) => (
  todos.filter(todo => todo.title.toLowerCase().includes(searchKeyword.toLowerCase()))
)

