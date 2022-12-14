import PropTypes from 'prop-types';
import { TodoItem, TodoText, IconDelete, CheckBox } from './Todo.styled';
import {memo} from'react'

const Todo = ({ id,text, completed, togglleComplited, onDeleteTodo }) => {
  console.log(`render ${text}`);
  return (
    <TodoItem>
      <CheckBox
        type="checkbox"
        checked={completed}
        onChange={()=>togglleComplited(id)}
      />
      <TodoText completed={completed}>{text}</TodoText>
      <button onClick={()=>onDeleteTodo(id)} aria-label="delete todo">
        <IconDelete />
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
export default memo(Todo);


