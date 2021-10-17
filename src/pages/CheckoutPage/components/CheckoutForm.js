import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTotals} from "../../../features/slice/cartSlice";
import {Form, Input, Button, Checkbox} from 'antd';

function CheckoutForm() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
    const onFinish = (values) => {
        console.log('Success:', values);
        const product = {...values,total:cart.cartTotalAmount}
        console.log('Product',product)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4>Hóa đơn chi tiết</h4>
                    <Form
                        name="basic"
                        labelCol={{span: 7}}
                        wrapperCol={{span: 17}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="ant--form__custom"
                    >
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <Form.Item
                                                label="Họ"
                                                name="firstName"
                                                rules={[{required: true, message: 'Vui lòng nhập họ!'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <Form.Item
                                                label="Tên"
                                                name="lastName"
                                                rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <Form.Item
                                                label="Quận,Huyện"
                                                name="district"
                                                rules={[{required: true, message: 'Vui lòng nhập quận huyện!'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <Form.Item
                                                label="Xã"
                                                name="wards"
                                                rules={[{required: true, message: 'Vui lòng nhập xã!'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <Form.Item
                                                label="Địa chỉ"
                                                name="address"
                                                rules={[{required: true, message: 'Vui lòng địa chỉ!'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4>Đơn hàng của bạn</h4>
                                    <div className="checkout__order__products">Sản phẩm <span>Tổng tiền</span></div>
                                    <ul>
                                        {cart.cartItems?.map((cartItem) => {
                                            return (
                                                <li key={cartItem.id}>{cartItem.name.slice(0, 18)} (x{cartItem.cartQuantity}) <span>{cartItem.price * cartItem.cartQuantity}₫</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="checkout__order__subtotal">
                                        Tiền hàng <span>{cart.cartTotalAmount}₫</span></div>
                                    <div className="checkout__order__total">
                                        Thanh toán <span>{cart.cartTotalAmount}₫</span></div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="payment">
                                            COD
                                            <input type="checkbox" id="payment"/>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="payment">
                                            Vnpay
                                            <input type="checkbox" id="payment"/>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    <Button type="primary" htmlType="submit" className="site-btn">
                                        đặt hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default CheckoutForm