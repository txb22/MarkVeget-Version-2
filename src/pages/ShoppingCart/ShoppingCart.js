import React, {useEffect} from "react";
import MasterLayout from "../../layout/MasterLayout";
import {Link} from "react-router-dom";
import BGC from "../../assets/images/breadcrumb.jpg"
import {useDispatch, useSelector} from "react-redux";
import {clearCart, decreaseCart, getTotals, increaseCart, removeItemFromCart} from "../../features/slice/cartSlice";
import {Button, notification} from 'antd';

function ShoppingCart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])
    const handleDec = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleInc = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }
    const openNotificationWithIcon = (type,cartItem) => {
        dispatch(removeItemFromCart(cartItem))
        notification[type]({
            message: 'Đã xóa',
            description:
                `Sản phẩm : ${cartItem.name}`,
        });
    };
    const clear = ()=>{
        dispatch(clearCart())
    }
    return (
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
                    {cart.cartItems.length === 0
                        ? (<div className="cart-empty">
                            <div className="row back-link">
                                <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"/>Continue shopping cart</Link>
                            </div>
                            <div className="row back-link">
                                <span>Your Cart Empty</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 image-empty">
                                    <img src={require('../../assets/images/empty-cart.png').default} alt=""/>
                                </div>
                            </div>
                        </div>)
                        : (
                            <div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="shoping__cart__table">
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th className="shoping__product">Sản phẩm</th>
                                                    <th>Giá</th>
                                                    <th>Số lượng</th>
                                                    <th>Tổng</th>
                                                    <th/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {cart.cartItems?.map((cartItem) => (
                                                    <tr key={cartItem.id}>
                                                        <td className="shoping__cart__item">
                                                            <img src="https://picsum.photos/seed/picsum/101/100"
                                                                 alt=""/>
                                                            <h5>{cartItem.name}</h5>
                                                        </td>
                                                        <td className="shoping__cart__price">
                                                            {cartItem.price}₫
                                                        </td>
                                                        <td className="shoping__cart__quantity">
                                                            <div className="quantity">
                                                                <button
                                                                    className="btn-qty"
                                                                    onClick={() => handleDec(cartItem)}
                                                                >-
                                                                </button>
                                                                <div className="pro-qty">
                                                                    {cartItem.cartQuantity}
                                                                    {/*<input type="text" className="input" value={cartItem.cartQuantity}/>*/}
                                                                </div>
                                                                <button
                                                                    onClick={() => handleInc(cartItem)}
                                                                    className="btn-qty"
                                                                >+
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="shoping__cart__total">
                                                            {cartItem.price * cartItem.cartQuantity}₫
                                                        </td>
                                                        <td className="shoping__cart__item__close">
                                                            <Button onClick={() => openNotificationWithIcon('error',cartItem)}>
                                                                <i className="fa fa-window-close" aria-hidden="true"/>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="shoping__cart__btns">
                                            <Link to="/" className="primary-btn">
                                                <i className="fa fa-arrow-left" aria-hidden="true"/>
                                                Mua hàng ngay
                                            </Link>
                                            <button
                                                onClick={()=>clear()}
                                                className="primary-btn cart-btn cart-btn-right"
                                            >
                                                Xóa giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shoping__checkout">
                                            <h5>Giỏ Hàng</h5>
                                            <ul>
                                                <li>Tổng tiền hàng<span>{cart.cartTotalAmount}₫</span></li>
                                                <li>Tổng tiền thanh toán <span>{cart.cartTotalAmount}₫</span></li>
                                            </ul>
                                            <Link to="/checkout" className="primary-btn">thanh toán ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>
        </MasterLayout>
    )
}

export default ShoppingCart