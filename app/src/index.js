import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Course from './Course';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';
import Batch from './Batch';
import AddBatch from './AddBatch';
import EditBatch from './EditBatch';
import Dashboard from './Dashboard';
import Lecture from './Lecture';
import AddLecture from './AddLecture';
import Payment from './Payment';
import AddPayment from './AddPayment';
import Professor from './Professor';
import AddProfessor from './AddProfessor';
import EditProfessor from './EditProfessor';
import Report from './Report';
import Subject from './Subject';
import AddSubject from './AddSubject';
import EditSubject from './EditSubject';
import Logout from './Logout';


function ROUTES() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route path='/course' element={<Course />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/edit-course/:id' element={<EditCourse />} />
                <Route path='/batch' element={<Batch />} />
                <Route path='/add-batch' element={<AddBatch />} />
                <Route path='/edit-batch/:id' element={<EditBatch />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/add-payment' element={<AddPayment />} />
                <Route path='/lecture' element={<Lecture />} />
                <Route path='/add-lecture' element={<AddLecture />} />
                <Route path='/professor' element={<Professor />} />
                <Route path='/add-professor' element={<AddProfessor />} />
                <Route path='/edit-professor/:id' element={<EditProfessor />} />
                <Route path='/report' element={<Report />} />
                <Route path='/subject' element={<Subject />} /> 
                <Route path='/add-subject' element={<AddSubject />} />
                <Route path='/edit-subject/:id' element={<EditSubject />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ROUTES />);
