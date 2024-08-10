import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function Subject() {
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/subjects")
      .then((subjectResponse) => {
        setSubjects(subjectResponse.data);
      })
      .catch((error) => {
        showError("The subjects couldn't fetch");
      });
    axios
      .get("http://localhost:5000/courses")
      .then((courseResponse) => {
        setCourses(courseResponse.data);
      })
      .catch((error) => {
        showError("The courses couldn't fetch");
      });
  }, []);

  const getCourseTitle = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.title : "Unknown Course";
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      axios
        .delete(`http://localhost:5000/subjects/${id}`)
        .then(() => {
          showMessage("subject deleted successfully.");
          setSubjects(subjects.filter((subject) => subject.id !== id));
        })
        .catch((error) => {
          showError("The subject couldn't be deleted.");
        });
    }
  };

  const displaySubjects = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{getCourseTitle(item.course_id)}</td>
        <td>{item.title}</td>
        <td>{item.rate}</td>
        <td>
          <Link title="Edit subject" to={`/edit-subject/${item.id}`}>
            <i className="fa-solid fa-pen-to-square me-3"></i>
          </Link>
          <span
            title="Remove subject"
            className="text-danger"
            onClick={() => handleDelete(item.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </span>
        </td>
      </tr>
    );
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
        <ToastContainer />
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
          <i className="fa-solid fa-book" /> Subjects
          </h1>
          <Link to="/add-subject" className="btn btn-primary">
            <i className="fa-solid fa-plus"></i> Subject
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
                      <th>Course</th>
                      <th>Title</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{subjects.map((item) => displaySubjects(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
