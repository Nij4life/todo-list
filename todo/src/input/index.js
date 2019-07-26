import React, { useState } from 'react';
import Input from './Input';
import './style.css';

const InputContainer = ({ addTodoItem }) => {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	}

	const handleChangeHandler = () => {
		addTodoItem(text);
		setText('');
	}

	return (
		<Input
			handleChange={handleChange}
			value={text}
			addTodoItem={handleChangeHandler} />
	)

}

export default InputContainer;