import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Layout from "./layout";
import LoginPage from "./loginPage";
import LogoutPage from "./LogoutPage";
export default function RouterFile(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route index element = {<Header />}/>
                    <Route path="loginpage" element = {<LoginPage />}/>
                    <Route path="logoutpage" element = {<LogoutPage />}/>
                    {/* <Route path="categoriespage" element = {<CategoriesPage />}/>
                    <Route path="electronicspage" element = {<ElectronicsPage />}/>
                    <Route path="jewellerypage" element = {<JewelleryPage />}/>
                    <Route path="menclothingpage" element = {<MenClothingPage />}/>
                    <Route path="womenclothingpage" element = {<WomenClothingPage />}/>
                    <Route path="popuppage" element = {<PopUpPage />}/>
                    <Route path="footer" element = {<Footer />}/> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}