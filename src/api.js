import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sJX-7qK_d3OjGRwmJs0zn3K152qSDGauLi5aBnsw3l8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
