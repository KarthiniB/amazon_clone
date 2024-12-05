import React from "react";
import { Link } from "react-router-dom";
const Header =() =>{ 
    return(
        <>
            <header className="header"> 
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lora:ital,wght@0,400..700;1,400..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <img src="https://dynamic.brandcrowd.com/asset/logo/65c1bcb7-4d79-444f-bb1a-b92841a6c213/logo-search-grid-1x?logoTemplateVersion=1&v=638677545185900000&text=Sheek+%26+Cheeks&colorpalette=purple" alt="Company Logo" class="logo"/> 
            <h1 className="company-name">Sheek & Cheeks</h1>
            <Link to = "products"><button className="product-button">Products</button></Link>
            <div className="auth-buttons"> 
                <Link to = "loginpage"><button className="btn">Login In</button></Link>
                <Link to = "logoutpage"><button className="btn">Log Out</button></Link>
            </div>
            </header>
        </>
    ) 
   }
export default Header;