import axios from 'axios'
const EMPLOYEE_API_BASE_URL = "https://crim-e.herokuapp.com/api/crime/incident";
class ServiceReport {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}
export default new ServiceReport()