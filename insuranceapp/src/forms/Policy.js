import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import policyservice from '../services/policy.service';


const Policy = () => {
  
    const [policies, setpolicies] = useState([]);
    const {id}=useParams();
      const init = () => {
        if(id){
        policyservice.get(id)
          .then(response => {
            console.log('Printing policy data', response.data);
            setpolicies(response.data);
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
          <div className="container-Fluid" >
            <h2>policy</h2>
          </div>
          <div className="container-Fluid" >
          <h3>{policies.policy_type}</h3>
            <h3>{policies.policy_name}</h3>
          </div>
            {
              <p>
                policy_number :{policies.policy_number}
                <br></br>
                policy terms and condtion :{policies.policy_terms}
                <br></br>
                policy periods:{policies.policy_period}
                <br></br>
                policy intrest:{policies.intrest}
                <br></br>
                policy bonus:{policies.bonus}
                <br></br>
                policy installments:{policies.installments}
                <br></br>
                policy installment amount:{policies.installment_amt}
                <br></br>
                policy returns:{policies.returns}
                <br></br>
              </p>
              
            }
        </div>
      )
}
export default Policy