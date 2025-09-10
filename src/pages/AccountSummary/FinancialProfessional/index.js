import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./styles.scss";

const FinancialProfessional = () => {
  return (
    <div className="financial-professional-container">
      <h4 className="header">Financial professional</h4>
      <div className="financial-professional-content"> 
        <div className="title">
            ABC COMPANY "DRPP ONLY" - 401K
        </div>    
        <div className="name">
            David J Faltys
        </div>
        <div className="address">
            133 Crown Hill Plz Excelsior Springs Missouri 64024
        </div>

        <div className="contact-item">
          <CallIcon sx={{
            width: 14,
            height: 14,
            color: '#fff',
            backgroundColor: '#005f9e',
            borderRadius: '50%',
            padding: '5px',
          }} 
          />
          <a href="tel:1234567890">(816) 630-9442</a>
        </div>

        <div className="contact-item">
          <EmailIcon   sx={{
            width: 14,
            height: 14,
            color: '#fff',
            backgroundColor: '#005f9e',
            borderRadius: '50%',
            padding: '5px',
          }} 
          />
          <a href="mailto:DAVID.FALTYS@EDWARDJONES.COM">DAVID.FALTYS@EDWARDJONES.COM</a>
        </div>
      </div>
    </div>
  );
};

export default FinancialProfessional;
