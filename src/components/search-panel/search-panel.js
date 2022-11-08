import './search-panel.css';

import { Component } from 'react';

class SearchPanel extends Component{
    constructor(props) {
        super(props)
        this.state = {
            searchStr: ''
        }
    }

    changeSearhStr = (e) => {
        this.setState({
            searchStr: e.target.value
        })
        this.props.searchEmp(e.target.value)
    }
    render() {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника" 
            onChange={this.changeSearhStr}
            value={this.state.searchStr}
            />

    )
}
}
export default SearchPanel;