import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function EditCourse() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const apiAddress = `http://localhost:5000/courses/${id}`;
  useEffect(() => {
    axios
      .get(apiAddress)
      .then((response) => {
        const course = response.data;
        setTitle(course.title);
        setFees(course.fees);
        setDuration(course.duration);
        setDescription(course.description);
      })
      .catch((error) => {
        showError("Failed to load course data");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "fees") setFees(value);
    if (name === "duration") setDuration(value);
    if (name === "description") setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(apiAddress, {
        title,
        fees,
        duration,
        description,
      })
      .then((response) => {
        if (response.status === 200) {
          showMessage("Course updated successfully");
          setTimeout(() => {
            navigate("/course");
          }, 1000);
        }
      })
      .catch((error) => {
        showError("Failed to update course");
      });
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
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
              <h5 className="card-title fw-bold">Edit Course</h5>
              <ToastContainer />
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
                  <button
                    type="reset"
                    className="btn btn-secondary"
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
