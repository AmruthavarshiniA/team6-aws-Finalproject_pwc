import bondService from "../../../services/bond.service";
import { useEffect, useState } from 'react';
import policyService from "../../../services/policy.service";

const Bondsrepo= () =>{

    const [bonds, setbonds] = useState([]);
    const [policies, setpolicies] =useState([]);

    const init = () => {
        bondService.getAll()
          .then(response => {
            console.log('Printing user data', response.data);
            setbonds(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }

      useEffect(() => {
        init();
      }, []);

    return(
        <div>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>user id</th>
                        <th>bond holder</th>
                        <th>alcoholic</th>
                        <th>tobacco</th>
                        <th>policy id</th>
                        <th>policy type</th>
                        <th>policy name</th>
                        <th>installment amount</th>
                    </tr>
                </thead>

                <tbody>
                  {bonds.map(bond=>{
                    if(bond.policy_id){
                      policyService.get(bond.policy_id)
                      .then(response => {
                        console.log('Printing policy data', response.data);
                        setpolicies(response.data);
                      })
                      .catch(error => {
                        console.log('Something went wrong', error);
                      }) 
                    return(
                      <tr>
                        <td>{bond.id}</td>
                        <td>{bond.username}</td>
                        <td>{bond.alcoholic}</td>
                        <td>{bond.tobbaco}</td>
                        <td>{policies.id}</td>
                        <td>{policies.policy_name}</td>
                        <td>{policies.policy_type}</td>
                        <td>{policies.installment_amt}</td>
                      </tr>
                    )
                    }
                  }
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Bondsrepo