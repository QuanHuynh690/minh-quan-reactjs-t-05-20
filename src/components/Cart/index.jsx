import React from "react";

function Cart(){
    return (
        <>
        <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart" /> <span className="cart-count">3</span></a>
                      <ul className="minicart">
                        <li>
                          <div className="cart-img">
                            <a href="#">
                              <img src="./assets/pro1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="cart-content">
                            <h3>
                              <a href="#">Black &amp; White Shoes</a>
                            </h3>
                            <div className="cart-price">
                              <span className="new">$ 229.9</span>
                              <span>
                                <del>$239.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <a href="#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="cart-img">
                            <a href="#">
                              <img src="./assets/pro2.jpg" alt="" />
                            </a>
                          </div>
                          <div className="cart-content">
                            <h3>
                              <a href="#">Black &amp; White Shoes</a>
                            </h3>
                            <div className="cart-price">
                              <span className="new">$ 229.9</span>
                              <span>
                                <del>$239.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <a href="#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="cart-img">
                            <a href="#">
                              <img src="./assets/pro3.jpg" alt="" />
                            </a>
                          </div>
                          <div className="cart-content">
                            <h3>
                              <a href="#">Black &amp; White Shoes</a>
                            </h3>
                            <div className="cart-price">
                              <span className="new">$ 229.9</span>
                              <span>
                                <del>$239.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <a href="#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="total-price">
                            <span className="f-left">Total:</span>
                            <span className="f-right">$300.0</span>
                          </div>
                        </li>
                        <li>
                          <div className="checkout-link">
                            <a href="#">Shopping Cart</a>
                            <a className="red-color" href="#">Checkout</a>
                          </div>
                        </li>
                      </ul>
                    </li>
        </>
    )}
export default Cart