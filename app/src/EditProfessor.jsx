import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function EditProfessor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [professor, setProfessor] = useState({
    photo: "",
    name: "",
    mobile: "",
    email: "",
    gender: "",
    qualification: "",
    experience: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/professors/${id}`)
      .then((response) => {
        setProfessor(response.data);
      })
      .catch((error) => {
        showError("Failed to fetch professor details");
      });
  }, [id]);

  const handleChange = (e) => {
    setProfessor({
      ...professor,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", professor.name);
    formData.append("mobile", professor.mobile);
    formData.append("email", professor.email);
    formData.append("gender", professor.gender);
    formData.append("qualification", professor.qualification);
    formData.append("experience", professor.experience);
    if (selectedFile) {
      formData.append("photo", selectedFile);
    } else {
      formData.append("photo", professor.photo);
    }

    axios
      .put(`http://localhost:5000/professors/${id}`, formData)
      .then((response) => {
        showMessage("Professor updated successfully");
        setTimeout(() => {
          navigate("/professor");
        }, 1000);
      })
      .catch((error) => {
        showError("Failed to update professor");
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
            <i class="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Edit Professor</h5>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                  <label className="form-label">Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                  {professor.photo && (
                    <img
                      src={professor.photo}
                      alt={professor.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        marginTop: "10px",
                      }}
                    />
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={professor.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={professor.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={professor.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={professor.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    name="qualification"
                    value={professor.qualification}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Experience</label>
                  <input
                    type="text"
                    className="form-control"
                    name="experience"
                    value={professor.experience}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update Professor
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
