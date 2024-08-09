import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showMessage, showError } from "./ToastMessage";
import moment from "moment";

export default function AddBatch() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        showError("Failed to fetch course data.");
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Get the time input and format it to 24-hour format
    const rawTime = formData.get("classTime");
    const formattedTime = moment(rawTime, "HH:mm").format("HH:mm");

    // Create the data object to send in the request
    const data = {
      course_id: formData.get("course"),
      batch_name: formData.get("batchName"),
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      class_time: formattedTime,
    };

    axios
      .post("http://localhost:5000/batches", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        showMessage("Batch added successfully.");
        setTimeout(() => {
          navigate("/batch");
        }, 1000);
      })
      .catch((error) => {
        showError("The batch couldn't be added.");
      });
  };

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
              <h5 className="card-title">Add Batch</h5>
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
