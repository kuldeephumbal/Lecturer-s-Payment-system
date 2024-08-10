import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value); 
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiAddress = "http://localhost:5000/login";
    axios.post(apiAddress, {
        email: email,
        password: password,
      }).then((response) => {
        const data = response.data;
        if (data.length > 0) {
          showMessage("Login successful.");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          showError("There was an error logging in!");
        }
      }).catch((error) => {
        showError("Invalid email or password");
      });
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
      <ToastContainer />
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <div className="logo d-flex align-items-center w-auto">
                    <img src="admin/assets/img/logo.ico" alt="..." />
                    <span>EnvisionPay</span>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Admin Login
                      </h5>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit}
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
                      <div className="col-12 mb-3">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
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
                      <div className="col-12 ">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
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
  );
}
