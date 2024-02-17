import Card from "../../../shared/components/Card/Card";
import TextAreaInput from "../../../shared/components/TextAreaInput/TextAreaInput";
import { useUpdateUserDetailsMutation } from "../../../store";
import "./Posts.css";
import { useContext, useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import Modal from "../../../shared/components/Modal/Modal";
import { VscClose } from "react-icons/vsc";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor/BlueOutlineAnchor";
import { TabsContext } from "../Profile";
import Avatar from "../../../shared/view/Avatar/Avatar";
import { FaVideo } from "react-icons/fa6";
import { MdPhotoLibrary } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa";
import Tabs from "../../../shared/components/Tabs/Tabs";
import { RiLayoutGridFill } from "react-icons/ri";

function Posts({ userDetails }) {
  const { setActiveTab, setActiveVerticalTab } = useContext(TabsContext);

  const [showBioInput, setShowBioInput] = useState(false);

  const [updateUserDetails, updateUserDetailsResults] =
    useUpdateUserDetailsMutation();

  const bio = userDetails?.bio ? userDetails?.bio : "";

  const [bioInput, setBioInput] = useState(bio);

  const [showEditDetailsModal, setShowEditDetailsModal] = useState(false);

  const editDetailsFields = [
    {
      id: "work",
      label: "Work",
      values: [{ label: "Add a workplace", href: "work" }],
    },
    {
      id: "education",
      label: "Education",
      values: [
        { label: "Add secondary school", href: "work" },
        { label: "Add university", href: "work" },
      ],
    },
    {
      id: "current",
      label: "Current town/city",
      values: [{ label: "Add current city", href: "places" }],
    },
    {
      id: "home",
      label: "Home town",
      values: [{ label: "Add home town", href: "places" }],
    },
    {
      id: "relation",
      label: "Relationship",
      values: [{ label: "Add relationship status", href: "family" }],
    },
  ];

  const leftCards = (
    <div className="left-cards">
      <Card className="p-[15px]">
        <h2>Intro</h2>
        {bio && <span className="block text-center">{bio}</span>}
        {!showBioInput && (
          <button
            className="btn-wide"
            onClick={() => {
              setBioInput(bio);
              setShowBioInput(true);
            }}
          >
            {bio ? "Edit Bio" : "Add Bio"}
          </button>
        )}
        {showBioInput && (
          <>
            <TextAreaInput
              placeholder="Describe who you are"
              maxLength="101"
              value={bioInput}
              onChange={(event) => setBioInput(event.target.value)}
            />
            <div className="flex flex-row justify-end text-[13px] text-[#65676B]">
              {101 - bioInput.length} characters remaining
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <span className="text-primary font-normal flex flex-row items-center">
                <MdOutlinePublic className="mr-1 text-[23px]" />
                Public
              </span>
              <div className="flex">
                <button
                  className="btn-secondary btn-small mr-2"
                  onClick={() => {
                    setBioInput("");
                    setShowBioInput(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={bioInput === bio}
                  className="btn-small save"
                  onClick={() => {
                    setShowBioInput(false);
                    updateUserDetails({
                      id: userDetails.id,
                      bio: bioInput,
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )}
        <button
          className="btn-wide"
          onClick={() => setShowEditDetailsModal(true)}
        >
          Edit details
        </button>
        <button className="btn-wide">Add Featured</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h2>Photos</h2>
        <button className="transparent-button">See All Photos</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h2>Friends</h2>
        <button className="transparent-button">See All Friends</button>
      </Card>
    </div>
  );

  const renderHeader = (tab) => {
    return (
      <button className="btn-transparent cursor-pointertext-[#65676B] flex items-center w-full justify-center">
        {tab.label}
      </button>
    );
  };

  const renderActiveHeader = (tab) => {
    return (
      <>
        <button className="btn-transparent cursor-pointer w-full text-blue flex items-center justify-center">
          {tab.label}
        </button>
        <hr className="border-blue border-[2px]" />
      </>
    );
  };

  const rightCards = (
    <div className="right-cards">
      <Card className="p-[15px]">
        <div className="flex items-center mb-3">
          <Avatar className="h-[40px] w-[40px]" />
          <button
            style={{ width: "calc(100% - 40px)" }}
            className="text-left px-[1rem] py-[0.5rem] bg-[#F0F2F5] hover:bg-[#e3e5e7] rounded-[2rem] ml-2"
          >
            <h3 className="text-[#65676B] font-[400]">What's on your mind?</h3>
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-around mt-[1rem]">
          <span className="flex items-center">
            <FaVideo className="text-[red] h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Live video</span>
          </span>
          <span className="flex items-center">
            <MdPhotoLibrary className="text-green h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Photo/video</span>
          </span>
          <span className="flex items-center">
            <FaFlag className="text-blue h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Life event</span>
          </span>
        </div>
      </Card>
      <Card className="p-[15px]">
        <div className="flex items-center justify-between mb-3">
          <h2>Posts</h2>
          <div className="flex items-center">
            <button className="btn-secondary px-3 mr-2">
              <GiSettingsKnobs className="rotate-90 mr-1" />
              Filters
            </button>
            <button className="btn-secondary px-3">
              <IoMdSettings className="mr-1" />
              Manage posts
            </button>
          </div>
        </div>
        <hr />
        <Tabs
          tabs={[
            {
              id: "list",
              label: (
                <>
                  <FaList className="mr-1" />
                  List view
                </>
              ),
              renderHeader,
              renderActiveHeader,
              type: "tab",
              content: <Card>"List content"</Card>,
            },
            {
              id: "grid",
              label: (
                <>
                  <RiLayoutGridFill className="mr-1" />
                  Grid view
                </>
              ),
              renderHeader,
              renderActiveHeader,
              type: "tab",
              content: "grid content",
            },
          ]}
          isFullWidth
        />
      </Card>
    </div>
  );

  let handleBlueAnchorClick = (value) => {
    setShowEditDetailsModal(false);
    setActiveTab("about");
    setActiveVerticalTab(value?.href);
  };

  let renderEditDetailsFields = (fields) => {
    return fields.map((field) => {
      return (
        <div key={field.id}>
          {field.values.map((value, index) => {
            return (
              <BlueOutlineAnchor
                className="mt-5"
                label={index === 0 && field.label}
                value={value.label}
                onClick={() => handleBlueAnchorClick(value)}
              />
            );
          })}
        </div>
      );
    });
  };

  const editDetailsModal = showEditDetailsModal && (
    <Modal className="w-[700px]" onClose={() => setShowEditDetailsModal(false)}>
      <div className="edit-details-modal">
        <div className="edit-details-modal-header">
          <h2 className="ml-auto">Edit details</h2>
          <VscClose
            className="ml-auto text-[#6d6b6b] p-[1px] bg-[#f3f3f3] rounded-[100px] h-[36px] w-[36px] cursor-pointer"
            onClick={() => setShowEditDetailsModal(false)}
          />
        </div>
        <hr />
        <div className="edit-details-modal-body">
          <h3 className="font-[600]">
            Customise your Intro
            <span className="">Details you select will be public.</span>
          </h3>
          {renderEditDetailsFields(editDetailsFields)}
          <div className="flex flex-row justify-between items-center mt-5">
            <h3 className="font-[600]">
              Websites
              <span className="!text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h3>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
          <div className="flex flex-row justify-between items-center mt-5">
            <h3 className="font-[600]">
              Social links
              <span className="!text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h3>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
        </div>
        <hr />
        <div className="edit-details-modal-footer">
          <button
            className="btn-transparent px-4 text-blue"
            onClick={() => handleUpdateInformation()}
          >
            Update your information
          </button>
          <div className="flex">
            <button
              className="btn-secondary px-4 mr-2"
              onClick={() => setShowEditDetailsModal(false)}
            >
              Cancel
            </button>
            <button className="btn-primary px-10">Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );

  const handleUpdateInformation = () => {
    setShowEditDetailsModal(false);
    setActiveTab("about");
    setActiveVerticalTab("overview");
  };

  return (
    <div className="posts">
      {leftCards}
      {rightCards}
      {editDetailsModal}
    </div>
  );
}

export default Posts;
