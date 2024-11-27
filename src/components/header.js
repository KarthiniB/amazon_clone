// export default function Header(){
//     return(
//         <div className="header">
//             <h1>Header</h1>
//         </div>
//     )
// }
const Header =() =>{
    
    return(
    <>
         {/* <header>Cities</header> */}
         <header class="header"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJc-kxhH7hFPOh4cDOLyfk9oMeGhBclA0pog&s" alt="Company Logo" class="logo"/> 
            <h1 class="company-name">Sheek & Cheeks</h1> 
            <div class="auth-buttons"> 
                {/* <a href= "Signin" target="_blank"><button class="btn">sign In</button></a> */}
                {/* <Link to="sign-in"><button class="btn">sign In</button></Link> */}
                {/* <button className="btn" onClick={handleSignInClick}>Sign In</button> */}
                <button class="btn">Sign In</button> 
                <button class="btn">Sign Out</button> 

            </div>
            </header>
    </>
    ) 
   }
export default Header;