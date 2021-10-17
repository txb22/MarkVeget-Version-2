import React, {useEffect} from "react";
import LOGO from '../../assets/images/logo.png'
import Language from '../../assets/images/vn.png'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTotals} from "../../features/slice/cartSlice";

function Header() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])
    const handleScroll =()=>{
        window.scroll(0,0)
    }
    return (
        <div className="">
            <button className="scroll" onClick={()=>handleScroll()}>
                <i className="fa fa-angle-double-up" aria-hidden="true"/>
            </button>
            <div className="humberger__menu__overlay"/>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <Link to="/"><img src="img/logo.png" alt=""/></Link>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><Link to="/love"><i className="fa fa-heart"/> <span>1</span></Link></li>
                        <li><Link to="/cart"><i className="fa fa-shopping-bag"/> <span>3</span></Link></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src={Language} alt="languge"/>
                        <div>VietNamese</div>
                        <span className="arrow_carrot-down"/>
                        <ul>
                            <li><Link to="/">VietNamese</Link></li>
                            <li><Link to="/">English</Link></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <Link to="#"><i className="fa fa-user"/> Login</Link>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/">Pages</Link>
                            <ul className="header__menu__dropdown">
                                <li><Link to="./shop-details.html">Shop Details</Link></li>
                                <li><Link to="./shoping-cart.html">Shoping Cart</Link></li>
                                <li><Link to="./checkout.html">Check Out</Link></li>
                                <li><Link to="./blog-details.html">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"/>
                <div className="header__top__right__social">
                    <Link to="#"><i className="fa fa-facebook"/></Link>
                    <Link to="#"><i className="fa fa-twitter"/></Link>
                    <Link to="#"><i className="fa fa-linkedin"/></Link>
                    <Link to="#"><i className="fa fa-pinterest-p"/></Link>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope" aria-hidden="true"/> hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"/> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <Link to="/"><i className="fa fa-facebook"/></Link>
                                        <Link to="/"><i className="fa fa-twitter"/></Link>
                                        <Link to="/"><i className="fa fa-linkedin"/></Link>
                                        <Link to="/"><i className="fa fa-pinterest-p"/></Link>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src={Language} alt=""/>
                                        <div>VietNamese</div>
                                        <span className="arrow_carrot-down"/>
                                        <ul>
                                            <li><Link to="/">VietNamese</Link></li>
                                            <li><Link to="/">English</Link></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <Link to="#"><i className="fa fa-user"/> Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__main--logo container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to="/"><img src={LOGO} alt="Logo"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/">Pages</Link>
                                        <ul className="header__menu__dropdown">
                                            <li><Link to="./shop-details.html">Shop Details</Link></li>
                                            <li><Link to="/cart">Shoping Cart</Link></li>
                                            <li><Link to="./checkout.html">Check Out</Link></li>
                                            <li><Link to="./blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><Link to="/"><i className="fa fa-heart"/> <span>1</span></Link></li>
                                    <li><Link to="/cart"><i className="fa fa-shopping-bag"/> <span>{cart.cartTotalQuantity}</span></Link></li>
                                </ul>
                                <div className="header__cart__price">Item: <span>${cart.cartTotalAmount}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"/>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header