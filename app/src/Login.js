import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Handle success response
      setSuccess(response.data.message);
      setError(""); // Clear any previous errors

      // Redirect or perform additional actions as needed
      // For example, redirect to another page:
      // window.location.href = "/dashboard";
    } catch (err) {
      // Handle error response
      if (err.response) {
        setError(err.response.data.error || "An error occurred");
      } else {
        setError("An error occurred while contacting the server.");
      }
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
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
                  <Link to="#" className="logo d-flex align-items-center w-auto">
                    <img src="admin/assets/img/logo.ico" alt="..." />
                    <span>EnvisionPay</span>
                  </Link>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Admin Login</h5>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your email.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          value={password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="text-start">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                      {error && <div className="alert alert-danger mt-3">{error}</div>}
                      {success && <div className="alert alert-success mt-3">{success}</div>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
