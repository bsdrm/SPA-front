import React, { Component } from 'react'
import ProjectService from "../services/ProjectService"

export default class ProjectComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        ProjectService.getProjects().then((reponse) => {
            this.setState({ projects: reponse.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-center mt-5 h3">Project List</h1>
                <table className="table table-bordered table-hover table-sm">
                    <thead  className="table-secondary">
                        <tr>
                            <td>Project Id</td>
                            <td>Project Name</td>
                            <td>Start</td>
                            <td>End</td>
                            <td>Employees</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.projects.map(p =>
                                <tr key = {p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.endDate}</td>
                                    <td>
                                    {p.employees.map(employee => 
                                         <span key={employee.id}>{employee.name}<br /></span>
                                    )}
                                    </td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}