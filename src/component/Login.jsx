import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseDb from '../Fire';
import { Register } from './Register';

export const Login = (token) => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setPassword] = useState('')

    const [userData, setUserData] = useState({});

    useEffect(() => {
        FirebaseDb.child('users').on('value', snapshot => {
            if (snapshot.val() != null) {
                setUserData({
                    ...snapshot.val()
                })
            }
        })

    }, [])



    const history = useHistory()



    const submitHandler = (e) => {
        e.preventDefault();


        const getFilteredLoginEmail = Object.values(userData).filter(user => user.email === userEmail && user.password === userPassword);

        if (getFilteredLoginEmail != "") {
            localStorage.setItem('email', userEmail);
            console.log(userEmail)
            history.push('/')



        } else {
            console.log("Login Incorrect")

        }
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



                    <form className="form-grop" onSubmit={submitHandler} id="LoginForm">
                        <div className="row">

                            <div className="col-lg-6">
                                <label>Email</label>
                                <input
                                className="w-100"
                                    type="email"
                                    name="email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required />
                            </div>

                            <div className="col-lg-6">
                                <label>Password</label>
                                <input
                                className="w-100"
                                    type="password"
                                    name="password"
                                    value={userPassword}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>

                            <div className="col-6">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>


                        </div>

                    </form>

                </div>
            </section>


            <Register />

        </>


    )

}