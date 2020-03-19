import React from 'react';
import './search-panel.css';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = (props) => {    
    return (
    <div className='search-panel d-flex'>
        <input onChange={props.onSearchChange} className='form-control search-input' placeholder='search todos...' />
        <ItemStatusFilter filter={props.filter} onButtonClick={props.onButtonClick} />
    </div>
    );
};

export default SearchPanel;