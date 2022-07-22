import React from "react";
import "../style/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Container">
        <h3>Grow Lease</h3>
        <div className="profile">
          <div>
            <img src="https://via.placeholder.com/80x80.png" alt="" />
          </div>
          <div className="info">
            <p>
              <strong>Chandrakant Deore</strong>
              <br /> <div id="admin">Admin</div>
            </p>
          </div>
        </div>
        <div className="pages">
          <div>
            <h5>Dashboard</h5>
          </div>
          <div>
            <h5>Deals</h5>
          </div>
          <div>
            <h5>Emails</h5>
          </div>
          <div>
            <h5>Investors</h5>
          </div>
          <div>
            <h5>Chat</h5>
          </div>
          <div>
            <h5>Finances</h5>
          </div>
          <hr />
          <div>
            <h5>Settings</h5>
          </div>
        </div>

        <div className="pages"></div>
      </div>
    </>
  );
}
