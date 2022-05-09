import { Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import policyservice from "../../services/policy.service";
import userservice from "../../services/user.service";

const User = () => {
  const [user, setUser]= useState([]);
  const [policies, setpolicies] = useState([]);
    const {id}=useParams();
    const init = () => {
      policyservice.getAll()
        .then(response => {
          console.log('Printing policy data', response.data);
          setpolicies(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
      if(id){
        userservice.get(id)
        .then(response=>{
          console.log('printing user',response.data);
          setUser(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 
      }
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
                    <td>{policy.returns}</td>
                    <td>
                        {/* <a className="btn btn-info" href={`/applyform`}>Apply</a> */}
                        <Link className="btn btn-info" to={`/policies/apply/${user.id}/${policy.id}`}>Apply</Link>
                        <Link className="btn btn-info" to={`/policies/view/${policy.id}`}>View</Link>
                        {/* <a className="btn btn-info" href={`/policy/${policy.id}`}>View</a> */}
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table> 
        </div>

        <div>
        <Link className="btn btn-info" to={`/cart/${user.id}`}>ViewCart</Link>
        </div>
      </div>
  
      );
  }
  export default User