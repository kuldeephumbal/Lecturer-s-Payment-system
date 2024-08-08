import { Link } from "react-router-dom";
export default function ForgotPassword() {
    return (<>
        <main style={{ "background-image": "url(admin/assets/img/bg-7.jpg)", "background-size": "cover", "background-position": "center", 
             "background- attachment": "fixed" }}>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <Link to="#" className="logo d-flex align-items-center w-auto">
                                        <img src="admin/assets/img/logo.ico" alt="..." />
                                        <span>EnvisionPay</span>
                                    </Link>
                                </div>{/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Reset your password</h5>
                                        </div>
                                        <form className="row g-3 needs-validation" action="index.html" noValidate>
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <input type="email" name="email" className="form-control" id="email" 
                                                     placeholder="Enter your email 
                                                     address" required />
                                                    <div className="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>
                                            <div className="text-start">
                                                <p> <Link to="/"><i className="fa-solid fa-angle-left fa-sm" /> Back to login</Link></p>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Submit</button>
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
