import React from "react";
import "../style/CreateDeal.css";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function CreateDeal() {
  const dealInfo = {
    companyname: "",
    amount: "",
    companyDes: "",
    otherInfo: "",
  };

  const [deal, setDeal] = useState(dealInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeal({ ...deal, [name]: value });
  };
  const dealCollectionRef = collection(db, "deals");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(dealCollectionRef, deal);
  };

  return (
    <>
      <div>
        <div className="formHandle">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h3>New Deal</h3>
              <div className="btn">
                <button type="reset" id="cancel">
                  Cancel
                </button>
                <button id="live" type="submit">
                  Make it Live
                </button>
              </div>
            </div>

            <div className="logo">
              <label htmlFor="logo" className="label-1">
                Upload Logo of Your Company
              </label>
              <br />
              <input type="file" name="logo" />
            </div>

            <div className="cname">
              <div className="inputType2">
                <label htmlFor="companyname" className="label-1">
                  Company Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Name of Company"
                  name="companyname"
                  onChange={handleChange}
                />
              </div>
              <div className="inputType2">
                <label htmlFor="amount" className="label-1">
                  Amount to be Raised
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter price in Crore"
                  name="amount"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="deal">
              <label htmlFor="companyDes" className="label-1">
                Company Description
              </label>
              <br />
              <textarea
                name="companyDes"
                placeholder="Enter Description of Company"
                onChange={handleChange}
                className="text-1"
              ></textarea>
            </div>

            <div className="logo">
              <label htmlFor="graphs" className="label-1">
                Upload Graphs about performance history
              </label>
              <br />
              <input type="file" placeholder="Click to upload" name="graphs" />
            </div>

            <div>
              <label htmlFor="otherInfo" className="label-1">
                Any other information about Performance History
              </label>
              <br />
              <textarea
                className="text-1"
                name="otherInfo"
                placeholder="Enter any other Performance History"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
