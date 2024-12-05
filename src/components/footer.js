const Footer =() =>{
    return (
    <>
    <footer className="footer"> 

    <div className="footer-column"> 
            <h3>Contact</h3> 
            <ul> 
                <li>Email: contact@company.com</li> 
                <li>Phone: +1 (555) 123-4567</li> 
                <li>Address: 123 Main St, City, Country</li>
            </ul> 
        </div>

        <div className="footer-column"> 
            <h3>Follow Us</h3> 
            <ul className="social-media"> 
                <li><a href="#" className="social-link"><p>Linkedin</p></a></li> 
                <li><a href="#" className="social-link"><p>Facebook</p></a></li> 
                <li><a href="#" className="social-link"><p>Twitter</p></a></li> 
                <li><a href="#" className="social-link"><p>Instagram</p></a></li> 
            </ul> 
        </div>
    </footer>
    </>
    )
   }
export default Footer