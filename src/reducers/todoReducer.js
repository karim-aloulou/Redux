import { ADD_TODO, COMPLETE_TODO, UNCOMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/constants';

const initialState = [
  { id: 1, title: 'Coding Java', completed: true },
  { id: 3, title: 'Makan Siang', completed: false },
  { id: 2, title: 'Makan Malam', completed: false },
];

const addTodo = (state, newTodo) => {
  const { title, completed } = newTodo;
  const ids = state.map(todo => todo.id);
  const newId = Math.max(...ids) + 1;
  const todo = {
    id: newId,
    title,
    completed,
  };
  const newState = [...state, todo]
  return newState
};

const completeTodo = (state, todoId) => {
  console.log(todoId);
  const newState = state.map(todo => {

    if (todo.id === Number(todoId)) {
      return {
        id: todo.id,
        title: todo.title,
        completed: false,
      };
    }
    return todo;
  });
  return newState
}

const deleteTodo = (state, todoId) => {
  const newState = state.filter(todo => {
    console.log("test", todo);
    return todo.id !== todoId
  });
  return newState
}

const uncompleteTodo = (state, todoId) => {
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        completed: true,
      };
    }
    return todo;
  });
  return newState
}

const editTodo = (state, updateTodo) => {
  console.log("ini updateTodo di reducer ", updateTodo);
  const newState = state.map(todo => {
    if (todo.id === updateTodo.id) {
      return {
        id: todo.id,
        title: updateTodo.title,
        completed: todo.completed
      };
    }
    return todo;
  });
  return newState;
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case COMPLETE_TODO: return completeTodo(state, action.payload)
    case UNCOMPLETE_TODO: return uncompleteTodo(state, action.payload)
    case DELETE_TODO: return deleteTodo(state, action.payload)
    case EDIT_TODO: return editTodo(state, action.payload)
    default: return state;
  }
};


export default todoReducer;
