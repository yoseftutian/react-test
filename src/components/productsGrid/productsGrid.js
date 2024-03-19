import { nanoid } from "nanoid";
import "./productsGrid.css";
import { useState } from "react";
import { sortProducts } from "../../utils/globalFunctions";
import ToolsBar from "./toolsBar/toolsBar";

export default function ProductsGrid({ products }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);

  const productsToShow = products
    .filter((p) => p.title.includes(search))
    .sort((a, b) => sortProducts(a, b, sortBy))
    .map((product) => <GridItem key={nanoid()} item={product} />);

  return (
    <div className="grid-container">
      <ToolsBar sortBy={sortBy} setSortBy={setSortBy} setSearch={setSearch} />
      <div className="grid">
        {productsToShow.length > 0 ? productsToShow : <p>No Products Found</p>}
      </div>
    </div>
  );
}

function GridItem({ item }) {
  return (
    <div className="grid-item">
      <img src={item.img} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
