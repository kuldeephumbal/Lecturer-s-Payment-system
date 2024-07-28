import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Batch from './Batch';
import Course from './Course';
import Dashboard from './Dashboard';
import Lecture from './Lecture';
import Payment from './Payment';
import Professor from './Professor';
import Profile from './Profile';
import Report from './Report';
import Subject from './Subject';
import Logout from './Logout';


function ROUTES(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Login />} />
                <Route index path='/forgot-password' element={<ForgotPassword />} />
                <Route index path='/batch' element={<Batch />} />
                <Route index path='/course' element={<Course />} />
                <Route index path='/dashboard' element={<Dashboard />} />
                <Route index path='/payment' element={<Payment />} />
                <Route index path='/lecture' element={<Lecture />} />
                <Route index path='/professor' element={<Professor />} />
                <Route index path='/profile' element={<Profile />} />
                <Route index path='/Report' element={<Report />} />
                <Route index path='/subject' element={<Subject />} />
                <Route index path='/logout' element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ROUTES />);
