import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import ProductsGrid from "../components/productsGrid/productsGrid";
import { useLoadingContext } from "../contexts/loadingContext";
import { getAllSpeakers } from "../utils/apiCalls.js";
// import { speakersList } from "../data/speakersData";

export default function Speakers() {
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0
  const [speakers, setSpeakers] = useState([]);
  const { setLoading } = useLoadingContext();
  useEffect(() => {
    getAllSpeakers(setLoading, setSpeakers);
  }, []);
  return (
    <div>
      <Navbar />
      <ProductsGrid products={speakers} />
    </div>
  );
}
