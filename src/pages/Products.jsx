import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products &&
            products.slice(0, limit).map((product) => <Card data={product} />)}
        </div>
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-4">
            {limit < products.length && (
              <button
                className=" btn btn-warning"
                onClick={() => setLimit(limit + 4)}
              >
                Load More
              </button>
            )}
            {limit > 8 && (
              <button
                className=" btn btn-warning mx-3"
                onClick={() => setLimit(limit - 4)}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
