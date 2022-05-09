import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import bondService from '../services/bond.service';
import policyService from '../services/policy.service';
import userservice from "../services/user.service";

const Apply = (props) => {

    const [user, setUser]= useState([]);
    const [policies, setpolicies] = useState([]);
    const {uid, pid}=useParams();

      const init = () => {
        if(uid){
        userservice.get(uid)
          .then(response => {
            console.log('Printing user data', response.data);
            setUser(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
      if(pid){
        policyService.get(pid)
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


    const [bonds, setbonds] = useState([]);
    const [id , setid] = useState('');
    const [username, setUsername] = useState('');
    const [policy_id, setPolicy_id] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [nominee, setNominee] = useState('');
    const [addharNo, setAddharNo] = useState('');
    const [photo, setPhoto] = useState('');
    const [alcoholic, setAlcoholic] = useState('');
    const [tobbaco, setTobbaco] = useState('');
    const [health_history, setHealth_history] = useState('');
    const history = useHistory();

    const applyBond = (e) => {
      e.preventDefault();
      
      const bond = {id,username,policy_id,age,gender,nominee,addharNo,photo,health_history};
      bondService.create(bond)
          .then(response => {
              console.log("user added successfully", response.data);
              history.push(`/cart/${user.id}`);
          })
          .catch(error => {
              console.log('something went wroing', error);
          })
  }

    return(
        <div className="container">
          <h2>Application</h2>
            <form className="form-group">

            <div className="form-group">
                <input 
                  type="number" 
                  className="form-control col-4"
                  id="id"
                  value={id}
                  onClick={(e) => setid(user.id)}
                  placeholder="click to set policy id"
                    />
            </div>

            <div className="form-group">
                <input 
                  type="text" 
                  className="form-control col-4"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                    />
            </div>

            <div className="form-group">
                
                <input 
                  type="int" 
                  className="form-control col-4"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                    />
            </div>

            <div className="form-group">
                <input 
                  type="number" 
                  className="form-control col-4"
                  id="policy_id"
                  value={policy_id}
                  onClick={(e) => setPolicy_id(policies.id)}
                  placeholder="click to set policy id"
                    />
            </div>

            <div className="form-group">
                
                <input 
                  type="text" 
                  className="form-control col-4"
                  id="nominee"
                  value={nominee}
                  onChange={(e) => setNominee(e.target.value)}
                  placeholder="Enter nomine"
                    />
            </div>

            <div className="form-group">
          <select className="form-control col-4"
            type="submit"
              id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="select user type from dropdown">
                  <option >select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
                
                <input 
                  type="addhar-number" 
                  className="form-control col-4"
                  id="addharNo"
                  value={addharNo}
                  onChange={(e) => setAddharNo(e.target.value)}
                  placeholder="Enter addharNo"
                    />
            </div>

            <div className="form-group">
                <input 
                  type="text"
                  className="form-control col-4"
                  id="health_history"
                  value={health_history}
                  onChange={(e) => setHealth_history(e.target.value)}
                  placeholder="health_history details"
                    />
            </div>

            <div>
                    <input 
                            type="url" 
                            className="form-control col-4"
                            id="photo"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="type url"
                        />
                </div>
                <div>
        <button onClick={(e) => applyBond(e)} className="btn btn-primary">Apply</button>
        </div>
        </form>
        </div>
    )

}
export default Apply