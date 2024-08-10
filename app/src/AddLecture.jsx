import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function AddLecture() {
  const navigate = useNavigate();

  const [batches, setBatches] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newLecture, setNewLecture] = useState({
    batch_id: "",
    Professor_id: "",
    subject_id: "",
    Payment_id: "",
    duration: "",
    amount: "",
    lecture_date: "",
  });

  useEffect(() => {
    // Fetch data for select options
    const fetchData = async () => {
      try {
        const [batchesData, professorsData, subjectsData, paymentsData] = await Promise.all([
          axios.get("http://localhost:5000/batches"),
          axios.get("http://localhost:5000/professors"),
          axios.get("http://localhost:5000/subjects"),
          axios.get("http://localhost:5000/payments"),
        ]);

        setBatches(batchesData.data);
        setProfessors(professorsData.data);
        setSubjects(subjectsData.data);
        setPayments(paymentsData.data);
      } catch (error) {
        showError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLecture((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lectures", newLecture);
      showMessage("Lecture added successfully");
      setTimeout(() => {
        navigate("/lecture");
      }, 1000);
    } catch (error) {
      if (error.response) {
        showError(`Error: ${error.response.data.error}`);
      } else if (error.request) {
        showError("Error: No response from server");
      } else {
        showError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
        <ToastContainer />
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
          <i className="fa-solid fa-circle-play" /> Lecture
          </h1>
          <Link to="/lecture" className="btn btn-primary">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title fw-bold">Add Course</h5>
              <form onSubmit={handleSubmit} className="row">
                <div className="mb-4 mt-3 col-lg-6">
                  <label htmlFor="batch_id" className="form-label">Batch</label>
                  <select
                    className="form-select"
                    name="batch_id"
                    value={newLecture.batch_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Batch</option>
                    {batches.map((batch) => (
                      <option key={batch.id} value={batch.id}>
                        {batch.batch_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 mt-3 col-lg-6">
                  <label htmlFor="Professor_id" className="form-label">Professor</label>
                  <select
                    className="form-select"
                    name="Professor_id"
                    value={newLecture.Professor_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Professor</option>
                    {professors.map((professor) => (
                      <option key={professor.id} value={professor.id}>
                        {professor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 col-lg-6">
                  <label htmlFor="subject_id" className="form-label">Subject</label>
                  <select
                    className="form-select"
                    name="subject_id"
                    value={newLecture.subject_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 col-lg-6">
                  <label htmlFor="Payment_id" className="form-label">Payment Remarks</label>
                  <select
                    className="form-select"
                    name="Payment_id"
                    value={newLecture.Payment_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Payment Remarks</option>
                    {payments.map((payment) => (
                      <option key={payment.id} value={payment.id}>
                        {payment.remarks}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">Duration (HH:MM:SS)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={newLecture.duration}
                    onChange={handleChange}
                    placeholder="Enter duration in HH:MM:SS format"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={newLecture.amount}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lecture_date" className="form-label">Lecture Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="lecture_date"
                    value={newLecture.lecture_date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary col-2 ms-2 mt-2">
                  Add Lecture
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
