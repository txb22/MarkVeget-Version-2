import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
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
            </Switch>
        </Router>
    )
}
export default Routes