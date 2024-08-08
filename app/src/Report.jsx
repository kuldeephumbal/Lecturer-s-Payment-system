import Header from "./Header";
export default function Report() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1> <i className="fa-solid fa-list" /> Report</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Batch-wise Lecture Details Report</h2>
                {/* Form to input batch name and date range */}
                <form id="reportForm" className="mb-4">
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
                            <tr>
                                <td>1</td>
                                <td>Batch A</td>
                                <td>Introduction to SQL</td>
                                <td>2024-07-10</td>
                                <td>2 hours</td>
                                <td>50</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Batch B</td>
                                <td>Advanced SQL Queries</td>
                                <td>2024-07-15</td>
                                <td>3 hours</td>
                                <td>75</td>
                                <td>225</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={6} className="text-right">Total Amount:</th>
                                <th id="totalAmount" className="text-right">0.00</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </main>
    </>);
}
