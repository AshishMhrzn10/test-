import React, { useState } from 'react';

const Form = ({ addTask }) => {
    const [item, setItem] = useState({
        id: '',
        text: '',
        isDone: false
    });

    const handleChange = (e) => {
        setItem({ ...item, text: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            ...item,
            id: Math.floor(Math.random() * 1000000), //Generate random id
        });
        setItem({ ...item, text: '' });

    };

    return (
        <form onSubmit={handleSubmit} >
            <h3>Add an item:</h3>
            <input type="text" onChange={handleChange} value={item.text} />
            <br />
            <button >Add</button>
        </form>
    );
};

export default Form;