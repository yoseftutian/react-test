import Navbar from "../components/navbar/navbar";
import ProductsGrid from "../components/productsGrid/productsGrid";
import { speakersList } from "../data/speakersData";

export default function Speakers() {
  return (
    <div>
      <Navbar />
      <ProductsGrid products={speakersList} />
    </div>
  );
}
