import {useState} from "react";
function Form(){
    const[name, setName] = useState("");

    const handleSubmit=(e)=>{
        console.log("Form is Submitted");
        e.preventDefault();
        setName("");
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name : </label>
                    <input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div><br />
                <button disabled={!name} type="sumbit">Submit</button>
                
            </form>
        </div>
    )

}

export default Form;