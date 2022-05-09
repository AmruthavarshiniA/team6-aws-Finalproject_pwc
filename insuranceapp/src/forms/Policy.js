/* import { useEffect, useState } from 'react';
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
export default Policy */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import policyservice from '../services/policy.service';
import './policy.css'

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
            <h1 className="h1">Policy Description</h1>
            <br></br>
          </div>
          <div className="container-Fluid" >
          <h2>{policies.policy_type} - {policies.policy_name}</h2>
          </div>
            {
              <p className="p1">
                <br></br>
                

            <div class="row">
               <div class="col-md-6" id="div1">
               <b>Policy_number</b> :<em>{policies.policy_number}</em>
                <br></br>
                <b>Policy terms and condtion</b> :<em>{policies.policy_terms}</em>
                <br></br>
               <b>Policy periods</b>:<em>{policies.policy_period}</em>
                <br></br>
                  <b>Policy bonus</b>:<em>{policies.bonus}</em>
                  <br></br>
                  
                </div>
                <div class="col-md-6" id="div1">
                <b>Policy installments</b>:<em>{policies.installments}</em>
                  <br></br>
                <b>Policy intrest</b>:<em>{policies.intrest}</em>
                <br></br>
                <b>Policy installment amount</b>:<em>{policies.installment_amt}</em>
                <br></br>
                <b>Policy returns</b>:{policies.returns}
                <br></br>
                </div>
              </div> 
              <br></br> 
                
              </p>
              
              
            }
            <marquee className="m1" scrollamount="8">
                    <h3> Thank   You   Visit   Again</h3>
                </marquee>

                {/* <a className="btn btn-info" href="/user">Back</a> */}
        </div>
      )
}
export default Policy