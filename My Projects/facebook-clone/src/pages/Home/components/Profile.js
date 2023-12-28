import { getUserId } from "../../../utils/sessionStorageUtils";
import "../Home.css";
import Files from "react-files";
import classNames from "classnames";
import {
  useAddPostMutation,
  useFetchProfileDetailsQuery,
  useUpdatePostMutation,
} from "../../../store";
import {
  BACKGROUND_PHOTO,
  PROFILE_PHOTO,
} from "../../../constants/postTypesConstants";
import { handlePostChange } from "../hooks/use-handle-post";
import { BsCamera } from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import AttachableModal from "../../../components/AttachableModal";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { MdUpload } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { RiDragMove2Fill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

function Profile() {
  const [addPost, addPostResults] = useAddPostMutation();

  const [updatePost, updatePostResults] = useUpdatePostMutation();

  let { userDetails, postDetails } = useFetchProfileDetailsQuery(getUserId());

  const [showBackgroundPhotoModal, setShowBackgroundPhotoModal] = useState({
    show: false,
    targetElement: "",
  });

  userDetails = userDetails?.data;
  postDetails = postDetails?.data;

  console.log("userDetails", userDetails);

  const backGroundPhoto = postDetails?.find(
    (item) => item.type === BACKGROUND_PHOTO
  );

  const profilePhoto = postDetails?.find((item) => item.type === PROFILE_PHOTO);

  const fullName = userDetails?.firstName + " " + userDetails?.surName;

  const backClassName = classNames(
    "flex items-end justify-end mx-auto cursor-pointer w-[80%] h-[23rem] rounded-bl-[6px] rounded-br-[6px] !bg-repeat-round"
  );

  const profileClassName = classNames(
    "mt-[-5rem] cursor-pointer rounded-[100px] inline-block h-[168px] w-[168px] mr-2 !bg-repeat-round"
  );

  const editBackgroundEl = useRef();

  const editBackgroundModalEl = useRef();

  console.log("showBackgroundPhotoModal", showBackgroundPhotoModal);

  useEffect(() => {
    const handler = (event) => {
      if (!editBackgroundEl.current) {
        return;
      }

      if (
        !editBackgroundEl.current.contains(event.target) &&
        !editBackgroundModalEl.current.contains(event.target)
      ) {
        setShowBackgroundPhotoModal(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="profile">
      <div>
        <div
          style={{
            background: backGroundPhoto?.url
              ? `url("${backGroundPhoto?.url}")`
              : "#f3f3f3",
          }}
          className={backClassName}
        >
          <div
            onClick={(event) => {
              console.log("event", event);
              setShowBackgroundPhotoModal({
                show: true,
                targetElement: event.target.element,
              });
            }}
            ref={editBackgroundEl}
            id="edit-background"
            className="mr-8 mb-4 rounded-[6px] px-[12px] py-[6px] text-[white] bg-[#00000066] border-[inherit] border-[1px] font-bold pointer-events-auto"
          >
            <div className="horizontal-align items-center">
              <BsCamera className="mr-2 text-[15px]" />
              Edit cover photo
            </div>
          </div>
          {showBackgroundPhotoModal?.show && (
            <AttachableModal
              targetElement={document.getElementById("edit-background")}
              alignVertically={"below"}
              alignHorizontally={"left"}
            >
              <div className="cover-photo" ref={editBackgroundModalEl}>
                <div>
                  <BsFileEarmarkImageFill className="mr-3" />
                  Choose cover photo
                </div>
                <Files
                  className="cursor-pointer"
                  clickable
                  accepts={["image/*"]}
                  onChange={(files) => {
                    handlePostChange(
                      files,
                      backGroundPhoto,
                      BACKGROUND_PHOTO,
                      !backGroundPhoto?.url ? addPost : updatePost
                    );
                    setShowBackgroundPhotoModal(false);
                  }}
                >
                  <MdUpload className="mr-3" />
                  Upload photo
                </Files>
                <div>
                  <RxAvatar className="mr-3" />
                  Create avatar cover photo
                </div>
                <div>
                  <RiDragMove2Fill className="mr-3" />
                  Reposition
                </div>
                <hr className="mb-1 mt-1 px-1" />
                <div>
                  <RiDeleteBin5Line className="mr-3" />
                  Remove
                </div>
              </div>
            </AttachableModal>
          )}
        </div>
      </div>
      <div className="horizontal-align ml-[14%]">
        <Files
          className="cursor-pointer"
          accepts={["image/*"]}
          clickable
          onChange={(files) =>
            handlePostChange(
              files,
              profilePhoto,
              PROFILE_PHOTO,
              !profilePhoto?.url ? addPost : updatePost
            )
          }
        >
          <div
            style={{
              background: profilePhoto?.url
                ? `url("${profilePhoto?.url}")`
                : 'url("https://scontent.fdel27-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CO5dz350V7MAX9oEHkS&_nc_ht=scontent.fdel27-1.fna&oh=00_AfC2_i7ts-u27DsAmbCwU6ZTXuZL6B4htbCbjRlBlARbTg&oe=65AE49B8")',
            }}
            className={profileClassName}
          ></div>
        </Files>
        <div className="inline-flex flex-col">
          <h1 className="font-bold text-[#050505] text-[32px]">{fullName}</h1>
          <a
            href=""
            className="font-[600] text-[15px] text-[#65676B] hover:underline"
          >
            75 friends
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
