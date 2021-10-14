import React, { useState } from "react";
import MasterLayout from "../../layout/MasterLayout";
import Banner from '../../assets/images/banner.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from "react-router-dom";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


function HomePage() {
    const [showCategory, setShowCategory] = useState(false)

    SwiperCore.use([Autoplay]);
    return (
        <MasterLayout>
            <div>
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="hero__categories">
                                    <div className="hero__categories__all" onClick={() => { setShowCategory(!showCategory) }}>
                                        <i className="fa fa-bars" />
                                        <span>All departments</span>
                                    </div>
                                    <ul style={{ display: showCategory ? '' : 'none' }}>
                                        <li><Link to="#">Fresh Meat</Link></li>
                                        <li><Link to="#">Vegetables</Link></li>
                                        <li><Link to="#">Fruit &amp; Nut Gifts</Link></li>
                                        <li><Link to="#">Fresh Berries</Link></li>
                                        <li><Link to="#">Ocean Foods</Link></li>
                                        <li><Link to="#">Butter &amp; Eggs</Link></li>
                                        <li><Link to="#">Fastfood</Link></li>
                                        <li><Link to="#">Fresh Onion</Link></li>
                                        <li><Link to="#">Papayaya &amp; Crisps</Link></li>
                                        <li><Link to="#">Oatmeal</Link></li>
                                        <li><Link to="#">Fresh Bananas</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="hero__search">
                                    <div className="hero__search__form">
                                        <form action="#">
                                            <div className="hero__search__categories">
                                                All Categories
                                                <span className="arrow_carrot-down" />
                                            </div>
                                            <input type="text" placeholder="What do yo u need?" />
                                            <button type="submit" className="site-btn">SEARCH</button>
                                        </form>
                                    </div>
                                    <div className="hero__search__phone">
                                        <div className="hero__search__phone__icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="hero__search__phone__text">
                                            <h5>+65 11.188.888</h5>
                                            <span>support 24/7 time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero__item set-bg" style={{ backgroundImage: `url(${Banner})` }}
                                >
                                    <div className="hero__text">
                                        <span>FRUIT FRESH</span>
                                        <h2>Vegetable <br />100% Organic</h2>
                                        <p>Free Pickup and Delivery Available</p>
                                        <a href="#" className="primary-btn">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Hero Section End */}
                {/* Categories Section Begin */}
                {/* <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                    <h5><a href="#">Dried Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                    <h5><a href="#">Vegetables</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

                <Swiper className="mySwiper"

                    autoplay={{
                        delay: 3000,
                        // disableOnInteraction: false
                    }}>
                    <SwiperSlide> <div className="">
                        <div className="categories__item set-bg" >
                            <img src={require('../../assets/images/banner-1.jpg').default} alt="" />
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div>
                    </div></SwiperSlide> <SwiperSlide><div className="">
                        <div className="categories__item set-bg" >
                            <img src={require('../../assets/images/banner-2.jpg').default} alt="" />
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div>
                    </div></SwiperSlide>

                </Swiper>

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
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg">
                                        <img src="https://picsum.photos/270/270" />
                                        <ul className="featured__item__pic__hover">

                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" >
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-4.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                                        <img src="https://picsum.photos/270/270" />

                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Featured Section End */}
                {/* Banner Begin */}
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src={require('../../assets/images/banner-1.jpg').default} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src={require('../../assets/images/banner-2.jpg').default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner End */}
                {/* Latest Product Section Begin */}
                <section className="latest-product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Latest Products</h4>
                                    <div className="latest-product__slider owl-carousel">
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Top Rated Products</h4>
                                    <div className="latest-product__slider owl-carousel">
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="latest-product__text">
                                    <h4>Review Products</h4>
                                    <div className="latest-product__slider owl-carousel">
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="https://picsum.photos/270/270" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Product Section End */}
                {/* Blog Section Begin */}
                <section className="from-blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title from-blog__title">
                                    <h2>From The Blog</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="https://picsum.photos/270/270" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                            <li><i className="fa fa-comment-o" /> 5</li>
                                        </ul>
                                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="https://picsum.photos/270/270" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                            <li><i className="fa fa-comment-o" /> 5</li>
                                        </ul>
                                        <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="https://picsum.photos/270/270" />
                                    </div>
                                    <div className="blog__item__text">
                                        <ul>
                                            <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                            <li><i className="fa fa-comment-o" /> 5</li>
                                        </ul>
                                        <h5><a href="#">Visit the clean farm in the US</a></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

        </MasterLayout >
    )
}
export default HomePage