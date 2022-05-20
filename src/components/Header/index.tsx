import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Logo from "../../assets/imgs/apple-touch-icon.png";
import Image from "../common/Image";

const Navbar = () => {
  const [navbarOpen] = useNav(false);

  return (
    <>
      <nav
        id="header"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      >
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand pointer p-0">
            <Image src={Logo} cssClasses={["logo-img"]} />
          </Link>
          <span
            className="navbar-toggler border-0 outline-none p-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </span>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <Link
                  className={`nav-link white px-0 py-2 pointer`}
                  to={{ pathname: "https://docs.neonomad.finance/" }}
                  target="_blank"
                >
                  Docs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link white px-0 py-2 pointer`}
                  to={{ pathname: "https://app.neonomad.exchange" }}
                  target="_blank"
                >
                  Defi App
                </Link>
              </li>
              <li className="nav-item coming-soon-container">
                <button className="coming-soon">
                  <span>DASHBOARD</span>
                  <span>COMING SOON</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
