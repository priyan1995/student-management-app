import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';

export const StudentAdd = () => {


    // const [studentId, setStudentId] = useState();
    // const [studentName, setStudentName] = useState('');
    // const [studentClassId, setStudentClassId] = useState('');
    // const [studentPhone, setStudentPhone] = useState('');
    // const [studentAddress, setStudentAddress] = useState('');
    // const [studentSubjectId, setStudentSubjectID] = useState();

    return (
        <>

            <h2 className="text-center">Add new student</h2>




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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null));
                        setSubmitting(false);
                    }, 400);
                }}
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
                    <form onSubmit={handleSubmit}>
                        {/* <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email} */}

                        <div className="w-100">
                            <label> Student ID </label>
                            <input
                                type="number"
                                name="studentId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentId}
                            />
                            {errors.studentId && touched.studentId && errors.studentId}
                        </div>

                        <div className="w-100">
                            <label> Student Name </label>
                            <input
                                type="text"
                                name="studentName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentName}
                            />
                            {errors.studentName && touched.studentName && errors.studentName}
                        </div>

                        <div className="w-100">
                            <label> Student Email </label>
                            <input
                                type="email"
                                name="studentEmail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentEmail}
                            />
                            {errors.studentEmail && touched.studentEmail && errors.studentEmail}
                        </div>

                        <div className="w-100">
                            <label> Student Class ID </label>
                            <input
                                type="number"
                                name="studentClassId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentClassId}
                            />
                            {errors.studentClassId && touched.studentClassId && errors.studentClassId}
                        </div>


                        <div className="w-100">
                            <label> Student Phone </label>
                            <input
                                type="text"
                                name="studentPhone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentPhone}
                            />
                            {errors.studentPhone && touched.studentPhone && errors.studentPhone}
                        </div>


                        <div className="w-100">
                            <label> Student Address </label>
                            <textarea
                                type="text"
                                name="studentAddress"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentAddress}
                            />
                            {errors.studentAddress && touched.studentAddress && errors.studentAddress}
                        </div>

                        <div className="w-100">
                            <label> Student Subject </label>
                            <input
                                type="number"
                                name="studentSubjectId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.studentSubjectId}
                            />
                            {errors.studentSubjectId && touched.studentSubjectId && errors.studentSubjectId}
                        </div>





                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>

        </>
    )
}
