import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function Batch() {
  const [batches, setBatches] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/batches")
      .then((batchResponse) => {
        setBatches(batchResponse.data);
      })
      .catch((error) => {
        showError("The batches couldn't fetch");
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

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const period = hour < 12 ? 'AM' : 'PM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${period}`;
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this batch?")) {
      axios
        .delete(`http://localhost:5000/batches/${id}`)
        .then(() => {
          showMessage("Batch deleted successfully.");
          setBatches(batches.filter((batch) => batch.id !== id));
        })
        .catch((error) => {
          showError("The batch couldn't be deleted.");
        });
    }
  };

  const displayBatches = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.batch_name}</td>
        <td>{getCourseTitle(item.course_id)}</td>
        <td>{formatDate(item.start_date)}</td>
        <td>{formatDate(item.end_date)}</td>
        <td>{formatTime(item.class_time)}</td>
        <td>
          <Link title="Edit Batch" to={`/edit-batch/${item.id}`}>
            <i className="fa-solid fa-pen-to-square me-3"></i>
          </Link>
          <span
            title="Remove Batch"
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
          <i className="fa-solid fa-users-line" /> Batches
          </h1>
          <Link to="/add-batch" className="btn btn-primary">
            <i className="fa-solid fa-plus"></i> Batch
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
                      <th>Batch Name</th>
                      <th>Course</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Class Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{batches.map((item) => displayBatches(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
