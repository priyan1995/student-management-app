import React, { useState } from 'react';
import FirebaseDb from '../Fire';

export const Register = () => {



    const [formEmail, setEmail] = useState("");
    const [formPassword, setPassword] = useState("");

 

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const initialData = ({
        email: formEmail,
        password: formPassword
    })





    const userSubmit = (e) => {
        e.preventDefault();

        FirebaseDb.child('users').push(
            initialData,
            err => {
                if(err){
                    console.log(err)
                }
            }
        )

        




    }





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
                                <label className="d-block">Email</label>
                                <input
                                    className="w-100"
                                    type="text"
                                    name="email"
                                    value={formEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p>{emailError}</p>
                            </div>

                            <div className="col-lg-6 text-left">
                                <label className="d-block">Password</label>
                                <input
                                    className="w-100"
                                    type="password"
                                    name="password"
                                    value={formPassword}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <p>{passwordError}</p>
                            </div>

                            {/* <div className="col-lg-6 text-left">
                                <label className="d-block">Match Password</label>
                                <input
                                    className="w-100"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div> */}

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
