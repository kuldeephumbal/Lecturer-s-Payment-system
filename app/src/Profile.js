import Header from "./Header";
export default function Profile() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-circle-user" /> Profile</h1>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Profile Details</h5>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" defaultValue="Kuldeep" readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" defaultValue="kuldeep@example.com" readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" defaultValue={+1234567890} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <input type="text" className="form-control" id="gender" defaultValue="Male" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Change Password</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                        <input type="password" className="form-control" id="currentPassword" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                        <input type="password" className="form-control" id="newPassword" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </main>
    </>);
}
