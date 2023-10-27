import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    headers: {
      Authorization: "Client-ID bT1LTPoXzypWm7fAnvT1_xSUnnXl9XPjRC-7d29S_Cc",
    },
    params: {
      query: term,
    },
  });

  return response.data;
};

export default searchImages;
