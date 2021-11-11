import React from 'react';

export const Login = () => {

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

                        <form className="form-grop">


                            <div className="col-lg-12">
                                <label>Username</label>
                                <input type="text" />
                            </div>

                            <div className="col-lg-6">
                                <label>Password</label>
                                <input type="password" />
                            </div>

                          


                        </form>

                    </div>


                </div>
            </section>

        </>
    )

}