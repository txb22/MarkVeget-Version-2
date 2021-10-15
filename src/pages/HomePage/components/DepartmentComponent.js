import React, {useState} from "react";
import {Link} from "react-router-dom";
import Banner from "../../../assets/images/banner.jpg";

function DepartmentComponent() {
    const [showCategory, setShowCategory] = useState(true)
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all" onClick={() => {
                                setShowCategory(!showCategory)
                            }}>
                                <i className="fa fa-bars"/>
                                <span>All departments</span>
                            </div>
                            <ul style={{display: showCategory ? '' : 'none'}}>
                                <li><Link to="/">Fresh Meat</Link></li>
                                <li><Link to="/">Vegetables</Link></li>
                                <li><Link to="/">Fruit &amp; Nut Gifts</Link></li>
                                <li><Link to="/">Fresh Berries</Link></li>
                                <li><Link to="/">Ocean Foods</Link></li>
                                <li><Link to="/">Butter &amp; Eggs</Link></li>
                                <li><Link to="/">Fastfood</Link></li>
                                <li><Link to="/">Fresh Onion</Link></li>
                                <li><Link to="/">Papayaya &amp; Crisps</Link></li>
                                <li><Link to="/">Oatmeal</Link></li>
                                <li><Link to="/">Fresh Bananas</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"/>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"/>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item set-bg" style={{backgroundImage: `url(${Banner})`}}
                        >
                            <div className="hero__text">
                                <span>FRUIT FRESH</span>
                                <h2>Vegetable <br/>100% Organic</h2>
                                <p>Free Pickup and Delivery Available</p>
                                <Link to="/" className="primary-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepartmentComponent