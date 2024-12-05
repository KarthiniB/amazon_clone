export default function LogoutPage(){
    return(
        <>
         <body className="logout"> 
            <div class="logout-form"> 
                <h2>Sign Out</h2> 
                <form> 
                    <div class="form-group"> 
                        <label for="email">Email:</label> 
                        <input type="email" id="email" name="email" required/> 
                    </div> 
                    <button type="submit" class="btn">Sign Out</button> 
                </form> 
            </div> 
        </body>
        </>
    )
}
