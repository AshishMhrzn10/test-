import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
    const [items, setItems] = useState([]);
    const addTask = (item) => {
        setItems([item, ...items]);
    };

    const toggle = (id) => {
        setItems(
            items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isDone: !item.isDone
                    };
                }
                return item;
            })
        );
    };

    return (
        <div>
            <h1>TODO app</h1>
            <Form addTask={addTask} />
            <List tasks={items} toggle={toggle} />
        </div>
    );
};

export default App;