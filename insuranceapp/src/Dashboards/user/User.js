import { Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import policyservice from "../../services/policy.service";

const User = () => {

    const [policies, setpolicies] = useState([]);
  
    const init = () => {
      policyservice.getAll()
        .then(response => {
          console.log('Printing policy data', response.data);
          setpolicies(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
    }
  
    useEffect(() => {
      init();
    }, []);
    

    return(
        <div className="container">
            <h3>List of Policies</h3>
            <hr/>
            <div>
            <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Period</th>
                <th>Returns</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              policies.map(policy => (
                <tr key={policy.id}>
                    <td>{policy.policy_type}</td>
                    <td>{policy.policy_name}</td>
                    <td>{policy.policy_period}</td>
                    <td>{policy.policy_returns}</td>
                    <td>
                        <a className="btn btn-info" href={`/applyform`}>Apply</a>
                        <a className="btn btn-info" href={`/policies/view/${policy.id}`}>View</a>
                       
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
          
        </div>
      </div>
  
      );
  }
  export default User