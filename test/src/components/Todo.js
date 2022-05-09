import React from 'react';

const Todo = ({ task, toggle }) => {
    const handleToggle = () => {
        toggle(task.id);
    };
    return (
        <li style={{ textDecoration: task.isDone ? "line-through" : "", cursor: "pointer" }} onClick={handleToggle}>{task.text}</li>
    );
};

export default Todo;