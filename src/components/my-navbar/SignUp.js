import React from 'react'

function SignUp() {
    return (
        <div><br/><br/>
            <h1><center>Sign Up to Our System</center></h1>
            <label for="name">First-Name</label>
            <input id="firstname" type="text" placeholder="Enter your first-Name" required/>&nbsp;&nbsp; 
            <label for="name">Last-Name</label>
            <input id="firstname" type="text" placeholder="Enter your first-Name" required/>
            <br/><br></br>
            <label for="dob">Date Of Birth</label>
            <input id="dob" type="date" placeholder="Choose your date of birth" require/>
            <br/> 

        </div>
    )
}

export default SignUp
