import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 1d23jU3cKZQ5Hyto2UBgBW6E5lEee7qCMSfsV-QgJvE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImages;
