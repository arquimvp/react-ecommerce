import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import './welcome.styles.css';

const WelcomePage = () => {
  return (
    <div className="welcome">
      <img
        src="../assets/arquimvp.webp"
        className="welcome--candidate"
        alt="me"
      />
      <h1>Bienvenido Candidato 01</h1>
      <h2 className="welcome-link" target="_blank" rel="noopener noreferrer">
        Version 1.0
      </h2>
      
      <Button variant="contained" color="primary" component={Link} to={'/shopping'}>Continuar</Button>
    </div>
  );
};

export default WelcomePage;
