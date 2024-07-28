import Header from "./Header";
export default function Professor() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-chalkboard-user" /> Professors</h1>
            </div>
            <hr />
            <div className="container mt-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add Professor</h5>
                        {/* Multi Columns Form */}
                        <form className="row g-3" id="professorForm">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter you email address" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Enter your mobile number" 
                                required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="qualification" className="form-label">Qualification</label>
                                <input type="text" className="form-control" id="qualification" name="qualification" placeholder="Enter your 
                                 qualification" required />
                            </div>
                            <div className="col-md-4">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" defaultChecked />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="photo" className="form-label">Photo</label>
                                <input type="file" name="photo" id="photo" required className="form-control" />
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="experience" className="form-label">Experience</label>
                                <textarea name="experience" id="experience" className="form-control" placeholder="Enter your experience" required 
                                 defaultValue={""} />
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
