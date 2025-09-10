import React, { useState } from "react";
import classNames from "classnames";
import "./styles.scss";

const Tabs = (props) => {

  const { tabs, type = 'button', onChange } = props;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const setActiveTabHandler = (tab) => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="cg-tabs">
      {tabs.map((tab) => (
        <button
          type="button"
          className={classNames(`cg-tab-${type}`, { active: activeTab === tab.id })}
          onClick={() => setActiveTabHandler(tab.id)}
          key={tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
