import PropTypes from "prop-types";
import { useState } from "react";

function Tabs({ tabs, activeTab, className }) {
  if (activeTab === undefined) {
    activeTab = tabs?.[0]?.id;
  }

  const [active, setActive] = useState(activeTab);

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

  const header = tabs?.map((tab) => {
    return (
      <div key={tab?.id} onClick={() => setActive(tab?.id)}>
        {tab?.id === active ? getActiveHeader(tab) : getHeader(tab)}
      </div>
    );
  });

  const content = tabs?.find((tab) => tab.id === active)?.content;

  return (
    <div className={className}>
      <div className="flex flex-row">{header}</div>
      {content}
    </div>
  );
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      renderHeader: PropTypes.func.isRequired,
      renderActiveHeader: PropTypes.func,
      content: PropTypes.node,
    })
  ),
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
