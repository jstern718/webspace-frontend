import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// import "./NavBar.css";
import userContext from "../src/userContext";

/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-sm py-0">
            <div className="container-fluid p-1">
              <div className="logo-box expanded-logo-box d-sm-none pl-n5">
                <NavLink className="logo-link col-4 nav-link" to="/" end>
                  <p className='navLogoText'>Webspace</p>
                </NavLink>
              </div>
              <button className="navbar-toggler mx-4 my-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-nav me-auto mr-1">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <li className="nav-item d-none d-sm-block">
                    <div className="logo-box collapsed-logo-box">
                      <NavLink className="logo-link col-4 nav-link" to="/" end>
                        <p className='navLogoText'>Webspace</p>
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login" onClick={logout} end>
                        Logout:<span className="invisible">_</span>{user.username}
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
        </nav>
      </div>
    );
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-sm indent">
      <div className="container-fluid indent">
        <div className="logo-box expanded-logo-box navbar-brand">
          <NavLink className="logo-link col-4 nav-link" to="/" end>
            <p className='navLogoText'>Webspace</p>
          </NavLink>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02 indent">
          <NavLink className="col-4 navbar-brand nav-link" to="/" end>
            <i className="bi bi-house"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
