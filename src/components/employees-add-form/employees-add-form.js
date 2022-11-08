import './employees-add-form.css'
import { Component } from 'react';


class EmployeesAddForm extends Component{
    constructor(props) {
        super (props);
        this.state = {
            name: '',
            salary: '',
            valid: true
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(this.state.name.length >= 3 && this.state.salary >= 1) {
            this.setState({
                valid: true
            })}

    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.name.length < 3 || this.state.salary < 1) {
            this.setState({
                valid: false
            })
            return
        }
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary, valid} = this.state
        let classNameInput = "form-control new-post-label"
        if(!valid) classNameInput += " inpError"
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className= {classNameInput}
                    placeholder="Как его зовут?"
                    name="name"
                    value={name}
                    onChange={this.onChangeValue}
                     />
                <input type="number"
                    className= {classNameInput}
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onChangeValue}
                     />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
    }
}

export default EmployeesAddForm;




// import { Component } from 'react';

// import './employees-add-form.css';

// class EmployeesAddForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             salary: ''
//         }
//     }

//     onValueChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     render() {
//         const {name, salary} = this.state;

//         return (
//             <div className="app-add-form">
//                 <h3>Добавьте нового сотрудника</h3>
//                 <form
//                     className="add-form d-flex">
//                     <input type="text"
//                         className="form-control new-post-label"
//                         placeholder="Как его зовут?"
//                         name="name"
//                         value={name} 
//                         onChange={this.onValueChange}/>
//                     <input type="number"
//                         className="form-control new-post-label"
//                         placeholder="З/П в $?"
//                         name="salary"
//                         value={salary} 
//                         onChange={this.onValueChange}/>
    
//                     <button type="submit"
//                             className="btn btn-outline-light">Добавить</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default EmployeesAddForm;