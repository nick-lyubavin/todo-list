import React from 'react';
import './app-header.css';

const AppHeader = ({done, moreToDo}) => {
    return (
        <div className="app-header d-flex">
            <h1>My Todo List</h1>
            <h2>{done} done, {moreToDo} more to do</h2>
        </div>

    );
};

export default AppHeader;