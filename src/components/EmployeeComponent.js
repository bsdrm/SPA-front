import React, { Component } from 'react'
import EmployeeService from "../services/EmployeeService"

export default class EmployeeComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((reponse) => {
            this.setState({ employees: reponse.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-center mt-5 h3">Employee List</h1>
                <table className="table table-bordered table-hover table-sm">
                    <thead className="table-secondary">
                        <tr>
                            <td>Employee Id</td>
                            <td>Employee Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(e =>
                                <tr key = {e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}