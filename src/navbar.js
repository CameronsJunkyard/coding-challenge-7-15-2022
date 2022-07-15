function Navbar() {
    return ( 
        <nav className="navbar">
            <h1 href="/" className="nav__title">Title</h1>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/">Home</a>
                </li>
                <li className="nav__item">
                    <a href="/about">About</a>
                </li>
                <li className="nav__item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
         </nav>
    );
  }
  
export default Navbar;
  