import { useState ,useEffect,useCallback} from "react";
import { nanoid } from "nanoid";
import TodoEditer from "./TodoEditer/TodoEditer";
import TodoList from "./TodoList/TodoList";


const initialTodos = [
  { id: 'id-1', text: 'React', completed: false },
  { id: 'id-2', text: 'Redux', completed: false },
  { id: 'id-3', text: 'NodeJS', completed: false },
];

export const App = () => {
 const [todos, setTodos] = useState(() => {
   return JSON.parse(localStorage.getItem('todos')) ?? [...initialTodos];
 });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

    const addTodo = text => {
      const todo = {
        id: nanoid(),
        text,
        completed: false,
      };
      setTodos(prevTodos => [todo, ...prevTodos]);
    };
 const deleteTodo = useCallback(
   todoId => {
     setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
   },
   [setTodos]
 );
  const complitedTodo = useCallback(
    todoId => {
      setTodos(prevState =>
        prevState.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    },
    [setTodos]
  );
  return (
    <>
      <TodoEditer onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        togglleComplited={complitedTodo}
      />
    </>
  );
};
