import React from "react";
import MasterLayout from "../../layout/MasterLayout";
import {Link} from "react-router-dom";
import BGC from "../../assets/images/breadcrumb.jpg"

function ShoppingCart(){
    window.scroll(0,0)
    return(
        <MasterLayout>
            <section
                className="breadcrumb-section set-bg"
                style={{backgroundImage: `url(${BGC})`}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/">Home</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src="https://picsum.photos/seed/picsum/101/100" alt="" />
                                            <h5>Vegetable’s Package</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $55.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" defaultValue={1} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $110.00
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src="https://picsum.photos/seed/picsum/101/100" alt="" />
                                            <h5>Fresh Garden Vegetable</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $39.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" defaultValue={1} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $39.99
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src="https://picsum.photos/seed/picsum/101/100" alt="" />
                                            <h5>Organic Bananas</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $69.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="text" defaultValue={1} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $69.99
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                                <Link to="/checkout" className="primary-btn">PROCEED TO CHECKOUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    )
}
export default ShoppingCart