import { Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import policyservice from "../../services/policyservice";

const Admin = () => {

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
    
    const handleDelete = (id) => {
      console.log('Printing id', id);
      if(window.confirm("delete data?"))
      policyservice.remove(id)
        .then(response => {
          console.log('Policy deleted successfully', response.data);
          init();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    }

    return(
        <div className="container">
            <h3>List of Policies</h3>
            <hr/>
            <div>
            <Link to="/addpolicy" className="btn btn-primary mb-2">Add Policy</Link>
            <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              policies.map(policy => (
                <tr key={policy.id}>
                    <td>{policy.policy_type}</td>
                    <td>{policy.policy_name}</td>
                    <td>
                        <Link className="btn btn-info" to={`/policies/edit/${policy.id}`}>Update</Link>
                        <button className="btn btn-danger ml-2" onClick={() => {
                            handleDelete(policy.id)}}>Delete
                        </button>
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
  export default Admin