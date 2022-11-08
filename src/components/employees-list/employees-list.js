import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({employees, onDelete, propToggle}) => {
    const items = employees.map(({key, ...v}) => {
        return (
            <EmployeesListItem key={key} 
            propToggle={(e) => {
                propToggle(key, e.currentTarget.getAttribute("data-name-prop"))}}
            onDelete={() => onDelete(key)} 
            {...v}  />
        )
    });
    return (
        <ul className="app-list list-group">
            {items}

        </ul>
    )
}

export default EmployeesList