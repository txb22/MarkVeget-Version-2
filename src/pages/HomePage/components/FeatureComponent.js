import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useGetAllProductsQuery} from "../../../features/api/productAPI";
import {addToCart} from "../../../features/slice/cartSlice";
import {Button, notification} from 'antd';

function FeatureComponent(){
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetAllProductsQuery()
    const openNotificationWithIcon = (type,product) => {
        dispatch(addToCart(product))
        notification[type]({
            message: 'Đã thêm giỏ hàng',
            description:
                `Sản phẩm : ${product.name}`,
        });
    };
    return(
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {data?.map((prd) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={prd.id}>
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg">
                                        <img src="https://picsum.photos/270/270"/>
                                        <ul className="featured__item__pic__hover">
                                            <li>
                                                <button><i className="fa fa-heart"/></button>
                                            </li>
                                            <li>
                                                <button><i className="fa fa-retweet"/></button>
                                            </li>
                                            <li>
                                                <Button onClick={() => openNotificationWithIcon('success',prd)}>
                                                    <i className="fa fa-shopping-cart"/>
                                                </Button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><Link to="/">{prd.name}</Link></h6>
                                        <h5>{prd.price}₫</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default FeatureComponent