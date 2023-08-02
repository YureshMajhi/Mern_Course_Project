import React, { useEffect, useState } from "react";
// import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  /* const [localItems, setLocalItems] = useState(() => {
    const localValue = localStorage.getItem("myCart");

    if (localValue) return JSON.parse(localValue);

    return [];
  });

  const deleteLocalItem = () => {
    localStorage.removeItem("myCart");
    setLocalItems([]);
  }; */

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("myCart"));
    setProducts(cartData);
  }, []);

  return (
    <>
      {/* <div className="container-fluid mt-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {localItems && localItems.map((items) => <Card data={items} />)}
        </div>
      </div>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-md-4">
          <button className=" btn btn-warning" onClick={deleteLocalItem}>
            Clear Cart
          </button>
        </div>
      </div> */}
      <ToastContainer theme="colored" position="top-center" />
      <div className="container">
        <div className="row d-flex justify-content-between my-4">
          {products === null ? (
            <h2 className="my-4 text-danger text-center">Your Cart is empty</h2>
          ) : (
            <>
              <h2 className="text-center">Your cart items</h2>
              <div className="col-md-8 shadow">
                {products.map((item, i) => (
                  <div key={i}>
                    <hr />
                    <div className="row d-flex align-items-center">
                      <div className="col-2">
                        <img src={item.image} alt={item.title} width={"50"} />
                      </div>
                      <div className="col-3">
                        <strong>{item.title}</strong>
                      </div>
                      <div className="col-2 text-warning">
                        <span>${item.price}</span>
                      </div>
                      <div className="col-3">
                        <button className="btn btn-danger">-</button>
                        &nbsp;
                        <span>{item.quantity}</span>
                        &nbsp;
                        <button className="btn btn-primary">+</button>
                      </div>
                      <div className="col-1">
                        <button className="btn btn-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-3">
                <div className="shadow p-2">
                  <h5>Cart Summary</h5>
                  <hr />
                  <p>
                    <strong>Units: </strong>{" "}
                    {products.reduce(
                      (ac, item) => ac + Number(item.quantity),
                      0
                    )}
                  </p>
                  <p>
                    <strong>Total: </strong> $
                    {products.reduce(
                      (ac, item) => ac + item.price * item.quantity,
                      0
                    )}
                  </p>
                  <hr />
                  <button className="btn btn-warning">Check out</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
