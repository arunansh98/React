import Card from "../../../shared/components/Card";
import TextAreaInput from "../../../shared/components/TextAreaInput";
import { useUpdateUserDetailsMutation } from "../../../store";
import "./Posts.css";
import { useState } from "react";
import { MdOutlinePublic } from "react-icons/md";

function Posts({ userDetails }) {
  const [showBioInput, setShowBioInput] = useState(false);

  const [updateUserDetails, updateUserDetailsResults] =
    useUpdateUserDetailsMutation();

  const bio = userDetails?.bio ? userDetails?.bio : "";

  const [bioInput, setBioInput] = useState(bio);

  const leftCards = (
    <div className="left-cards">
      <Card className="p-[15px]">
        <h1>Intro</h1>
        {bio && <span className="block text-center">{bio}</span>}
        {!showBioInput && (
          <button
            className="grey-button"
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
              <div>
                <button
                  className="grey-button !w-[fit-content] mr-2 !px-4 !mt-[0px]"
                  onClick={() => {
                    setBioInput("");
                    setShowBioInput(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={bioInput === bio}
                  className="save grey-button !w-[fit-content] !px-4 !mt-[0px]"
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
        <button className="grey-button">Edit details</button>
        <button className="grey-button">Add Featured</button>
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

  return (
    <div className="posts">
      {leftCards}
      {rightCards}
    </div>
  );
}

export default Posts;
