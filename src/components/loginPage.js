export default function LoginPage() {
    return(
        <>
        <body class="login">
           <div class="login-form"> 
            <h2>Sign In</h2> 
            <form> 
                <div class="form-group"> 
                    <label for="email">Email:</label> 
                    <input type="email" id="email" name="email" required/> 
                </div> 
                <div class="form-group"> 
                    <label for="password">Password:</label> 
                    <input type="password" id="password" name="password" required/>
                </div> 
                <button type="submit" class="btn">Log In</button> 
            </form>  
          </div>  
        </body>       
        </>
    )
}
