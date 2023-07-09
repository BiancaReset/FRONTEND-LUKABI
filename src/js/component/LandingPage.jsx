import React from 'react';

const LandingPage = () => {
    return (
      <div>
        <Navbar />
        <Banner />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  };

export default LandingPage
