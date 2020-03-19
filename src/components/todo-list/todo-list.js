import React from 'react';
import TodoListItem from '../todo-list-item';

import "./todo-list.css";

const TodoList = ({ todos, filter, search, onDeleted, onToggleDone, onToggleImportant }) => {

    const filteredTodos = todos.filter(item => {
        if (filter !== 'all') {
            if (filter === 'done' && !item.done) { return false }
            else if (filter === 'active' && item.done) { return false }
        }

        if (search && !item.label.toLowerCase().includes(search)) {
            return false;
        }

        return true;
    });

    const elements = filteredTodos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className='list-group-item'>
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        );

    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default TodoList;