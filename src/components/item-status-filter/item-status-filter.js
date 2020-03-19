import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {

    onButtonClick = (e) => {
        if (e.target.tagName !== 'BUTTON') return;

        this.props.onButtonClick(e.target.innerHTML.toLowerCase());
    }

    render() {
        let buttonAllStyle = 'btn ';
        if (this.props.filter === 'all') {
            buttonAllStyle += 'btn-info';
        } else {
            buttonAllStyle += 'btn-outline-secondary';
        }

        let buttonActiveStyle = 'btn ';
        if (this.props.filter === 'active') {
            buttonActiveStyle += 'btn-info';
        } else {
            buttonActiveStyle += 'btn-outline-secondary';
        }

        let buttonDoneStyle = 'btn ';
        if (this.props.filter === 'done') {
            buttonDoneStyle += 'btn-info';
        } else {
            buttonDoneStyle += 'btn-outline-secondary';
        }        

        return (
            <div onClick={this.onButtonClick} className='btn-group'>
                <button type="button" className={buttonAllStyle}>All</button>
                <button type="button" className={buttonActiveStyle}>Active</button>
                <button type="button" className={buttonDoneStyle}>Done</button>
            </div>
        );
    }
}
