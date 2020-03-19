import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {
    state = {
        label: '',
    }  

    onLabelChange = (event) => {
        this.setState(
            {
             label: event.target.value,  
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();        
        this.props.onAddItem(this.state.label);
        
        this.setState({
            label: '',
        });
    }

    render() {
        return (            
            <form 
            className='add-item d-flex'
            onSubmit = {this.onSubmit}>                          
                <input
                    className='form-control add-item__input'
                    id='add-input'
                    onChange={this.onLabelChange}
                    placeholder='new todo' 
                    value={this.state.label}
                    />
                <button
                    className='add-item__button btn btn-sm btn-outline-primary float-right'                    
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>

            </form>
        );
    }

}
