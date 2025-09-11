/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.scss";

const NewsAndAnnouncements = () => {
  return (
    <div className="news-and-announcements-container">
      <h4 className="header">News and announcements</h4>

      <div className="news-and-announcements-list">
        <div className="news-and-announcements-item">
          <a href="https://www.capitalgroup.com/retirement/participant/news/contribution-limits.html" target="_blank" rel="noopener noreferrer">2025 contribution limits</a>
        </div>
        <div className="news-and-announcement-divider"></div>
        <div className="news-and-announcements-item">
          <a href="https://www.capitalgroup.com/retirement/participant/af-pdf/shareholder/irgefm-064_statetaxsch.pdf" target="_blank" rel="noopener noreferrer">To review your state with holding impacts</a>
        </div>
        <div className="news-and-announcement-divider"></div>
        <div className="news-and-announcements-item">
          <b>Access 1099-R tax forms and year-end statements</b>
          <br />
          For distributions taken in 2024, 1099-R <a href="#">tax forms can be found online</a> on January 10. Year-end statements can also be found online in the same location.
          <br />
          <br />
          You can sign up today for electronic notification of new tax forms and transaction confirmations by <a href="#">updating your preferences</a>.
        </div>
        <div className="news-and-announcement-divider"></div>
      </div>

    </div>
  );
};

export default NewsAndAnnouncements;
