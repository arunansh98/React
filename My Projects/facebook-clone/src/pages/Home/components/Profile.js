import { getUserId } from "../../../utils/sessionStorageUtils";
import "../Home.css";
import Files from "react-files";
import classNames from "classnames";
import {
  useAddPostMutation,
  useDeletePostMutation,
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
import Modal from "../../../components/Modal";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { MdUpload } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { RiDragMove2Fill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { HiPencil } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Header from "./Header";

function Profile() {
  const [addPost, addPostResults] = useAddPostMutation();
  const [updatePost, updatePostResults] = useUpdatePostMutation();
  const [deletePost, deletePhotoResults] = useDeletePostMutation();

  let { userDetails, postDetails } = useFetchProfileDetailsQuery(getUserId());
  userDetails = userDetails?.data;
  postDetails = postDetails?.data;

  const [showBackgroundPhotoModal, setShowBackgroundPhotoModal] =
    useState(false);
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);
  const [showDeleteBackgroundPhotoModal, setShowDeleteBackgroundPhotoModal] =
    useState(false);

  console.log("userDetails", userDetails);

  const backGroundPhoto = postDetails?.find(
    (item) => item.type === BACKGROUND_PHOTO
  );
  const profilePhoto = postDetails?.find((item) => item.type === PROFILE_PHOTO);

  const fullName = userDetails?.firstName + " " + userDetails?.surName;

  const backClassName = classNames(
    "flex items-end justify-end mx-auto w-[80%] h-[23rem] rounded-bl-[6px] rounded-br-[6px] !bg-repeat-round"
  );
  const profileClassName = classNames(
    "mt-[-5rem] cursor-pointer rounded-[100px] inline-block h-[168px] w-[168px] mr-2 !bg-repeat-round"
  );

  const editBackgroundEl = useRef();
  const editBackgroundModalEl = useRef();
  const editProfileEl = useRef();
  const editProfileModalEl = useRef();

  useEffect(() => {
    const handleClickOutside = (event, targetEl, modalEl, setShowModal) => {
      if (!targetEl?.current) return;

      if (
        !targetEl?.current?.contains(event?.target) &&
        !modalEl?.current?.contains(event?.target)
      ) {
        setShowModal(false);
      }
    };

    const handleBackgroundClick = (event) => {
      handleClickOutside(
        event,
        editBackgroundEl,
        editBackgroundModalEl,
        setShowBackgroundPhotoModal
      );
    };

    const handleProfileClick = (event) => {
      handleClickOutside(
        event,
        editProfileEl,
        editProfileModalEl,
        setShowProfilePhotoModal
      );
    };

    document.addEventListener("click", handleBackgroundClick, true);
    document.addEventListener("click", handleProfileClick, true);

    return () => {
      document.removeEventListener("click", handleBackgroundClick);
      document.removeEventListener("click", handleProfileClick);
    };
  }, []);

  const handleDeleteBackgroundPhoto = () => {
    deletePost({
      id: backGroundPhoto?.id,
    });
  };

  const backGroundPhotoModal = (
    <AttachableModal
      targetElementRef={editBackgroundEl}
      alignVertically={"below"}
      alignHorizontally={"right"}
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
        <div
          onClick={() => {
            setShowDeleteBackgroundPhotoModal(true);
            setShowBackgroundPhotoModal(false);
          }}
        >
          <RiDeleteBin5Line className="mr-3" />
          Remove
        </div>
      </div>
    </AttachableModal>
  );

  const profilePhotoModal = (
    <AttachableModal
      targetElementRef={editProfileEl}
      alignVertically={"above"}
      alignHorizontally={"center"}
    >
      <div ref={editProfileModalEl} className="profile-photo">
        <Files
          clickable
          accepts={["image/*"]}
          onChange={(files) => {
            handlePostChange(
              files,
              profilePhoto,
              PROFILE_PHOTO,
              !profilePhoto?.url ? addPost : updatePost
            );
            setShowProfilePhotoModal(false);
          }}
        >
          <BsCamera className="mr-2" />
          Choose Profile Picture
        </Files>
        <div>
          <RxAvatar className="mr-2" />
          Create avatar profile picture
        </div>
      </div>
    </AttachableModal>
  );

  const deleteBackgroundPhotoModal = (
    <Modal>
      <div className="remove-cover-photo">
        <div>
          <h1 className="inline-flex w-[90%] justify-center text-[20px] font-[700]">
            Remove cover photo
          </h1>
          <div
            className="inline-flex p-2 border-[1px] rounded-[100px] bg-[silver] cursor-pointer"
            onClick={() => setShowDeleteBackgroundPhotoModal(false)}
          >
            <ImCross />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="mb-8 ml-2 mt-1">
          Are you sure you want to remove your cover photo?
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="hover:bg-[#f3f3f3] py-2 px-8 rounded-[6px] text-blue text-[15px] mr-2"
            onClick={() => setShowDeleteBackgroundPhotoModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue text-white rounded-[6px] text-[15px] py-2 px-8"
            onClick={() => {
              setShowDeleteBackgroundPhotoModal(false);
              handleDeleteBackgroundPhoto();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );

  return (
    <div className="profile">
      {/* <Header /> */}
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
            onClick={() => setShowBackgroundPhotoModal(true)}
            ref={editBackgroundEl}
            className="mr-8 mb-4 rounded-[6px] px-[12px] py-[6px] text-[white] bg-[#00000066] border-[inherit] border-[1px] font-bold pointer-events-auto cursor-pointer"
          >
            <div className="horizontal-align items-center">
              <BsCamera className="mr-2 text-[15px]" />
              Edit cover photo
            </div>
          </div>
          {showBackgroundPhotoModal && backGroundPhotoModal}
          {showDeleteBackgroundPhotoModal && deleteBackgroundPhotoModal}
        </div>
      </div>
      <div className="horizontal-align ml-[14%]">
        <div
          ref={editProfileEl}
          style={{
            background: profilePhoto?.url
              ? `url("${profilePhoto?.url}")`
              : 'url("https://scontent.fdel27-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CO5dz350V7MAX9oEHkS&_nc_ht=scontent.fdel27-1.fna&oh=00_AfC2_i7ts-u27DsAmbCwU6ZTXuZL6B4htbCbjRlBlARbTg&oe=65AE49B8")',
          }}
          className={profileClassName}
          onClick={() => setShowProfilePhotoModal(true)}
        ></div>
        {showProfilePhotoModal && profilePhotoModal}
        <div className="profile-photo-section">
          <div className="flex flex-col">
            <h1 className="font-bold text-[#050505] text-[32px]">{fullName}</h1>
            <a
              href=""
              className="font-[600] text-[15px] text-[#65676B] hover:underline"
            >
              75 friends
            </a>
          </div>
          <div className="flex flex-row items-center">
            <button className="bg-blue text-white rounded-[6px] text-[15px] py-2 px-4 flex flex-row justify-between font-[600] mr-2">
              <label className="mr-2 cursor-pointer">+</label>
              <label className="cursor-pointer">Add to story</label>
            </button>
            <button className="bg-[#f3f3f3] text-[#050505] rounded-[6px] text-[15px] py-2 px-4 flex flex-row justify-between items-center font-[600] mr-2">
              <HiPencil className="mr-2 cursor-pointer" />
              <label className="cursor-pointer">Edit profile</label>
            </button>
            <button className="bg-[#f3f3f3] text-[#050505] rounded-[6px] text-[15px] py-3 px-4 flex flex-row justify-between items-center font-[600]">
              <IoIosArrowDown className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
