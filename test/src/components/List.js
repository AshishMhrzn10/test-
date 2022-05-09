import React from 'react';
import Todo from './Todo';

const List = ({ tasks, toggle }) => {
    var total = tasks.length;
    var remaining = 0;

    tasks.map(item => {
        if (!item.isDone) {
            remaining++;
        }
        return item;
    });

    return (
        <div>
            <h1>Your Tasks:</h1>
            <p style={{ color: 'red' }}>Click on the task to check it.</p>
            <ul>
                {tasks.map((task) => (
                    <Todo key={task.id} task={task} toggle={toggle} />
                ))}
            </ul>

            <br />
            <h3>{remaining} out of {total} tasks remaining.</h3>
        </div>
    );
};

export default List;