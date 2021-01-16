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
                <h1 className = "text-centter">Project List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Project Id</td>
                            <td>Project Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.projects.map(p =>
                                <tr key = {p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}