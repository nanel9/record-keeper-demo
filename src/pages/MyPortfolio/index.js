import React, { useState } from "react";
import { Header, Tabs } from "../../components";
import Balances from "./Balances";
import Results from "./Results";
import Current from "./Current";
import ResultsTable from "./ResultsTable";
import CurrentTable from "./CurrentTable";
import BalancesTable from "./BalancesTable";
import "./styles.scss";

const MyPortfolio = () => {

  const [activeTab, setActiveTab] = useState("B");

  const tabs = [
    { id: "B", label: "Balances" },
    { id: "C", label: "Current Elections" },
    { id: "I", label: "Investment Results" },
  ];

  const headerButton = { label: "Change investments", url: "/change-investments" }

  const onChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-portfolio-container">
      <Header title="My portfolio" button={headerButton} />
      <div className="my-portfolio-content">
        <div className="my-portfolio-links">
          <a href="https://www.capitalgroup.com/retirement/participant/account/investment-options.htm?icu=icu2000&fundId=22122&fundId=22123&fundId=2250&fundId=2259&fundId=2211&fundId=2261&fundId=2262&fundId=2263&fundId=2264&fundId=2265&fundId=2266&fundId=2267&fundId=2268&fundId=2269&fundId=2282&fundId=2283&fundId=22185&fundId=26187&fundId=2221&fundId=2212&fundId=2233&fundId=2209&fundId=32&fundId=2232&fundId=2432&fundId=2532&fundId=30114&fundId=22114&fundId=24114&fundId=25114&fundId=2216&fundId=2237&fundId=2260&fundId=2207&fundId=2236&fundId=30112&fundId=23112&fundId=24112&fundId=2208&fundId=2205&fundId=2204&fundId=2214&fundId=2201&trac=true" target="_blank" rel="noopener noreferrer">View your plan investments options</a>
        </div>

        <div className="my-portfolio-card">
          <Tabs type="header" tabs={tabs} onChange={onChange}/>
          <div className="my-portfolio-card-content">
            {activeTab === "B" && <Balances />}
            {activeTab === "C" && <Current />}
            {activeTab === "I" && <Results />}
          </div>
        </div>

        <div className="my-portfolio-card">
          <div className="my-portfolio-card-content">
            {activeTab === "B" && <BalancesTable />}
            {activeTab === "I" && <ResultsTable />}
            {activeTab === "C" && <CurrentTable />}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MyPortfolio;
