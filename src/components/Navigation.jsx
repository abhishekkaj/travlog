
const Navigation = () =>{
    return (
        <nav>
            <div id="menuToggle">
        <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
            <li href="#">Home</li>
            <li href="#">Discover</li>
            <li href="#">Special Deals</li>
            <li href="#">Contact</li>
            <div className="m-btn">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
        </div>
        </ul>
        
        </div>
        <div className="logo">
            <img src="/img/logo.png" alt="" />
        </div>
        <ul className="desktop-menu">
            <li href="#">Home</li>
            <li href="#">Discover</li>
            <li href="#">Special Deals</li>
            <li href="#">Contact</li>
        </ul>
        <div className="btn">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
        </div>
        
    </nav>
    )
};

export default Navigation;