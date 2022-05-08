import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import policyservice from "../../services/policy.service";


const AddPolicies = () => {

    const[policy_type, setpolicy_type] =useState('');
    const[policy_number, setpolicy_number] = useState('');
    const[policy_name, setpolicy_name] = useState('');
    const[policy_terms, setpolicy_terms] = useState('');
    const[policy_period, setpolicy_period] = useState('');
    const[interest, setinterest] = useState('');
    const[bonus,setbonus]=useState('');
    const[installments,setinstallments]=useState('');
    const[installment_amt,setinstallment_amt]=useState('');
    const[returns,setreturns]=useState('');
    const history = useHistory();
    const {id} = useParams();
    

    const savePolicy = (e) => {
        e.preventDefault();

        const policy = { id, policy_type, policy_number,policy_name,policy_terms,policy_period,interest,bonus,installments,installment_amt,returns};
        if (id) {
            //update
            policyservice.update(policy)
                .then(response => {
                    console.log('policy data updated successfully', response.data);
                    history.push('/admin');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            policyservice.create(policy)
            .then(response => {
                console.log("policy added successfully", response.data);
                history.push("/admin");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }
    useEffect(() => {
        if (id) {
            policyservice.get(id)
                .then(policy => {
                    setpolicy_type(policy.data.policy_type);
                    setpolicy_number(policy.data.policy_number);
                    setpolicy_name(policy.data.policy_name);
                    setpolicy_terms(policy.data.policy_terms);
                    setpolicy_period(policy.data.policy_period);
                    setinterest(policy.data.interest);
                    setbonus(policy.data.bonus);
                    setinstallments(policy.data.installments);
                    setinstallment_amt(policy.data.installment_amt);
                    setreturns(policy.data.returns);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Policy</h3>
            <hr/>
            <form>

            <div className="form-group">
                <select className="form-control col-4"
                        type="submit"
                        id="policy_type"
                        value={policy_type}
                        onChange={(e) => setpolicy_type(e.target.value)}
                        placeholder="select policytype dropdown">
                        <option value="TermInsurance">TermInsurance</option>
                        <option value="HealthInsurance">HealthInsurance</option>
                        <option value="TravleInsurance">TravleInsurance</option>
                        <option value="MotorInsurance">MotorInsurance</option>
                </select>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="policy_number"
                        value={policy_number}
                        onChange={(e) => setpolicy_number(e.target.value)}
                        placeholder="Enter policy_number"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="policy_name"
                        value={policy_name}
                        onChange={(e) => setpolicy_name(e.target.value)}
                        placeholder="Enter policy_name"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="policy_terms"
                        value={policy_terms}
                        onChange={(e) =>setpolicy_terms(e.target.value)}
                        placeholder="Enter policy_terms"
                    />

                </div>

                
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="interest"
                        value={interest}
                        onChange={(e) =>setinterest(e.target.value)}
                        placeholder="Enter interest"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="policy_period"
                        value={policy_period}
                        onChange={(e) =>setpolicy_period(e.target.value)}
                        placeholder="Enter policy_period"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="bonus"
                        value={bonus}
                        onChange={(e) =>setbonus(e.target.value)}
                        placeholder="Enter bonus"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="installments"
                        value={installments}
                        onChange={(e) =>setinstallments(e.target.value)}
                        placeholder="Enter installments"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="installment_amt"
                        value={installment_amt}
                        onChange={(e) =>setinstallment_amt(e.target.value)}
                        placeholder="Enter installment_amt"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="returns"
                        value={returns}
                        onChange={(e) =>setreturns(e.target.value)}
                        placeholder="Enter returns"
                    />

                </div>

                <div >
                    <button onClick={(e) => savePolicy(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/admin">Back to List</Link>
        </div>
    )
}

export default AddPolicies;