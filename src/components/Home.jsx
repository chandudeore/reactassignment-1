import React from "react";
import CreateDeal from "./CreateDeal";
import Navbar from "./Navbar";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <CreateDeal />
    </div>
  );
}
