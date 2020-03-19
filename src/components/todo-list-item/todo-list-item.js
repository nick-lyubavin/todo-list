import React from 'react';
import './todo-list-item.css';
import { render } from '@testing-library/react';

export default class TodoListItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        }
    }
    

    render() {
        const { label, done, important } = this.props;    

        let className = 'todo-list-item';

        if (done) {
            className += ' done';
        }

        if (important) {
            className += ' important';
        }

        return (
            <div className={className}>
                <span
                    className='todo-list-item-label'
                    onClick={this.props.onToggleDone}
                >{label}</span>

                <button
                    className='button todo-delete-button btn btn-sm btn-outline-danger float-right'
                    onClick={this.props.onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>

                <button
                    className='button todo-important-button  btn btn-sm btn btn-warning float-right'
                    onClick={this.props.onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        );
    }

}
