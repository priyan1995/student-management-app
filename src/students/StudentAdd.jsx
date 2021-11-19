import React, { useState } from 'react';

export const StudentAdd = () => {


    const [studentId, setStudentId] = useState();
    const [studentName, setStudentName] = useState('');
    const [studentClassId, setStudentClassId] = useState('');
    const [studentPhone, setStudentPhone] = useState('');
    const [studentAddress, setStudentAddress] = useState('');
    const [studentSubjectId, setStudentSubjectID] = useState();

    return (
        <>

            <h2 className="text-center">Add new student</h2>

        </>
    )
}
