import classNames from "classnames";
import "./VerticalTabs.css";

function VerticalTabs({
  tabOptions,
  tabHeader,
  activeTab,
  onTabClick,
  className,
}) {
  className = classNames(className, "flex flex-row");

  const renderTab = (tab) => {
    let { renderTab, label, id } = tab;
    if (id !== activeTab) {
      if (renderTab) {
        return renderTab(tab);
      }
      return label;
    } else {
      return renderActiveTab(tab);
    }
  };

  const renderActiveTab = (tab) => {
    let { renderActiveTab, label } = tab;
    if (renderActiveTab) {
      return renderActiveTab(tab);
    }
    return label;
  };

  const tabs = tabOptions.map((option) => {
    return (
      <div
        className="tab"
        onClick={() => onTabClick(option.id)}
        key={option.id}
      >
        {renderTab(option)}
      </div>
    );
  });

  const tabsContent = tabOptions?.find((tab) => tab?.id === activeTab)?.content;

  return (
    <>
      <div className={className}>
        <div className="tabs">
          {tabHeader}
          {tabs}
        </div>
        <div className="tabs-divider"></div>
        <div className="tabs-content">{tabsContent || "no active tab!"}</div>
      </div>
    </>
  );
}

export default VerticalTabs;
