import React, { useEffect, useState } from 'react';
import FirebaseDb from '../Fire';

export const Register = () => {



    const [formEmail, setEmail] = useState("");
    const [formPassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const [emailError, setEmailError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [isvalid, setIsValid] = useState(false);

    const registerForm = document.getElementById('regForm');

    const resetForm = () => {
        registerForm.reset();
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const initialData = ({
        email: formEmail,
        password: formPassword
    })


    useEffect(() => {
        if (formEmail !== "") {
            setEmailError(true)
        } else {
            setEmailError(false)
        }

    }, [formEmail])


    useEffect(() => {
        if (confirmPassword === formPassword) {
            setConfirmPasswordError(true)
        } else {
            setConfirmPasswordError(false)
        }
    }, [confirmPassword])


    useEffect(() => {
        if (confirmPasswordError && emailError) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [confirmPasswordError], [emailError])



    const userSubmit = (e) => {
        e.preventDefault();
        resetForm();

        if (confirmPasswordError) {

            FirebaseDb.child('users').push(
                initialData,
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )

        }
    }




    const [ emailList, setEmailList ] = useState([]);
    const [ foundEmail, setFoundEmail ] = useState(false);
 
    useEffect( ()=> {
        FirebaseDb.child('users').on('value', snapshot => {
            if(snapshot.val() != null ){
                setEmailList({
                    ...snapshot.val()
                })
            }
        } )
    },[formEmail])

    //console.log(emailList)


    
    
   
    useEffect(() => {

        const getFilteredEmail = Object.values(emailList).filter(user => user.email === formEmail);

        if (getFilteredEmail != "") {
            setFoundEmail(true)
        } else {
            setFoundEmail(false)
        }

    }, [formEmail])

   




    useEffect(() => {
        if (confirmPasswordError && emailError ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [confirmPassword])











    return (
        <>





            <section className="pd-log-sec">
                <div className="container">

                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Register</h2>
                        </div>
                    </div>


                    <form className="form-grop" onSubmit={userSubmit} id="regForm">

                        <div className="row">
                            <div className="col-lg-12 text-left">
                                <label className="d-block">Email</label>
                                <input
                                    className="w-100"
                                    type="email"
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

                            </div>

                            <div className="col-lg-6 text-left">
                                <label className="d-block">Match Password</label>
                                <input
                                    className="w-100"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordError ? (
                                    <>
                                    </>
                                ) : (
                                    <>
                                        <p>Password Missmatch</p>
                                    </>
                                )}
                            </div>


                            <div className="col-6 text-left">
                                {isvalid ? (
                                    <>
                                        <button className="btn btn-primary" type="submit" >Submit</button>

                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-primary" disabled>Submit</button>
                                    </>
                                )}
                            </div>
                        </div>

                    </form>

                </div>
            </section>
        </>
    )
}
