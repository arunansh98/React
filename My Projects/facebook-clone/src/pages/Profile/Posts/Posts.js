import Card from "../../../shared/components/Card";
import TextAreaInput from "../../../shared/components/TextAreaInput";
import { useUpdateUserDetailsMutation } from "../../../store";
import "./Posts.css";
import { useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import Modal from "../../../shared/components/Modal";
import { VscClose } from "react-icons/vsc";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor";

function Posts({ userDetails }) {
  const [showBioInput, setShowBioInput] = useState(false);

  const [updateUserDetails, updateUserDetailsResults] =
    useUpdateUserDetailsMutation();

  const bio = userDetails?.bio ? userDetails?.bio : "";

  const [bioInput, setBioInput] = useState(bio);

  const [showEditDetailsModal, setShowEditDetailsModal] = useState(false);

  const editDetailsFields = [
    {
      id: "pronouns",
      label: "Pronouns",
      values: [
        {
          label: "Add pronouns to your profile",
          href: "pronouns",
        },
      ],
    },
    {
      id: "work",
      label: "Work",
      values: [{ label: "Add a workplace", href: "work" }],
    },
    {
      id: "education",
      label: "Education",
      values: [
        { label: "Add secondary school", href: "secondary" },
        { label: "Add university", href: "university" },
      ],
    },
    {
      id: "current",
      label: "Current town/city",
      values: [{ label: "Add current city", href: "current11" }],
    },
    {
      id: "home",
      label: "Home town",
      values: [{ label: "Add home town", href: "home" }],
    },
    {
      id: "relation",
      label: "Relationship",
      values: [{ label: "Add relationship status", href: "relation" }],
    },
  ];

  const leftCards = (
    <div className="left-cards">
      <Card className="p-[15px]">
        <h1>Intro</h1>
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
              <h1 className="!text-[15px] !font-normal flex flex-row items-center">
                <MdOutlinePublic className="mr-1 text-[23px]" />
                Public
              </h1>
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
        <h1>Photos</h1>
        <button className="transparent-button">See All Photos</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h1>Friends</h1>
        <button className="transparent-button">See All Friends</button>
      </Card>
    </div>
  );

  const rightCards = (
    <div className="right-cards">
      <Card className="p-[15px]">Right card</Card>
      <Card className="p-[15px]">Another Right card!</Card>
    </div>
  );

  function renderEditDetailsFields(fields) {
    console.log("fields", fields);
    return fields.map((field) => {
      console.log(field);
      return (
        <h1 key={field.id}>
          {field.label}
          {field.values.map((value) => {
            return (
              <BlueOutlineAnchor
                label={value.label}
                href={value.href}
                className="mt-3"
              />
            );
          })}
        </h1>
      );
    });
  }

  const editDetailsModal = showEditDetailsModal && (
    <Modal className="w-[700px]" onClose={() => setShowEditDetailsModal(false)}>
      <div className="edit-details-modal">
        <div className="edit-details-modal-header">
          <span className="ml-auto !font-bold !text-[20px]">Edit details</span>
          <VscClose
            className="ml-auto text-[#6d6b6b] p-[1px] bg-[#f3f3f3] rounded-[100px] h-[36px] w-[36px] cursor-pointer"
            onClick={() => setShowEditDetailsModal(false)}
          />
        </div>
        <hr />
        <div className="edit-details-modal-body">
          <h1>
            Customise your Intro
            <span>Details you select will be public.</span>
          </h1>
          {renderEditDetailsFields(editDetailsFields)}
          <div className="flex flex-row justify-between items-center">
            <h1>
              Websites
              <span className="text-[#65676B] !text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h1>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1>
              Social links
              <span className="text-[#65676B] !text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h1>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
        </div>
        <hr />
        <div className="edit-details-modal-footer">
          <button className="btn-transparent px-4 text-blue">
            Update your information
          </button>
          <div className="flex">
            <button className="btn-secondary px-4 mr-2">Cancel</button>
            <button className="btn-primary px-10">Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return (
    <div className="posts">
      {leftCards}
      {rightCards}
      {editDetailsModal}
    </div>
  );
}

export default Posts;
