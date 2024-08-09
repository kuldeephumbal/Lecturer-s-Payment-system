import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import axios from "axios";

export default function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const apiAddress = "http://localhost:5000/courses";
    axios
      .get(apiAddress)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        showError("The courses cloudn't fetch");
      });
  }, []);

  let displayCourses = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>&#8377;{item.fees}</td>
        <td>{item.duration}</td>
        <td>{item.description}</td>
        <td>
          <Link title="edit Course" to={`/edit-course/${item.id}`}>
            <i className="fa-solid fa-pen-to-square me-3"></i>
          </Link>
          <span
            title="Remove Course"
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
    if (window.confirm("Are you sure you want to delete this course?")) {
      const apiAddress = `http://localhost:5000/courses/${id}`;
      axios
        .delete(apiAddress)
        .then((response) => {
          if (response.status === 200) {
            showMessage("Course deleted successfully");
            setCourses(courses.filter((course) => course.id !== id));
          }
        })
        .catch((error) => {
          showError("Failed to delete course");
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
            <i className="fa-solid fa-layer-group" /> Courses
          </h1>
          <Link to="/add-course" className="btn btn-primary">
            <i className="fa-solid fa-plus"></i> Courses
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
                      <th>Title</th>
                      <th>Fees</th>
                      <th>Duration</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{courses.map((item) => displayCourses(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
