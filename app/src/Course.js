import Header from "./Header";
export default function Course() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-layer-group" /> Courses</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Course</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="courseForm">
                            <div className="col-md-6">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="duration" className="form-label">Duration</label>
                                <input type="text" className="form-control" id="duration" name="duration" placeholder="Enter duration" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea name="description" id="description" className="form-control" placeholder="Enter description about course" 
                                 required defaultValue={""} />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary me-1">Submit</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </form>{/* End Multi Columns Form */}
                    </div>
                </div>
                <hr />
                <div className="table-responsive">
                    <table className="table table-bordered table-hover" id="courseTable">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Rows will be added here dynamically */}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    </>);
}
