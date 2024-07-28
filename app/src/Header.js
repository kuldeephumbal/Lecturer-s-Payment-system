import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to close sidebar on link click (for mobile and tablet screens)
  const closeSidebarOnLinkClick = () => {
    if (window.innerWidth <= 992) { 
      setSidebarOpen(false);
    }
  };

  // Add/remove the class from the body based on sidebarOpen state
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
  }, [sidebarOpen]);

  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/dashboard" className="logo d-flex align-items-center">
            <img src="admin/assets/img/logo.ico" alt="Logo" />
            <span>Envision</span>
          </Link>
          <i className="fa-solid fa-bars toggle-sidebar-btn" onClick={toggleSidebar} />
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                to="/profile"
                onClick={closeSidebarOnLinkClick} >
                <i className="fa-solid fa-circle-user me-2 fa-xl" />
                <span>Kuldeep</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <aside id="sidebar" className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-table" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/course" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-layer-group" />
              <span>Courses</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/batch" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-users-line" />
              <span>Batches</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/subject" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-book" />
              <span>Subjects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/professor" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-chalkboard-user" />
              <span>Professors</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lecture" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-circle-play" />
              <span>Lectures</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/report" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-list" />
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/payment" onClick={closeSidebarOnLinkClick}>
              <i className="fa-regular fa-credit-card" />
              <span>Payments</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout" onClick={closeSidebarOnLinkClick}>
              <i className="fa-solid fa-right-from-bracket" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
