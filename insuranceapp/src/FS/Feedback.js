
import { useEffect, useState} from "react"
import { useParams, useHistory } from "react-router-dom";
import feedbackService from "../services/feedback.service";

const Feedback =()=>{

    const [feedbacks, setfeedbacks]= useState([]);
    const [feedback , setFeedback]=useState('');
    const [username, setUsername]=useState('');
    const history = useHistory();
    const {id}=useParams;


    useEffect(() => {
        if (id) {
            feedbackService.get(id)
                .then(feedback => {
                    setUsername(feedback.data.username)
                    setFeedback(feedback.data.feedback)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, []) 

    const getfeedback = (e) => {
        e.preventDefault();
        
        const feed = {id,feedback,username};
        feedbackService.create(feed)
            .then(response => {
                console.log("user added successfully", response.data);
                history.push(`/home`);
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
    }

    return(
        <div className="container">
           <form className="form-group"> 

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
                  type="text" 
                  className="form-control col-4"
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter feedback"
                    />
            </div>

            <div>
                <p>on feedback u will be logged out</p>
            </div>
            <button onClick={(e) => getfeedback(e)} className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}
export default Feedback