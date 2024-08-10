import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function Professor() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        const apiAddress = "http://localhost:5000/professors";
        axios
            .get(apiAddress)
            .then((response) => {
                setProfessors(response.data);
            })
            .catch((error) => {
                showError("The professors couldn't fetch");
            });
    }, []);

    let displayProfessors = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <img src={item.photo} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.qualification}</td>
                <td>{item.experience}</td>
                <td>
                    <Link title="edit Professor" to={`/edit-professor/${item.id}`}>
                        <i className="fa-solid fa-pen-to-square me-3"></i>
                    </Link>
                    <span
                        title="Remove Professor"
                        className="text-danger"
                        onClick={() => handleDelete(item.id)}
                    >
                        <i className="fa-solid fa-trash pb-2"></i>
                    </span>
                </td>
            </tr>
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this professor?")) {
            const apiAddress = `http://localhost:5000/professors/${id}`;
            axios
                .delete(apiAddress)
                .then((response) => {
                    if (response.status === 200) {
                        showMessage("Professor deleted successfully");
                        setProfessors(professors.filter((professor) => professor.id !== id));
                    }
                })
                .catch((error) => {
                    showError("Failed to delete professor");
                });
        }
    };

    return (
        <>
            <Header />
            <main id="main" className="main">
                <ToastContainer />
                <div className="pagetitle d-flex align-items-center justify-content-between">
                    <h1>
                    <i className="fa-solid fa-chalkboard-user" /> Professors
                    </h1>
                    <Link to="/add-professor" className="btn btn-primary">
                        <i className="fa-solid fa-plus"></i> Professor
                    </Link>
                </div>
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Qualification</th>
                                            <th>Experience</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>{professors.map((item) => displayProfessors(item))}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
