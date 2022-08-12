import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import { List } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, togglleComplited }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Todo
        key={id}
        text={text}
        completed={completed}
        onDeleteTodo={() => {
          onDeleteTodo(id);
        }}
        togglleComplited={() => {
          togglleComplited(id);
        }}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
  togglleComplited: PropTypes.func.isRequired,
};

export default TodoList;
