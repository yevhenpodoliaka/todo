import PropTypes from 'prop-types';
import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

const Todo = ({ text, completed, togglleComplited, onDeleteTodo }) => {
  return (
    <TodoItem>
      <input type="checkbox" checked={completed} onChange={togglleComplited} />
      <TodoText completed={completed}>{text}</TodoText>
      <button onClick={onDeleteTodo} aria-label="delete todo">
        <FiTrash />
      </button>
    </TodoItem>
  );
};
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  togglleComplited: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
export default Todo;

const TodoItem = styled.li`
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  border: 1px solid blue;
  border-radius: 4px;
`;
const TodoText = styled.p`
  text-decoration: ${({ completed }) => {
    if (completed) {
      return 'line-through';
    }
  }};
`;
