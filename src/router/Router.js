import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Error404Page from "../pages/Error404Page/Error404Page";
function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/cart" exact>
                    <ShoppingCart/>
                </Route>
                <Route path="/checkout" exact>
                    <CheckoutPage/>
                </Route>
                <Route path="/error404" exact>
                    <Error404Page/>
                </Route>
                <Redirect from="*" to={"/error404"}/>
            </Switch>
        </Router>
    )
}
export default Routes