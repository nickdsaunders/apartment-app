import React, { useState } from "react";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to NuPlace</h1>
        <h3>Your new place is waiting</h3>
        <a href="/apartmentindex">See Listings</a>
      </div>
    </>
  );
};
export default Home;
