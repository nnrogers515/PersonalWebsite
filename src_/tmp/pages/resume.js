import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div>
      <p className="goToHome" style={{ textAlign: "right", fontSize: 80 }}>
        <Link to="/"> Want to Rejoin? </Link>
      </p>
    </div>
  );
}
export default Resume;
