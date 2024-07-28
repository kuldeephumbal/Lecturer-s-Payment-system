import Header from "./Header";
export default function Batch() {
    return (<>
    <Header/>
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-users-line" /> Batches</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Batch</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="batchForm">
                            <div className="col-md-6">
                                <label htmlFor="batchName" className="form-label">Batch Name</label>
                                <input type="text" className="form-control" id="batchName" name="batchName" placeholder="Enter batch name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="course" className="form-label">Course</label>
                                <select className="form-select" id="course" name="course" required>
                                    <option value>Select a course</option>
                                    <option value="course1">Course 1</option>
                                    <option value="course2">Course 2</option>
                                    <option value="course3">Course 3</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                <input type="date" className="form-control" id="startDate" name="startDate" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="endDate" className="form-label">End Date</label>
                                <input type="date" className="form-control" id="endDate" name="endDate" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="classTime" className="form-label">Class Time</label>
                                <input type="text" className="form-control" id="classTime" name="classTime" placeholder="Enter class time" required />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary me-1">Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </form>{/* End Multi Columns Form */}
                    </div>
                </div>
            </div>
        </main>
    </>);
}
