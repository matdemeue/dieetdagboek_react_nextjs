import Link from "next/link";
import { useAuth } from "../../firebase/auth";

const Menu = () => {
  const { user } = useAuth();
  
  return (
 

  <div className="container-fluid bg_p-blue py-2">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
          <a className="navbar-brand">Dieet Dagboek Mathieu</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            {!user ?
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">Inloggen</a>
                </Link>
              </li>
              :
              <>
                <li className="nav-item">
                      <span className="nav-link">Hoi, {user.email}</span>
                </li>
                <li className="nav-item">
                  <Link href="/gewicht">
                    <a className="nav-link">Gewichtsverloop</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/logout">
                    <a className="nav-link">Afmelden</a>
                  </Link>
                </li>
              </>
            }
          </ul>
        </div>
        
      </nav>
    </div>
  </div>
  )
};

export default Menu;
