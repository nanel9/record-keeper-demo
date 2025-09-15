import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainMenu from '../../components/MainMenu';
import AccountSummary from '../AccountSummary';
import MyPortfolio from '../MyPortfolio';
import Contributions from '../Contributions';
import ChangeContributions from '../ChangeContributions';
import GoalsCalculator from '../GoalsCalculator';
import SavingAccounts from '../SavingAccounts';
import ChangeInvestments from '../ChangeInvestments';
import LoansAndWithdrawals from '../LoansAndWithdrawals';
import LoanRequest from '../LoanRequest';
import LoanModelingCalculator from '../LoanModelingCalculator';
import './styles.css';

const MainLayout = () => {
    return (
      <>
        <div className="main-layout-container">
          <MainMenu/>
          <Router basename="/">
            <Routes>
              <Route path="/account-summary" element={<AccountSummary />} />
              <Route path="/my-portfolio" element={<MyPortfolio />} />
              <Route path="/contributions" element={<Contributions />} />
              <Route path="/change-contributions" element={<ChangeContributions />} />
              <Route path="/goals-calculator" element={<GoalsCalculator />} />
              <Route path="/saving-accounts" element={<SavingAccounts />} />
              <Route path="/change-investments" element={<ChangeInvestments />} />
              <Route path="/loans-and-withdrawals" element={<LoansAndWithdrawals />} /> 
              <Route path="/loan-request" element={<LoanRequest />} /> 
              <Route path="/loan-modeling-calculator" element={<LoanModelingCalculator />} /> 
              <Route
                  path="*"
                  element={<Navigate to="/account-summary" replace />}
              />  
            </Routes>
          </Router>
          <div className="footer"></div>
        </div>
      </>
    );
};  

export default MainLayout;