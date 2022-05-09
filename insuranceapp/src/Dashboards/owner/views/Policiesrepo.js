import { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import policyService from '../../../services/policy.service';



const Policies = () => {
  
    const [policies, setpolicies] = useState([]);
    const {id}=useParams();
      const init = () => {
        policyService.getAll()
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
          <div className="container-Fluid" >
            <h2>policies</h2>
          </div>
          <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                  <th>sl.no</th>
                  <th><h4>policy</h4></th>
                  <th><h4>adminid</h4></th>
                  <th><h4>discription</h4></th>
                  </tr>
                </thead>
            <tbody>
                {policies.map(policy => (
                    <tr key={policy.id}>
                        <td>{policy.id}</td>
                        <td>
                        
                        <h6>{policy.policy_type}</h6>
                        <h6>{policy.policy_name}</h6>
                        </td>

                        <td>
                          <p>admin id :{policy.admin_id}</p>
                            <br></br>
                        </td>
                        <td>
                        <p>
                            policy_number :{policy.policy_number}
                            <br></br>
                            <Link className="btn btn-info" to={`/policies/view/${policy.id}`}>View</Link>
                        </p>
                        </td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
      )
}
export default Policies