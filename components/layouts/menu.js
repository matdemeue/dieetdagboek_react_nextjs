import Link from "next/link";

const Menu = () => (

  <div className="container-fluid bg_p-blue py-2">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
          <a className="navbar-brand">Dieet Dagboek Mathieu</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            <li className="nav-item">
                <Link href="/gewicht">
                  <a className="nav-link">Gewichtsverloop</a>
                </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  </div>
);

export default Menu;
