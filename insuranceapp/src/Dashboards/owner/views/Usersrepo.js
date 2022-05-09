import { useEffect, useState } from 'react';
import userService from "../../../services/user.service";
import { Link} from "react-router-dom";

const Userrepo = () =>{

    const [user, setUser]= useState([]);

    const init = () => {
      userService.getAll()
        .then(response => {
          console.log('Printing policy data', response.data);
          setUser(response.data);
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
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>Admin id</th>
                    <th>Admin name</th>
                    <th>policies framed</th>
                </tr>
                </thead>

                <tbody>
                {user.filter(user => user.type == "Admin").map(auser => {
                    if(auser.id){
                      return(
                        <tr>
                    
                          <td>{auser.id}</td>
                          <td>{auser.username}</td>
                          <td><Link className="btn btn-info" to={`/allpolicies`}>View policies</Link></td>
                          
                        </tr>
                      )
                      }
                  })
                }
                </tbody>
            </table>
        </div>
    )
}
export default Userrepo