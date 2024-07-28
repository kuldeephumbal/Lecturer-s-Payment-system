import Header from "./Header";
export default function Lecture() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-circle-play" /> Lectures</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Lecture</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="lectureForm">
                            <div className="col-md-6">
                                <label htmlFor="lecture" className="form-label">Lecture</label>
                                <input type="text" className="form-control" id="lecture" name="lecture" placeholder="Enter lecture title" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lectureDate" className="form-label">Lecture Date</label>
                                <input type="date" className="form-control" id="lectureDate" name="lectureDate" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="teacher" className="form-label">Teacher</label>
                                <input type="text" className="form-control" id="teacher" name="teacher" placeholder="Enter teacher's name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="batch" className="form-label">Batch</label>
                                <input type="text" className="form-control" id="batch" name="batch" placeholder="Enter batch name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="duration" className="form-label">Duration</label>
                                <input type="text" className="form-control" id="duration" name="duration" placeholder="Enter lecture duration" 
                                 required />
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
