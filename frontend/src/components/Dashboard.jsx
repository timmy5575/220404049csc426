import { useNavigate, useLocation } from "react-router-dom";
import "./Dashboard.css";

const courses = [
  { code: "CSC 429", title: "Artificial Intelligence", unit: 3 },
  { code: "CSC 411", title: "System Analysis", unit: 3 },
  { code: "CSC 413", title: "Net-Centric Computing", unit: 3 },
  { code: "CSC 415", title: "Structured Programming", unit: 3 },
  { code: "CSC 427", title: "Compiler Construction", unit: 3 },
];

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "admin";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">

      {/* HEADER */}
      <header className="dash-header glass">
        <div className="dash-brand">
          <span className="dash-logo">🎓</span>
          <span className="dash-school">AAUA Student Portal</span>
        </div>

        <div className="dash-user">
          <span className="dash-avatar">{username[0].toUpperCase()}</span>
          <span className="dash-username">{username}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* WELCOME BANNER */}
      <div className="dash-banner glass">
        <div>
          <h2>Welcome back, <span className="highlight">{username}</span> 👋</h2>
          <p>400 Level &bull; Computer Science &bull; 2024/2025 Session</p>
        </div>
        <div className="matric-badge">
          <span>Matric No</span>
          <strong>220404049</strong>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="dash-stats">
        <div className="stat-card glass">
          <span className="stat-icon">📚</span>
          <div>
            <p className="stat-value">5</p>
            <p className="stat-label">Courses</p>
          </div>
        </div>

        <div className="stat-card glass">
          <span className="stat-icon">📋</span>
          <div>
            <p className="stat-value">15</p>
            <p className="stat-label">Credit Units</p>
          </div>
        </div>

        <div className="stat-card glass">
          <span className="stat-icon">✅</span>
          <div>
            <p className="stat-value">87%</p>
            <p className="stat-label">Attendance</p>
          </div>
        </div>
      </div>

      {/* COURSE TABLE */}
      <div className="dash-section glass">
        <h3 className="section-title">Registered Courses</h3>

        <table className="course-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, index) => (
              <tr key={index}>
                <td>{c.code}</td>
                <td>{c.title}</td>
                <td>{c.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="dash-footer">
        <p>Adekunle Ajasin University, Akungba-Akoko &bull; CSC 426 Assignment</p>
      </footer>

    </div>
  );
}

export default Dashboard;