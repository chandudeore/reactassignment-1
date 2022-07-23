import React from "react";
import "../style/CreateDeal.css";

export default function CreateDeal() {
  return (
    <>
      <div>
        <div className="inputText">
          <input type="text" placeholder="search for company" />
        </div>
        <div className="formHandle">
          <form>
            <div className="header">
              <h3>New Deal</h3>
              <div className="btn">
                <button id="cancel">Cancel</button>
                <button id="live">Make it Live</button>
              </div>
            </div>
            <div className="logo">
              <label htmlFor="logo">Upload Logo of Your Company</label>
              <br />
              <input type="text" placeholder="Click to upload" />
            </div>
            <div className="cname">
              <div className="inputType2">
                <label htmlFor="companyname">Company Name</label>
                <br />
                <input type="text" placeholder="Enter Name of Company" />
              </div>
              <div className="inputType2">
                <label htmlFor="amount">Amount to be Raised</label>
                <br />
                <input type="text" placeholder="Enter price in Crore" />
              </div>
            </div>
            <label htmlFor="companyDes">Company Description</label>
            <textarea
              name="companyDes"
              placeholder="Enter Description of Company"
            ></textarea>
            <label htmlFor="graphs">
              Upload Graphs about performance history
            </label>
            <input type="text" placeholder="Click to upload" />
            <label htmlFor="otherInfo">
              Any other information about Performance History
            </label>
            <textarea
              name="otherInfo"
              placeholder="Enter any other Performance History"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}
