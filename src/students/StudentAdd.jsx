import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import FirebaseDb from '../Fire';



export const StudentAdd = () => {


    let history = useHistory();


    const redirectedToStudentList = event => {
        history.push({
            pathname: '/students-list',
        });
    };


    // const [studentId, setStudentId] = useState();
    // const [studentName, setStudentName] = useState('');
    // const [studentClassId, setStudentClassId] = useState('');
    // const [studentPhone, setStudentPhone] = useState('');
    // const [studentAddress, setStudentAddress] = useState('');
    // const [studentSubjectId, setStudentSubjectID] = useState();



    return (
        <>

            <section className="add-n-stud-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Add new student</h2>
                        </div>

                    </div>
                    <Formik
                        initialValues={{
                            studentId: '',
                            studentName: '',
                            studentEmail: '',
                            studentClassId: '',
                            studentPhone: '',
                            studentAddress: '',
                            studentSubjectId: ''

                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.studentId) {
                                errors.studentId = 'Required';
                            }
                            if (!values.studentName) {
                                errors.studentName = 'Required'
                            }
                            if (!values.studentClassId) {
                                errors.studentClassId = 'Required'
                            }
                            if (!values.studentPhone) {
                                errors.studentPhone = 'Required'
                            }
                            if (!values.studentAddress) {
                                errors.studentAddress = 'Required'
                            }
                            if (!values.studentSubjectId) {
                                errors.studentSubjectId = 'Required'
                            }
                            if (!values.studentEmail) {
                                errors.studentEmail = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.studentEmail)
                            ) {
                                errors.studentEmail = 'Invalid email address';
                            }
                            return errors;
                        }}



                        onSubmit={(values) => {

                            FirebaseDb.child('students').push(
                                values,
                                err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                }
                            )

                            redirectedToStudentList();

                            console.log(values)

                        }



                        }
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,

                        }) => (
                            <form onSubmit={handleSubmit} id="studentForm">

                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student ID </label>
                                            <input
                                                className="w-100"
                                                type="number"
                                                name="studentId"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentId}
                                            />
                                            <p className="text-danger"> {errors.studentId && touched.studentId && errors.studentId} </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student Name </label>
                                            <input
                                                className="w-100"
                                                type="text"
                                                name="studentName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentName}
                                            />
                                            <p className="text-danger"> {errors.studentName && touched.studentName && errors.studentName}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student Email </label>
                                            <input
                                                className="w-100"
                                                type="email"
                                                name="studentEmail"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentEmail}
                                            />
                                            <p className="text-danger">   {errors.studentEmail && touched.studentEmail && errors.studentEmail}</p>
                                        </div>


                                    </div>


                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student Class ID </label>
                                            <input
                                                className="w-100"
                                                type="number"
                                                name="studentClassId"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentClassId}
                                            />
                                            <p className="text-danger">    {errors.studentClassId && touched.studentClassId && errors.studentClassId}</p>
                                        </div>
                                    </div>


                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student Phone </label>
                                            <input
                                                className="w-100"
                                                type="text"
                                                name="studentPhone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentPhone}
                                            />
                                            <p className="text-danger">  {errors.studentPhone && touched.studentPhone && errors.studentPhone}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="w-100">
                                            <label className="w-100"> Student Subject </label>
                                            <input
                                                className="w-100"
                                                type="number"
                                                name="studentSubjectId"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentSubjectId}
                                            />
                                            <p className="text-danger"> {errors.studentSubjectId && touched.studentSubjectId && errors.studentSubjectId}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">

                                        <div className="w-100">
                                            <label className="w-100"> Student Address </label>
                                            <textarea
                                                className="w-100"
                                                type="text"
                                                name="studentAddress"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.studentAddress}
                                            />
                                            <p className="text-danger">   {errors.studentAddress && touched.studentAddress && errors.studentAddress}</p>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-success" >
                                            Submit
                                        </button>
                                    </div>

                                </div>


                            </form>
                        )}
                    </Formik>


                </div>

            </section>





        </>
    )
}
