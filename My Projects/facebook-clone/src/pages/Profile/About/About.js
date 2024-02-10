import { useContext, useState } from "react";
import Card from "../../../shared/components/Card/Card";
import VerticalTabs from "../../../shared/components/VerticalTabs/VerticalTabs";
import "./About.css";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor/BlueOutlineAnchor";
import { FaLock } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { TabsContext } from "../Profile";

function About() {
  const { activeVerticalTab, setActiveVerticalTab } = useContext(TabsContext);

  const renderTab = (tab) => {
    return (
      <button className="btn-transparent !text-[#65676B] pl-2 flex flex-start w-full">
        {tab.label}
      </button>
    );
  };

  const renderActiveTab = (tab) => {
    return (
      <button className="btn-transparent !bg-[#ddeafb] !text-blue pl-2 flex flex-start w-full">
        {tab.label}
      </button>
    );
  };

  const overviewContent = (
    <div className="pt-5 pb-10">
      <BlueOutlineAnchor value="Add a workplace" className="pt-5" />
      <BlueOutlineAnchor value="Add secondary school" className="pt-8" />
      <BlueOutlineAnchor value="Add university" className="pt-8" />
      <BlueOutlineAnchor value="Add current city" className="pt-8" />
      <BlueOutlineAnchor value="Add a workplace" className="pt-8" />
      <BlueOutlineAnchor value="Add home town" className="pt-8" />
      <BlueOutlineAnchor value="Add a relationship status" className="pt-8" />
      <div className="flex flex-row justify-between items-center w-full pt-8 pr-4">
        <div className="flex flex-row items-center">
          <IoCall className="h-[24px] w-[24px] mr-3 text-[#65676B]" />
          <span className="flex flex-col">
            <span className="text-primary">6370907287</span>
            <span className="text-[13px]">Mobile</span>
          </span>
        </div>
        <div className="flex items-center">
          <FaLock className="mr-1 cursor-pointer hover:bg-grey p-1 h-[22px] w-[22px] rounded-[10px]" />
          <VscEdit className="cursor-pointer btn-secondary p-[4px] h-[32px] w-[32px] rounded-[50px]" />
        </div>
      </div>
    </div>
  );

  const workContent = (
    <div className="pt-3 pb-10">
      <BlueOutlineAnchor label="Work" value="Add a workplace" />
      <BlueOutlineAnchor
        label="University"
        value="Add university"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="High School"
        value="Add secondary school"
        className="pt-8"
      />
    </div>
  );

  const placesContent = (
    <div className="pt-3">
      <BlueOutlineAnchor label="Places lived" value="Add current city" />
      <BlueOutlineAnchor value="Add home town" className="pt-8" />
      <BlueOutlineAnchor value="Add city" className="pt-8" />
    </div>
  );

  const tabOptions = [
    {
      id: "overview",
      label: "Overview",
      renderTab,
      renderActiveTab,
      content: overviewContent,
    },
    {
      id: "work",
      label: "Work and education",
      renderTab,
      renderActiveTab,
      content: workContent,
    },
    {
      id: "places",
      label: "Places lived",
      renderTab,
      renderActiveTab,
      content: placesContent,
    },
    {
      id: "content",
      label: "Content and basic info",
      renderTab,
      renderActiveTab,
      content: "Content content",
    },
    {
      id: "family",
      label: "Family and relationships",
      renderTab,
      renderActiveTab,
      content: "Family content",
    },
    {
      id: "details",
      label: "Details about you",
      renderTab,
      renderActiveTab,
      content: "Details content",
    },
    {
      id: "life",
      label: "Life events",
      renderTab,
      renderActiveTab,
      content: "Life content",
    },
  ];

  return (
    <div className="about">
      <Card>
        <VerticalTabs
          activeTab={activeVerticalTab}
          setActiveTab={setActiveVerticalTab}
          tabOptions={tabOptions}
          tabHeader={<h1 className="font-bold text-[20px] pl-2 py-2">About</h1>}
        />
      </Card>
    </div>
  );
}

export default About;
