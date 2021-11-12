import React, { useState } from 'react';

export const Login = (token) => {

const [ userEmail, setUserEmail ] = useState('')
const [ password, setPassword ] = useState('')


const submitHandler = (e) => {
    e.preventDefault();

    console.log(userEmail);
    console.log(password);

    

}

    return (
        <>

            <section className="pd-log-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Login</h2>
                        </div>
                    </div>

                    <div className="row">

                        <form className="form-grop" onSubmit={submitHandler} id="LoginForm">


                            <div className="col-lg-6">
                                <label>Email</label>
                                <input 
                                type="email"
                                name="email"
                                value={userEmail}
                                onChange={(e)=>setUserEmail(e.target.value)}                                
                                required/>
                            </div>

                            <div className="col-lg-6">
                                <label>Password</label>
                                <input 
                                type="password" 
                                name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}                                
                                required/>
                            </div>

                            <div className="col-6">
                                <button type="submit">Submit</button>
                            </div>




                        </form>

                    </div>


                </div>
            </section>

        </>
    )

}