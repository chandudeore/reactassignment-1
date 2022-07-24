import React from "react";
import Navbar from "./Navbar";
import "../style/All.css";

export default function AllDeal() {
  return (
    <>
      <div className="all">
        <div>
          <Navbar />
        </div>
        <div className="second-2">
          <div className="header-2">
            <div>
              <h3 className="heading">Deals</h3>
            </div>
            <div>
              <button className="new">+ Add New Deal</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
