import { useState } from "react";
function FeedBack(){
    const[range, setRange] = useState(10);
    const[comment, setComment] = useState("");

    const handleSubmit= (e)=>{
        if(Number(range) <= 5 && comment.length <= 10 ){
            alert("please Explain the issue, So we will improve...");
            return;            
        }
        e.preventDefault();
        console.log("Form DOne!!!")
        setComment("");
        setRange(10);

    }
    
    return(
        <div className="App">
            <h1>FeedBack Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Rate us: {range}</label>
                    <input
                     type="range" min="1" max= "10"
                     value={range}
                     onChange={(e)=> setRange(e.target.value)}
                    />
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea
                      placeholder="Enter your experience" 
                      value={comment}
                      onChange={(e)=>setComment(e.target.value)}                      
                    />
                </div>
                <button disabled={!comment} type="sumbit">Submit</button>
            </form>
        </div>
    )
}
export default FeedBack;