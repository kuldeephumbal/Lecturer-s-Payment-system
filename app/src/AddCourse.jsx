import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "duration") setDuration(value);
    if (name === "description") setDescription(value);
    if (name === "fees") setFees(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiAddress = "http://localhost:5000/courses";
    axios
      .post(apiAddress, {
        title,
        fees,
        duration,
        description,
      })
      .then((response) => {
        setTitle("");
        setFees("");
        setDuration("");
        setDescription("");
        showMessage("Course added successfully.");
        setTimeout(() => {
          navigate("/course");
        }, 1000);
      })
      .catch((error) => {
        showError("The course couldn't be added.");
      });
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
          <Link to="/course" className="btn btn-primary">
          <i class="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-bold">Add Course</h5>
              <form className="row g-3" id="courseForm" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Enter title"
                    required
                  />
                </div>
               
                <div className="col-md-6">
                  <label htmlFor="duration" className="form-label">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    name="duration"
                    value={duration}
                    onChange={handleChange}
                    placeholder="Enter duration"
                    required
                  />
                </div>
               
                <div className="col-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={handleChange}
                    placeholder="Enter description about course"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="fees" className="form-label">
                    Fees
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="fees"
                    name="fees"
                    value={fees}
                    onChange={handleChange}
                    placeholder="Enter fees in INR"
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary me-1">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary"
                  onClick={() => {
                    setTitle("");
                    setFees("");
                    setDuration("");
                    setDescription("");
                  }}
                  >
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
