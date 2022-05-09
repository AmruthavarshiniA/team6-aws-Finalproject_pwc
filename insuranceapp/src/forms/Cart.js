import bondService from "../services/bond.service";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import policyService from "../services/policy.service";

function Cart(){
    const amount=0;
    const [paid, setPaid] =useState('')
    const [bonds, setbonds] = useState([]);
    const [policies, setpolicies] = useState([]);

    const {uid}=useParams();
    const init = () => {
        if(uid){
        bondService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setbonds(response.data);
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
        <div>
          <div className="container" padding-right="15px" padding-left="15px" width="100%" >
             <nav class="navbar navbar-expand-lg  navbar-dark bg-dark" width="50%">
                 <a class="navbar-brand" href="#">Navbar</a>
                 <a class="navbar-brand" href="/feedback">Logout</a>
              </nav>
            </div>

            <br></br>

            <div className="container">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                      
                      <th>discription</th>
                      <th>installment</th>
                      <th>pay</th>
                  </tr>
                </thead>
                <tbody>

                  {bonds.filter(bond => bond.id == uid).map(filteredbond => {
                      if(filteredbond.policy_id){
                          policyService.get(filteredbond.policy_id)
                          .then(response => {
                              console.log('Printing policy data', response.data);
                              setpolicies(response.data);
                            })
                            .catch(error => {
                              console.log('Something went wrong', error);
                            }) 
                    return(
                              <tr key={filteredbond.addharNo}>
                                <td><p>policyid:{filteredbond.policy_id}
                                <br></br>
                                policy type:{policies.policy_type}
                                <br></br>
                                policy name:{policies.policy_name}
                                <br></br>
                                policy holdername:{filteredbond.username}
                                <br></br>
                                policy returns:{policies.returns}
                                <br></br>
                                </p></td>
                                <td>{policies.installment_amt}</td>
                                <td>
                                <button id="buttonName" >pay</button>
                                </td>
                                </tr>
                            )
                        }

                    })} 
                </tbody>
              </table> 
            </div>
                            </div>
                        )

}
export default Cart