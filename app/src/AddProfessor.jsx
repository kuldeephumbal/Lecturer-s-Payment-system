import Header from "./Header";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function AddProfessor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    gender: "male",
    experience: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios
      .post("http://localhost:5000/professors", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        showMessage("Professor added successfully");
        setTimeout(() => {
          navigate("/professor");
        }, 1000);
      })
      .catch((error) => {
        showError("Failed to add professor");
      });
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
        <ToastContainer />
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
          <i className="fa-solid fa-chalkboard-user" /> Professor
          </h1>
          <Link to="/professor" className="btn btn-primary">
            <i className="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Professor</h5>
              {/* Multi Columns Form */}
              <form
                className="row g-3"
                id="professorForm"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="qualification" className="form-label">
                    Qualification
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    name="qualification"
                    placeholder="Enter your qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Gender
                  </legend>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    className="form-control"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="col-md-8">
                  <label htmlFor="experience" className="form-label">
                    Experience
                  </label>
                  <textarea
                    name="experience"
                    id="experience"
                    className="form-control"
                    placeholder="Enter your experience"
                    value={formData.experience}
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
              {/* End Multi Columns Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
