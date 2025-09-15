/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.scss";

const takeActionItems = [
  {
    title: "Manage contributions",
    href: "/#/contributions",
  },
  {
    title: "Manage investments",
    href: "/#/my-portfolio",
  },
  {
    title: "Manage beneficiaries",
    href: "#",
  },
  {
    title: "Request a loan",
    href: "/#/loans-and-withdrawals",
  },
  {
    title: "Request a withdrawal",
    href: "/#/loans-and-withdrawals",
  },
  {
    title: "Update communication preferences",
    href: "#",
  },
  {
    title: "Update contact information",
    href: "#",
  },
];

const reviewItems = [
  {
    title: "View statements & account activity",
    href: "#",
  },
  {
    title: "View portfolio & investment results",
    href: "/#/my-portfolio",
  },
  {
    title: "Research investments",
    href: "#",
  },
  {
    title: "Review plan information",
    href: "#",
  },
];

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h4 className="header">Quick links</h4>
      <div className="quick-links-section">
        <div className="quick-links-title">Take Action</div>
        <div className="quick-links-list">
          {takeActionItems.map((item, index) => (
            <div className="quick-link-item" key={index}>
              <a href={item.href}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="quick-links-section">
        <div className="quick-links-title">Review</div>
        <div className="quick-links-list">
          {reviewItems.map((item, index) => (
            <div className="quick-link-item" key={index}>
              <a href={item.href}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
