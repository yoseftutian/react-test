import axios from "axios";

export const getAllSpeakers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5NzdiNGRhNDc3YWJmMGM0YmU3OTQiLCJpYXQiOjE3MTA5NDg4NjJ9.5CQZt16emcXXEaVxtZAK9xT2r8z1fJQXVjBMg8u5HF4",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export async function createNewProduct(body) {
  try {
    const response = await axios.post("http://localhost:3001/products", body, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5NzdiNGRhNDc3YWJmMGM0YmU3OTQiLCJpYXQiOjE3MTA5NDg4NjJ9.5CQZt16emcXXEaVxtZAK9xT2r8z1fJQXVjBMg8u5HF4",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
