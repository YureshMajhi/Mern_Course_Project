import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    axios
      .get(`http://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // add to cart function
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("myCart")) || [];
    const productItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating,
      description: product.description,
      quantity: 1,
    };
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      toast.error("product already in the cart");
    } else {
      cartItems.push(productItem);
      localStorage.setItem("myCart", JSON.stringify(cartItems));
      toast.success(`${product.title} is added to cart`);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container my-5">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-3">
            <img src={product.image} alt={product.title} width={"300"} />
          </div>
          <div className="col-md-8">
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.description}</h1>
            <p className="text-secondary">
              <strong>Category: </strong>
              {product.category}
            </p>
            <div className="my-3">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
