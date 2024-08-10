import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [countBatches, setCountBatches] = useState(0);
  const [countCourses, setCountCourses] = useState(0);
  const [countSubjects, setCountSubjects] = useState(0);
  const [countProfessors, setCountProfessors] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/batches/count").then((response) => {
      setCountBatches(response.data.count);
    });
    axios.get("http://localhost:5000/courses/count").then((response) => {
      setCountCourses(response.data.count);
    });
    axios.get("http://localhost:5000/subjects/count").then((response) => {
      setCountSubjects(response.data.count);
    });
    axios.get("http://localhost:5000/professors/count").then((response) => {
      setCountProfessors(response.data.count);
    });
  }, []);

  return (
    <>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <i className="fa-solid fa-table" /> Dashboard
          </h1>
        </div>
        <div className="container mt-5">
          {/* Display count cards */}
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Courses</h5>
                  <p className="card-text">{countCourses}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Batches</h5>
                  <p className="card-text">{countBatches}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Subjects</h5>
                  <p className="card-text">{countSubjects}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total Professors</h5>
                  <p className="card-text">{countProfessors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
