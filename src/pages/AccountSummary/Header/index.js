import React from "react";
import NorthIcon from "@mui/icons-material/North";
import "./styles.scss";

const Header = () => {
  return (
    <div className="summary-header">
      <div className="total-balance">
        <p className="plan-overview-label mb-1">Total balance as of 08/12/2025</p>
        <p className="plan-overview-value total-value">$45,724.47</p>
      </div>
      <div className="plan-overview-block">
        <p className="plan-overview-label">Vested Balance</p>
        <p className="plan-overview-value">$45,110.27</p>
      </div>
      <div className="plan-overview-block">
        <p className="plan-overview-label">Last contribution</p>
        <p className="plan-overview-value">$51,000.00</p>
      </div>
      <div className="plan-overview-block">
        <p className="plan-overview-label">Personal rate of return (YTD)*</p>
        <p className="plan-overview-value">0.23%
            <NorthIcon sx={{
                width: 22,
                height: 22,
                color: '#28a745',
            }}/>
        </p>
      </div>  
    </div>
  );
};

export default Header;
