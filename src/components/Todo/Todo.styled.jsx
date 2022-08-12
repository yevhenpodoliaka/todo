import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

export const IconDelete = styled(FiTrash)`
  position: absolute;
  top: 4px;
  right: 4px;
  color: blue;
  &:hover {
    color: red;
  }
`;
export const TodoItem = styled.li`
position:relative;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  border: 1px solid blue;
  border-radius: 4px;
`;
export const TodoText = styled.p`
  word-break: break-all;
  padding:12px;
  text-decoration: ${({ completed }) => {
    if (completed) {
      return 'line-through';
    }
  }};
`;
export const CheckBox= styled.input`
    position:absolute;
    top:0;
    left:0;
`