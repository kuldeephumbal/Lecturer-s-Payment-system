import Header from "./Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function EditSubject() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [subjectData, setSubjectData] = useState({
    course_id: "",
    title: "",
    rate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the subject data by ID
    axios
      .get(`http://localhost:5000/subjects/${id}`)
      .then((response) => {
        setSubjectData(response.data);
      })
      .catch((error) => {
        showError("Failed to fetch subject data.");
      });

    // Fetch the list of courses
    axios
      .get("http://localhost:5000/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        showError("The courses couldn't fetch");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({
      ...subjectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/subjects/${id}`, subjectData)
      .then((response) => {
        showMessage("Subject updated successfully");
        setTimeout(() => {
          navigate("/subject");
        }, 1000);
      })
      .catch((error) => {
        showError("Failed to update subject");
      });
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
        <ToastContainer />
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
            <i className="fa-solid fa-layer-group" /> Edit Subject
          </h1>
          <Link to="/subject" className="btn btn-primary">
            <i className="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Edit Subject</h5>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="course" className="form-label">
                    Course
                  </label>
                  <select
                    className="form-select"
                    id="course"
                    name="course_id"
                    value={subjectData.course_id}
                    onChange={handleChange}
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
                  <label htmlFor="title" className="form-label">
                    Subject Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter subject title"
                    value={subjectData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="rate" className="form-label">
                    Rate
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rate"
                    name="rate"
                    placeholder="Enter rate"
                    value={subjectData.rate}
                    onChange={handleChange}
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
