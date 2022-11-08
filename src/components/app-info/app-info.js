import'./app-info.css';

const AppInfo = (props) => {
    const {employee} = props
    const employeeIncrease = employee.filter(item => item.increase)?.length
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employee?.length} </h2>
            <h2>Премию получат: {employeeIncrease}</h2>
        </div>
    )
}

export default AppInfo;