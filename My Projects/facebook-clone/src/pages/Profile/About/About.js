import { useContext } from "react";
import Card from "../../../shared/components/Card/Card";
import VerticalTabs from "../../../shared/components/VerticalTabs/VerticalTabs";
import "./About.css";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor/BlueOutlineAnchor";
import { FaLock } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { TabsContext } from "../Profile";
import { FaMale } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import TextWithIcons from "../../../shared/components/TextWithIcons/TextWithIcons";
import { MdGroups2 } from "react-icons/md";
import { BsCake2Fill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

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

  const contactField = (
    <TextWithIcons
      label="6370907287"
      value="Mobile"
      className="pt-8 pr-4"
      leftIcon={IoCall}
      rightIcons={{
        left: FaLock,
        right: VscEdit,
      }}
    />
  );

  const overviewContent = (
    <div className="pt-5 pb-10">
      <BlueOutlineAnchor value="Add a workplace" className="pt-5" />
      <BlueOutlineAnchor value="Add secondary school" className="pt-8" />
      <BlueOutlineAnchor value="Add university" className="pt-8" />
      <BlueOutlineAnchor value="Add current city" className="pt-8" />
      <BlueOutlineAnchor value="Add a workplace" className="pt-8" />
      <BlueOutlineAnchor value="Add home town" className="pt-8" />
      <BlueOutlineAnchor value="Add a relationship status" className="pt-8" />
      {contactField}
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

  const relationshipContent = (
    <div className="pt-3">
      <BlueOutlineAnchor
        label="Relationship"
        value="Add a relationship status"
      />
      <BlueOutlineAnchor
        label="Family members"
        value="Add family member"
        className="pt-8"
      />
    </div>
  );

  const detailsContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor
        label="About You"
        value="Write some details about yourself"
      />
      <BlueOutlineAnchor
        label="Name pronunciation"
        value="Add a name pronunciation"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Other names"
        value="Add a nickname, a birth name etc."
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Favourite Quotes"
        value="Add your favourite quotations"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Blood Donations"
        value="Learn about blood donations"
        className="pt-8"
      />
    </div>
  );

  const lifeContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor label="Life events" value="Add a life event" />
      <TextWithIcons
        className="mt-4"
        label="No life events to show"
        leftIcon={FaRegStar}
      />
    </div>
  );

  const contactContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor
        label="Contact info"
        value="Add a phone number confirmation badge"
      />
      {contactField}
      <BlueOutlineAnchor
        label="Websites and social links"
        value="Add a website"
        className="pt-8"
      />
      <BlueOutlineAnchor value="Add a social link" className="pt-6" />
      <BlueOutlineAnchor
        label="Basic info"
        value="Add a language"
        className="pt-8"
      />
      <TextWithIcons
        label="Male"
        value="Gender"
        className="pt-8 pr-4"
        leftIcon={FaMale}
        rightIcons={{
          left: MdOutlinePublic,
          right: VscEdit,
        }}
      />
      <TextWithIcons
        label="27 January"
        value="Birth date"
        className="pt-8 pr-4"
        leftIcon={BsCake2Fill}
        rightIcons={{
          left: MdGroups2,
          right: VscEdit,
        }}
      />
      <TextWithIcons
        label="1993"
        value="Birth year"
        className="pt-8 pr-4"
        rightIcons={{
          left: MdGroups2,
        }}
      />
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
      id: "contact",
      label: "Content and basic info",
      renderTab,
      renderActiveTab,
      content: contactContent,
    },
    {
      id: "family",
      label: "Family and relationships",
      renderTab,
      renderActiveTab,
      content: relationshipContent,
    },
    {
      id: "details",
      label: "Details about you",
      renderTab,
      renderActiveTab,
      content: detailsContent,
    },
    {
      id: "life",
      label: "Life events",
      renderTab,
      renderActiveTab,
      content: lifeContent,
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
