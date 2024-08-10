import Header from "./Header";
import axios from "axios";
import { useState } from "react";

export default function Report() {
    const [reportData, setReportData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const batchName = e.target.batchName.value;
        const startDate = e.target.startDate.value;
        const endDate = e.target.endDate.value;

        try {
            // Make API request
            const response = await axios.post("http://localhost:5000/reports/batch-lectures", {
                batch_id: batchName, // Assuming batchName is the batch_id
                start_date: startDate,
                end_date: endDate
            });

            // Process response
            const data = response.data;
            setReportData(data);
            // Calculate total amount
            const total = data.reduce((acc, lecture) => acc + lecture.amount, 0);
            setTotalAmount(total);
        } catch (error) {
            console.error("Error fetching report:", error);
        }
    };

    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><i className="fa-solid fa-list" /> Report</h1>
                </div>
                <hr />
                <div className="container mt-4">
                    <h2 className="text-center mb-4">Batch-wise Lecture Details Report</h2>
                    {/* Form to input batch name and date range */}
                    <form id="reportForm" className="mb-4" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-4">
                                <label htmlFor="batchName">Batch Name</label>
                                <input type="text" className="form-control" id="batchName" placeholder="Enter batch name" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" className="form-control" id="startDate" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" className="form-control" id="endDate" required />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary">Generate Report</button>
                        </div>
                    </form>
                    {/* Table to display batch-wise lecture details */}
                    <div id="reportTable" className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Batch Name</th>
                                    <th scope="col">Lecture Title</th>
                                    <th scope="col">Lecture Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((lecture, index) => (
                                    <tr key={lecture.id}>
                                        <td>{index + 1}</td>
                                        <td>{lecture.batch_id}</td> {/* You may want to fetch and display actual batch name */}
                                        <td>{lecture.subject_id}</td> {/* You may want to fetch and display actual subject title */}
                                        <td>{new Date(lecture.lecture_date).toLocaleDateString()}</td>
                                        <td>{lecture.duration}</td>
                                        <td>{lecture.rate}</td>
                                        <td>{lecture.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={6} className="text-right">Total Amount:</th>
                                    <th className="text-right">{totalAmount.toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}
