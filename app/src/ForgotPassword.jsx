import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/forgot-password",
        { email }
      );
      setMessage(response.data.message); // Display success message
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setMessage("Error sending password reset email.");
    }
  };

  return (
    <>
      <main
        style={{
          backgroundImage: "url(admin/assets/img/bg-7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to="#"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="admin/assets/img/logo.ico" alt="..." />
                      <span>EnvisionPay</span>
                    </Link>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Reset your password
                        </h5>
                      </div>
                      <form
                        className="row g-3 needs-validation"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter your email address"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email address.
                            </div>
                          </div>
                        </div>
                        <div className="text-start">
                          <p>
                            <Link to="/">
                              <i className="fa-solid fa-angle-left fa-sm" />{" "}
                              Back to login
                            </Link>
                          </p>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                        {message && (
                          <div className="col-12 mt-2">
                            <p>{message}</p>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
