import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav className="nav-Bar">
      <div>
        <img
          className="logo-img"
          alt="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpgisNZvel3PeqpEtCcvII9h-CzQbvSqFkg&usqp=CAU"
        />
      </div>
      <div>
        <ul className="Nav-list">
          <li>
            <Link className="nav-li" to="/home">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-li" to="/Category">
              Category
            </Link>
          </li>

          <li>
            <Link to="/Design" className="nav-li">
              Desigines
            </Link>
          </li>
          <li>
            <Link className="nav-li" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
