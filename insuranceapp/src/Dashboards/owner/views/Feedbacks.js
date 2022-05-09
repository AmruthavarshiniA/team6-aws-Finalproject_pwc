import { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import feedbackService from '../../../services/feedback.service';

const Feedbacks =()=>{

    const [feedbacks, setfeedbacks]= useState([]);

    const init = () => {
      feedbackService.getAll()
        .then(response => {
          console.log('Printing policy data', response.data);
          setfeedbacks(response.data);
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
                <th><h4>name</h4></th>
                <th><h4>feedback</h4></th>
                </tr>
              </thead>
          <tbody>
            {feedbacks.map(feedback=>
                  <tr key={feedback.id}>
                    <td>{feedback.id}</td>
                    <td>{feedback.username}</td> 
                    <td>{feedback.feedback}</td>   
                  </tr>
                  )}
              </tbody>
          </table>
      </div>
      )
}
export default Feedbacks