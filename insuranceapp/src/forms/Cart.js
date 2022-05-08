import bondService from "../services/bond.service";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cart(){

    const [user, setUser]= useState([]);
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
            <div className="container">
                <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>gender</th>
                </tr>
                </thead>
                <tbody>
                {/* {
                bonds.map(bond => {
                    if(bond.id === uid){
                    return(<tr key={bond.addharNo}>
                        <td>{bond.gender}</td>
                    </tr>)
                    }
                })
                } */}

{bonds.filter(bond => bond.id == uid).map(filteredbond => (
        <tr>{filteredbond.gender}</tr>
    ))}3    
                </tbody>
            </table> 
            </div>
        </div>
    )

}
export default Cart