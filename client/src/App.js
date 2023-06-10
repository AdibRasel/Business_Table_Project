import React, { Fragment } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import ProductList from "./pages/Product-List";
import Home from "./pages/Home/Home";
import Registraion from "./pages/Registraion/Registraion";
import ReactJs from "./pages/ReactJs/ReactJs";
const App = () => {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/Registraion" element={<Registraion />}/>
                            <Route exact path="/ProductList" element={<ProductList  />}/>
                            <Route exact path="/ReactJs" element={<ReactJs  />}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
};
export default App;