import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import LoginPage from "./loginPage";
import LogoutPage from "./LogoutPage";
export default function RouterFile(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                    <Route path="loginpage" element = {<LoginPage />}/>
                    <Route path="logoutpage" element = {<LogoutPage />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}