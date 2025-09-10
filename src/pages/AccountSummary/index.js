import React from 'react';
import Header from './Header';
import MyBalances from './MyBalances';
import QuickLinks from './QuickLinks';
import MyRetirementGoals from './MyRetirementGoals';
import MySavings from './MySavings';
import NewsAndAnnouncements from './NewsAndAnnouncements';
import ICanRetire from './ICanRetire';
import FinancialProfessional from './FinancialProfessional';
import Notifications from './Notifications';
import './styles.scss';

const AccountSummary = () => {
    return (
        <div className="main-grid-container">
          <div className="main-grid-item grid-col-full"><Header /></div>
          <div className="main-grid-item grid-col-2 withPadding"><MyBalances /></div> 
          <div className="main-grid-item grid-col-1 withPadding"><QuickLinks /></div>
          <div className="main-grid-item grid-col-1 withPadding"><MyRetirementGoals /></div>
          <div className="main-grid-item grid-col-1 withPadding"><MySavings /></div>
          <div className="main-grid-item grid-col-1 withPadding"><NewsAndAnnouncements /></div>
          <div className="main-grid-item grid-col-1"><ICanRetire /></div>
          <div className="main-grid-item grid-col-1 withPadding"><FinancialProfessional /></div>
          <div className="main-grid-item grid-col-1 withPadding"><Notifications /></div>
        </div>
    );
};

export default AccountSummary;