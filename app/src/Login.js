import { Link } from "react-router-dom";
export default function Login() {
    return (<>
        <main style={{ "background-image": "url(admin/assets/img/bg-7.jpg)", "background-size": "cover", "background-position": "center", "background- attachment": "fixed" }}>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <Link to="#" className="logo d-flex align-items-center w-auto">
                                        <img src="admin/assets/img/logo.ico" alt="..." />
                                        <span>Envision</span>
                                     </Link>
                                </div>{/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-Atitle text-center pb-0 fs-4">Admin Login</h5>
                                        </div>
                                        <form className="row g-3 needs-validation" action="/dashboard">
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <input type="email" name="email" className="form-control" id="eamil" 
                                                      placeholder="Enter your email 
                                                     address" required />
                                                    <div className="invalid-feedback">Please enter your email.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" 
                                                 placeholder="Enter 
                                                 your password" required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="text-start">
                                                <Link to="/forgot-password">Forgot Password?</Link>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>);
}
