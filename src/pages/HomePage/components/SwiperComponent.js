import React from "react";
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs";
import {Link} from "react-router-dom";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
function SwiperComponent(){
    SwiperCore.use([Autoplay]);
    return(
        <Swiper
            className="mySwiper"
            autoplay={{delay: 3000}}
        >
            <SwiperSlide>
                <div className="">
                    <div className="categories__item set-bg">
                        <img src={require('../../../assets/images/banner-1.jpg').default} alt="Banner"/>
                        <h5><Link to="/">Fresh Fruit</Link></h5>
                    </div>
                </div>
            </SwiperSlide> <SwiperSlide>
            <div className="">
                <div className="categories__item set-bg">
                    <img src={require('../../../assets/images/banner-2.jpg').default} alt=""/>
                    <h5><Link to="/">Fresh Fruit</Link></h5>
                </div>
            </div>
        </SwiperSlide>

        </Swiper>
    )
}
export default SwiperComponent