import React from "react";
import MasterLayout from "../../layout/MasterLayout";
import FeatureComponent from "./components/FeatureComponent";
import BlogComponent from "./components/BlogComponent";
import SwiperComponent from "./components/SwiperComponent";
import LastComponent from "./components/LastComponent";
import DepartmentComponent from "./components/DepartmentComponent";
import BannerComponent from "./components/BannerComponent";

function HomePage() {
    window.scroll(0, 0)
    return (
        <MasterLayout>
            <div>
                <DepartmentComponent/>
                <SwiperComponent/>
                <FeatureComponent/>
                <BannerComponent/>
                <LastComponent/>
                <BlogComponent/>
            </div>
        </MasterLayout>
    )
}

export default HomePage