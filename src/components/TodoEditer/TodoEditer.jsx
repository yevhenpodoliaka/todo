import { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrap, Form, Btn, Input } from './Todoediter.styled';
import { FiFolderPlus } from 'react-icons/fi';

export default function TodoEditer({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <FiFolderPlus />
        </Btn>

        <Input
          onChange={handleChange}
          value={value}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="add new todo ..."
        />
      </Form>
    </Wrap>
  );
}

TodoEditer.propType = {
  onSubmit: PropTypes.func.isRequired,
};


