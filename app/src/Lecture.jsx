import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showError } from "./ToastMessage";

export default function Lecture() {
  const [lectures, setLectures] = useState([]);
  const [batches, setBatches] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch lectures data
    axios
      .get("http://localhost:5000/lectures")
      .then((response) => {
        setLectures(response.data);
      })
      .catch((error) => {
        showError("The lectures couldn't be fetched");
      });

    // Fetch batches data
    axios
      .get("http://localhost:5000/batches")
      .then((response) => {
        setBatches(response.data);
      })
      .catch((error) => {
        showError("The batches couldn't be fetched");
      });

    // Fetch professors data
    axios
      .get("http://localhost:5000/professors")
      .then((response) => {
        setProfessors(response.data);
      })
      .catch((error) => {
        showError("The professors couldn't be fetched");
      });

    // Fetch subjects data
    axios
      .get("http://localhost:5000/subjects")
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        showError("The subjects couldn't be fetched");
      });

    // Fetch payments data
    axios
      .get("http://localhost:5000/payments")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        showError("The payments couldn't be fetched");
      });
  }, []);

  // Functions to get names or titles based on IDs
  const getBatchName = (batchId) => {
    const batch = batches.find((batch) => batch.id === batchId);
    return batch ? batch.batch_name : "Unknown Batch";
  };

  const getProfessorName = (professorId) => {
    const professor = professors.find((professor) => professor.id === professorId);
    return professor ? professor.name : "Unknown Professor";
  };

  const getSubjectTitle = (subjectId) => {
    const subject = subjects.find((subject) => subject.id === subjectId);
    return subject ? subject.title : "Unknown Subject";
  };

  const getPaymentRemarks = (paymentId) => {
    const payment = payments.find((payment) => payment.id === paymentId);
    return payment ? payment.remarks : "Unknown Payment";
  };

  // Display lectures in table
  const displayLectures = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{getBatchName(item.batch_id)}</td>
        <td>{getProfessorName(item.Professor_id)}</td>
        <td>{getSubjectTitle(item.subject_id)}</td>
        <td>{getPaymentRemarks(item.Payment_id)}</td>
        <td>{item.duration}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.lecture_date).toLocaleDateString()}</td>
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
          <i className="fa-solid fa-circle-play" /> Lectures
          </h1>
          <Link to="/add-lecture" className="btn btn-primary">
            <i className="fa-solid fa-plus"></i> Add Lecture
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
                      <th>Batch</th>
                      <th>Professor</th>
                      <th>Subject</th>
                      <th>Payment Remarks</th>
                      <th>Duration</th>
                      <th>Amount</th>
                      <th>Lecture Date</th>
                    </tr>
                  </thead>
                  <tbody>{lectures.map((item) => displayLectures(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
