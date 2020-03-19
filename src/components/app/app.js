import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import AddItem from '../add-item';

import './app.css';

export default class App extends React.Component {
    constructor() {
        super();

        this.maxId = 100;

        this.state = {
            todoData: [
                this.createItem("Drink Coffee"),
                this.createItem("Learn React"),
                this.createItem("Create awesome app"),
            ],

            filter: 'all',
            search: '',
        };
    }

    createItem(label) {
        return {
            important: false,
            id: this.maxId++,
            label: label,
            done: false,
        }
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex((el) => { return el.id === id });

            const before = state.todoData.slice(0, idx);
            const after = state.todoData.slice(idx + 1);

            return {
                todoData: [...before, ...after],
            };
        });
    };

    addItem = (text) => {
        this.setState((state) => {
            const newArr = [...state.todoData, this.createItem(text)];

            return {
                todoData: newArr,
            }
        });
    }

    changeProperty = (id, propName) => {
        const { todoData } = this.state;

        const idx = todoData.findIndex(item => item.id === id);

        const oldItem = todoData[idx];

        const newItem = { ...oldItem, [propName]: !oldItem[propName] }

        return [
            ...todoData.slice(0, idx),
            newItem,
            ...todoData.slice(idx + 1),
        ]
    }


    onToggleImportant = (id) => {
        this.setState(state => {
            const newArr = this.changeProperty(id, 'important');

            return {
                todoData: newArr,
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(state => {
            const newArr = this.changeProperty(id, 'done');

            return {
                todoData: newArr,
            }
        });
    }

    onButtonClick = (btnName) => {
        let filter = 'all';

        if (btnName === 'active') {
            filter = 'active';
        } else if (btnName === 'done') {
            filter = 'done';
        }

        this.setState({
            filter: filter,
        })

    }

    onSearchChange = (e) => {        
        this.setState({search: e.target.value});
    }

    render() {

        const done = this.state.todoData.filter(el => el.done).length;
        const moreToDo = this.state.todoData.length - done;

        return (
            <div className='wrapper'>
                <AppHeader done={done} moreToDo={moreToDo} />
                <SearchPanel
                    filter={this.state.filter}
                    onButtonClick={this.onButtonClick}
                    onSearchChange={this.onSearchChange}
                />
                <TodoList
                    todos={this.state.todoData}
                    filter={this.state.filter}
                    search={this.state.search}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem
                    onAddItem={this.addItem}
                />
            </div>
        );
    }
};


