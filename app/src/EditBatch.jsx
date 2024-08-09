import Header from "./Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showMessage, showError } from "./ToastMessage";

export default function EditBatch() {
  const [courses, setCourses] = useState([]);
  const [batch, setBatch] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the batch ID from the URL

  useEffect(() => {
    // Fetch the list of courses
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        showError("Failed to fetch course data.");
      });

    // Fetch the batch data
    axios
      .get(`http://localhost:5000/batches/${id}`)
      .then((response) => {
        setBatch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching batch data:", error);
        showError("Failed to fetch batch data.");
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      batch_name: formData.get("batchName"),
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      class_time: formData.get("classTime"),
      course_id: formData.get("course"),
    };

    axios
      .put(`http://localhost:5000/batches/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        showMessage("Batch updated successfully.");
        setTimeout(() => {
          navigate("/batch");
        }, 1000);
      })
      .catch((error) => {
        showError("The batch couldn't be updated.");
        console.error("Error updating batch:", error);
      });
  };

  if (!batch) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
            <i className="fa-solid fa-layer-group" /> Batches
          </h1>
          <Link to="/batch" className="btn btn-primary">
            <i className="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <ToastContainer />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Edit Batch</h5>
              <form className="row g-3" id="batchForm" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="batchName" className="form-label">
                    Batch Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="batchName"
                    name="batchName"
                    placeholder="Enter batch name"
                    required
                    defaultValue={batch.batch_name}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="course" className="form-label">
                    Course
                  </label>
                  <select
                    className="form-select"
                    id="course"
                    name="course"
                    required
                    defaultValue={batch.course_id}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="startDate" className="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    required
                    defaultValue={batch.start_date.split('T')[0]} // Ensure format is YYYY-MM-DD
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="endDate" className="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    name="endDate"
                    required
                    defaultValue={batch.end_date.split('T')[0]} // Ensure format is YYYY-MM-DD
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="classTime" className="form-label">
                    Class Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="classTime"
                    name="classTime"
                    placeholder="Enter class time"
                    required
                    defaultValue={batch.class_time}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary me-1">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
