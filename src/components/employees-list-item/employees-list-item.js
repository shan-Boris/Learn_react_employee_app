
import './employees-list-item.css';
import {Component} from 'react';


const EmployeesListItem = (props) =>  {

        const {onDelete, name, salary, rise, increase, propToggle} = props
        let classNamesLi = 'list-group-item d-flex justify-content-between'
        if (increase) classNamesLi += ' increase'
        if (rise) classNamesLi += ' like'
        return (
            <li  className={classNamesLi}>
            <span onClick={propToggle} data-name-prop="rise" className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={propToggle}
                            data-name-prop="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }



export default EmployeesListItem;