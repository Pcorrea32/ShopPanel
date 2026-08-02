import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/productos">
          ShopPanel
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/productos">
            Productos
          </Link>

          <Link className="nav-link" to="/pedidos">
            Pedidos
          </Link>

          <button
            className="btn btn-danger ms-3"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;