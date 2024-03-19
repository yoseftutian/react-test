import axios from "axios";

export const getAllSpeakers = async (setLoading, setSpeakers) => {
  try {
    setLoading(true);
    const response = await axios.get("http://localhost:3001/products", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5NzdiNGRhNDc3YWJmMGM0YmU3OTQiLCJpYXQiOjE3MTA4NTgxNTd9.FC3Pre2gzFzFDAx68nNnPbBEV4ca6F_JKVg2lw3_SIk",
      },
    });
    setSpeakers(response.data.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
