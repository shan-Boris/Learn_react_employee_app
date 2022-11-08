import { Component } from 'react';


import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee : [
                {
                name: 'jonn',
                salary: 55445,
                increase: false,
                rise: false,
                key: 1
                },
                {
                name: 'alex',
                salary: 5545,
                increase: false,
                rise: false,
                key: 2
                },
                {
                name: 'tim',
                salary: 445,
                increase: false,
                rise: false,
                key: 3
                },
        
            ],
            searchStr: '',
            filter: 'all'

        }
        this.maxKey = this.state.employee.length 
    }

    deleteItem = (id) => {
        this.setState(({employee}) => ({
            employee: employee.filter(v => v.key !== id)
        }))
    }

    addItem = (name, salary, increase, rise) => {
        this.maxKey++
        this.setState(({employee}) => ({
            employee: employee.concat({name: name, 
                                        salary: salary, 
                                        key: this.maxKey,
                                        increase: increase,
                                        rise: rise})
        }))
    }

    propToggle = (id, prop) => {
        this.setState(({employee}) => ({
            employee: employee.map(item => {
                if(item.key === id) return {...item, [prop]: !item[prop]};
                return item;
            }) 
        }))
    }

    updSearch = (str) => {
        this.setState({
            searchStr: str
        })
    }

    onFiltred = (btn) => {
        this.setState({
            filter: btn
        })
    }

    searchEmp = (arr) => {
        const {searchStr} = this.state
        if(searchStr !== ''){
            return arr.filter(item => item.name.indexOf(searchStr) > -1)
        }
        return arr;
    }
    
    filtrateEmp = (arr) => {
        const {filter} = this.state
        if(filter === 'increase') return arr.filter(item => item.increase)
        if(filter === 'more1000') return arr.filter(item => item.salary > 1000)
        return arr;
    }


    render() {
        const visibleData = this.filtrateEmp(this.searchEmp(this.state.employee))
    return(
        <div className="app">
            <AppInfo employee={this.state.employee}/>
            <div className="search-panel">
                <SearchPanel searchEmp={this.updSearch}/>
                <AppFilter onFiltred={this.onFiltred} filter={this.state.filter}/>
            </div>
            <EmployeesList employees={visibleData} 
                            onDelete={this.deleteItem} 
                            propToggle={this.propToggle} />
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    );}
}

export default App;