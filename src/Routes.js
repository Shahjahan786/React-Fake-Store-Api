import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import ProductItem from './Components/ProductItem'
import NoPageFound from './Components/NoPageFound'
import About from './Components/About'
import NavBar from './Components/NavBar'

export default function Routes(){
    return (
        <Router>

            <NavBar/>
          
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/about">
                    <About/>
                </Route>

                <Route exact path="/product">
                    <Product/>
                </Route>

                <Route path="/product/:id">
                    <ProductItem/>
                </Route>

                <Route path="*">
                    <NoPageFound />
                </Route>

            </Switch>
        </Router>
    )
}