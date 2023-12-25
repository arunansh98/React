import { getUserId } from "../../../utils/sessionStorageUtils";

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      resolve(error);
    };
  });
};

const handlePostChange = async (files, photo, type, handlePost) => {
  console.log("files", files);
  const base64 = await getBase64(files[0]);
  console.log("base64", base64);
  let body = { url: base64 };
  if (!photo?.url) {
    // if no background photo is set
    body = {
      type,
      userId: getUserId(),
      ...body,
    };
  } else {
    body = {
      ...photo,
      ...body,
    };
  }
  handlePost({
    ...body,
  });
};

export { getBase64, handlePostChange };
