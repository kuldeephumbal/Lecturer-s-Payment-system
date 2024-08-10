import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError } from "./ToastMessage";

export default function Payment() {
  const [payments, setPayments] = useState([]);
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    // Fetch professors data
    axios
      .get("http://localhost:5000/professors")
      .then((professorResponse) => {
        setProfessors(professorResponse.data);
        console.log("Professors data:", professorResponse.data); // Log professors data
      })
      .catch((error) => {
        showError("The professors couldn't be fetched");
      });

    // Fetch payments data
    axios
      .get("http://localhost:5000/payments")
      .then((response) => {
        setPayments(response.data);
        console.log("Payments data:", response.data); // Log payments data
      })
      .catch((error) => {
        showError("The payments couldn't be fetched");
      });
  }, []);

  // Function to get professor name based on professor_id
  const getProfessorName = (professorId) => {
    const professor = professors.find((professor) => professor.id === professorId);
    return professor ? professor.name : "Unknown Professor";
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  // Display payments in table
  const displayPayments = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{getProfessorName(item.Professor_id)}</td> {/* Use Professor_id to find name */}
        <td>{formatDate(item.order_date)}</td>
        <td>{item.remarks}</td>
        <td>{formatDate(item.start_date)}</td>
        <td>{formatDate(item.end_date)}</td>
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
          <i className="fa-regular fa-credit-card" /> Payments
          </h1>
          <Link to="/add-payment" className="btn btn-primary">
          <i className="fa-solid fa-plus"></i> Add Payment
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
                      <th>Professor Name</th>
                      <th>Order Date</th>
                      <th>Remarks</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>{payments.map((item) => displayPayments(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
