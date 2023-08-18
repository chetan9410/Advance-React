import { useState } from "react";

const PasswordError = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    }

export default function FormValidate(){
    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState({ value: "", isTouched: false});
    const[role, setRole] = useState("role");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Your Account has been created...!!")
        clearForm();
    }
    const clearForm= () => {
        setEmail("");
        setFname("");
        setLname("");
        setRole("role");
        setPassword({value: "", isTouched: false})
    }
    const formVerified =() =>{
        return(
            fname && validateEmail(email) && password.value.length >=8 && role!== "role"
        )
    }

    

    return(
        <div className="Apps">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label>First Name: <sup>*</sup></label>
                        <input type="text" placeholder="first name" value={fname} 
                            onChange={(e)=> setFname(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label>Last Name: </label>
                        <input type="text" placeholder="last name" value={lname}
                            onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label>Email : <sup>*</sup></label>
                        <input type="text" placeholder="email" value={email} 
                            onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="Field">
                        <label>Password: <sup>*</sup></label>
                        <input type="password" placeholder="password" value={password.value}
                            onChange={(e)=> setPassword({ ...password, value: e.target.value})}
                            onBlur={()=>{ setPassword( {...password, isTouched: true}) }} 
                        />
                        {password.isTouched && password.value.length < 8 ?(
                        <PasswordError />
                    ) : null
                    }
                            
                    </div>
                    

                    <div className="Field">
                        <label>Role: <sup>*</sup></label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option>Role</option>
                            <option>Individual</option>
                            <option>Bussiness</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!formVerified()}>Create Account</button>

                </fieldset>
            </form>
        </div>
    )
}