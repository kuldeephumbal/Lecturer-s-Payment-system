import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";

export default function AddPayment() {
  const [professors, setProfessors] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch professors for dropdown
    axios.get("http://localhost:5000/professors")
      .then(response => {
        setProfessors(response.data);
      })
      .catch(error => {
        showError("Failed to fetch professors");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const paymentData = {
      professor_id: selectedProfessor,
      order_date: orderDate,
      remarks,
      start_date: startDate,
      end_date: endDate
    };
  
    console.log("Submitting payment data:", paymentData);
  
    axios.post("http://localhost:5000/payments", paymentData)
      .then(response => {
          showMessage("Payment added successfully");
          setTimeout(() =>  {
              navigate("/payment");
            }, 1000);      
      })
      .catch(error => {
        showError("Failed to add payment");
      });
  };
  

  return (
    <>
      <Header />
      <main id="main" className="main">
      <ToastContainer />
        <div className="pagetitle d-flex align-items-center justify-content-between">
          <h1>
          <i className="fa-regular fa-credit-card" /> Payment
          </h1>
          <Link to="/payment" className="btn btn-primary">
            <i className="fa-solid fa-chevron-left"></i> Back
          </Link>
        </div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Payment Details</h5>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="professor" className="form-label">
                    Professor
                  </label>
                  <select
                    id="professor"
                    className="form-select"
                    value={selectedProfessor}
                    onChange={(e) => setSelectedProfessor(e.target.value)}
                    required
                  >
                    <option value="">Select Professor</option>
                    {professors.map((prof) => (
                      <option key={prof.id} value={prof.id}>
                        {prof.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="order_date" className="form-label">
                    Order Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="order_date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="remarks" className="form-label">
                    Remarks
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="start_date" className="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start_date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="end_date" className="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="end_date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
