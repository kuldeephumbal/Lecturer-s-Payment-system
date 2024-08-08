import Header from "./Header";
export default function Payment() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1> <i className="fa-regular fa-credit-card" /> Payments</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Payment Details</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="batchForm">
                            <div className="col-md-6">
                                <label htmlFor="teacherName" className="form-label">Teacher Name</label>
                                <input type="text" className="form-control" id="teacherName" name="teacherName" placeholder="Enter teacher's name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="batch" className="form-label">Batch</label>
                                <input type="text" className="form-control" id="batch" name="batch" placeholder="Enter batch name" required />
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
                                <label htmlFor="orderDate" className="form-label">Order Date</label>
                                <input type="date" className="form-control" id="orderDate" name="orderDate" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="remarks" className="form-label">Remarks</label>
                                <textarea className="form-control" id="remarks" name="remarks" placeholder="Enter remarks" required defaultValue={""} 
                                 />
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
