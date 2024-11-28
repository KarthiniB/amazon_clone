export default function LoginPage(){
    return(
        <center>
                <form action="loginPage.js" method="post">
                    <div className="login">
                        <label for="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>

                        <label for="password"><b>Password</b></label>
                        <input type="text" placeholder="Enter password" name="password" required></input>

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember">Remember me</input>
                        </label>
                    </div>
                </form>
        </center>
    )
}