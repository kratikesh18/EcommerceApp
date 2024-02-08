import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader.jsx";
import ProductTile from "../Components/ProductTile/ProductTile.jsx";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    setLoading(true);
    const response = (await axios.get(`https://fakestoreapi.com/products`))
      .data;

    if (response) {
      setLoading(false);
      setProducts(response);
    }
  };
  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
