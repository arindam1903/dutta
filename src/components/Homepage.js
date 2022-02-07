import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div className="levelList">
      <div className="scoreBox">
        {/* <div>Highest Score</div>
          <div>Time Duration:09</div>
          <div>Number of flipped:89</div>
          <div>Number of flipped:89</div> */}
        <div>Highest Score</div>
        <table>
          <tr>
            <th>Level</th>
            <th>Best Score</th>
            <th>Last Score</th>
          </tr>
          <tr>
            <td>90</td>
            <td>90</td>
            <td>90</td>
          </tr>
        </table>
      </div>
      <div>
        <div>
          <div className="levelKey">
            <Link to="/easy" style={{ textDecoration: "none" }}>
              <p>Easy</p>
            </Link>
          </div>
          <div className="levelKey">
            <Link to="/medium" style={{ textDecoration: "none" }}>
              <p>Medium</p>
            </Link>
          </div>
          <div className="levelKey">
            <Link to="/hard" style={{ textDecoration: "none" }}>
              <p>Hard</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
