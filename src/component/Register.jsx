import React, { useState } from 'react';

export const Register = () => {

    const [userName, setUSerName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [hasAccount, setHasAccount] = useState(false);

    const userSubmit =(e) => {
        e.preventDefault();
           
    }


    //console.log(confirmPassword);

    return (
        <>





            <section className="pd-log-sec">
                <div className="container">

                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Register</h2>
                        </div>
                    </div>


                    <form className="form-grop" onSubmit={userSubmit}>

                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <label className="d-block">Username</label>
                                <input 
                                className="w-100" 
                                type="text"
                                value={userName}
                                onChange={(e)=>setUSerName(e.target.value)}
                                 />
                            </div>

                            <div className="col-lg-6 text-left">
                                <label className="d-block">Password</label>
                                <input 
                                className="w-100" 
                                type="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}                                
                                />
                            </div>

                            <div className="col-lg-6 text-left">
                                <label className="d-block">Match Password</label>
                                <input 
                                className="w-100" 
                                type="password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <div className="col-6 text-left">
                                <button 
                                className="btn btn-primary"
                                type="submit"
                                >Submit</button>
                            </div>
                        </div>

                    </form>



                </div>
            </section>
        </>
    )
}
