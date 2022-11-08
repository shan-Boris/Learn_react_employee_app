import './app-filter.css';

import {Component} from 'react';


class AppFilter extends Component{
        
    
    buttons = [
        {name: 'all', title: 'Все сотрудники'},
        {name: 'increase', title: 'На повышение'},
        {name: 'more1000', title: 'з/п больше 1000$'},
    ]

    
    render() {
        const btn = this.buttons.map(v => {
            let clazz = 'btn btn-outline-light'
            if(this.props.filter === v.name) clazz = 'btn btn-light'
            return (
            <button 
                className={clazz}
                type="button"
                key={v.name}
                onClick={() => this.props.onFiltred(v.name)}>
                {v.title} 
            </button>
            )
        })
    return (
        <div className="btn-group">
            {btn}
        </div>
    )
}
}

export default AppFilter;