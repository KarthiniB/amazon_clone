import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import CategoriesPage from "./categoriesPage";
import LoginPage from "./loginPage";
import LogoutPage from "./LogoutPage";
import JewelleryPage from "./jewelleryPage";
import ElectronicsPage from "./electronicsPage";
import MenclothingPage from "./menClothingPage";
import WomenclothingPage from "./womenClothingPage";
import ProductButton from "./productButton";
import CartComp from "./cartcomp";
export default function RouterFile(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route index element={<CategoriesPage />} />
                    <Route path="loginpage" element = {<LoginPage />}/>
                    <Route path="logoutpage" element = {<LogoutPage />}/>
                    <Route path="products" element = {<ProductButton />}/>
                    <Route path="jewelery" element = {<JewelleryPage />}/>
                    <Route path="cart/:id" element={<CartComp />}/>
                    <Route path="electronics" element = {<ElectronicsPage />}/>
                    <Route path="men's clothing" element = {<MenclothingPage />}/>
                    <Route path="women's clothing" element = {<WomenclothingPage />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}