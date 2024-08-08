import Header from "./Header";
export default function Subject() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-book" /> Subjects</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Subject</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="subjectForm">
                            <div className="col-md-6">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject" 
                                 required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="course" className="form-label">Course</label>
                                <select className="form-select" id="course" name="course" required>
                                    <option selected disabled>Select a course</option>
                                    <option value="Course A">Course A</option>
                                    <option value="Course B">Course B</option>
                                    <option value="Course C">Course C</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="rate" className="form-label">Rate</label>
                                <input type="number" className="form-control" id="rate" name="rate" placeholder="Enter rate" required />
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
