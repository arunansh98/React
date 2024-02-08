import classNames from "classnames";
import PropTypes from "prop-types";
import "./Tabs.css";

function Tabs({ tabs, activeTab, setActiveTab, className }) {
  if (activeTab === undefined) {
    activeTab = tabs?.[0]?.id;
  }

  const hasButton = tabs.filter((tab) => tab.type === "button").length > 0;

  const tabClassName = classNames("", hasButton && "grow-0");

  const buttonClassName = "grow";

  const getHeader = (tab) => {
    const { renderHeader, label } = tab;
    if (renderHeader) {
      return renderHeader(tab);
    } else {
      return label;
    }
  };

  const getActiveHeader = (tab) => {
    const { renderActiveHeader, label } = tab;
    if (renderActiveHeader) {
      return renderActiveHeader(tab);
    } else {
      return label;
    }
  };

  const getButton = (button) => {
    const { renderButton, label } = button;
    if (renderButton) {
      return renderButton(button);
    } else {
      return label;
    }
  };

  const handleButtonClick = (button) => {
    const { onClick } = button;
    onClick(button);
  };

  const header = tabs?.map((tab) => {
    if (tab.type === "tab") {
      return (
        <div
          className={tabClassName}
          key={tab?.id}
          onClick={() => setActiveTab(tab?.id)}
        >
          {tab?.id === activeTab ? getActiveHeader(tab) : getHeader(tab)}
        </div>
      );
    } else if (tab.type === "button") {
      return (
        <div
          className={buttonClassName}
          key={tab.id}
          onClick={() => handleButtonClick(tab)}
        >
          {getButton(tab)}
        </div>
      );
    } else {
      return tab.label;
    }
  });

  const content = tabs?.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={className}>
      <div className="tab-header">{header}</div>
      <div className="tab-content">{content}</div>
    </div>
  );
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      renderHeader: PropTypes.func,
      renderActiveHeader: PropTypes.func,
      renderButton: PropTypes.func,
      content: PropTypes.node,
    })
  ),
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
