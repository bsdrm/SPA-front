import axios from 'axios'

const PROJECTS_REST_API_URL = "http://localhost:8080/api/projects";

class ProjectService {
    getProjects() {
        return axios.get(PROJECTS_REST_API_URL);
    }
}

export default new ProjectService();