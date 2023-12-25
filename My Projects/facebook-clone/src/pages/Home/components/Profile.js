import { getUserId } from "../../../utils/sessionStorageUtils";
import "../Home.css";
import Files from "react-files";
import classNames from "classnames";
import {
  useAddPostMutation,
  useFetchPostsQuery,
  useUpdatePostMutation,
} from "../../../store";
import {
  BACKGROUND_PHOTO,
  PROFILE_PHOTO,
} from "../../../constants/postTypesConstants";
import { handlePostChange } from "../hooks/use-handle-post";

function Profile() {
  const { data, error, isFetching } = useFetchPostsQuery();

  const [addPost, addPostResults] = useAddPostMutation();

  const [updatePost, updatePostResults] = useUpdatePostMutation();

  const backGroundPhoto = data?.find((item) => item.type === BACKGROUND_PHOTO);

  const profilePhoto = data?.find((item) => item.type === PROFILE_PHOTO);

  const backClassName = classNames(
    "flex items-end justify-end mx-auto cursor-pointer w-[80%] h-[23rem] rounded-bl-[6px] rounded-br-[6px] !bg-repeat-round"
  );

  const profileClassName = classNames(
    "mt-[-5rem] cursor-pointer rounded-[100px] inline-block h-[168px] w-[168px] mr-2 !bg-repeat-round"
  );

  return (
    <div className="profile">
      <div>
        <Files
          className="cursor-pointer"
          onChange={(files) =>
            handlePostChange(
              files,
              backGroundPhoto,
              BACKGROUND_PHOTO,
              !backGroundPhoto?.url ? addPost : updatePost
            )
          }
          accepts={["image/*"]}
          clickable
        >
          <div
            style={{
              background: backGroundPhoto?.url
                ? `url("${backGroundPhoto?.url}")`
                : "#f3f3f3",
            }}
            className={backClassName}
          >
            <div className="mr-8 mb-4 rounded-[6px] px-[12px] text-[white] bg-[#00000066] border-[inherit] border-[1px] font-bold">
              Edit cover photo
            </div>
          </div>
        </Files>
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
          <h1 className="font-bold text-[#050505] text-[32px]">
            Arunansh Srivastava
          </h1>
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
