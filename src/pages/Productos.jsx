import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productService";
import Loading from "../components/Loading";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarProductos() {
      try {
        const data = await getProducts();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  if (loading) return <Loading />;

  if (error) return <h3>{error}</h3>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Productos</h2>

      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100">

              <img
                src={producto.thumbnail}
                className="card-img-top"
                alt={producto.title}
              />

              <div className="card-body">
                <h5>{producto.title}</h5>

                <p>
                  <strong>Precio:</strong> ${producto.price}
                </p>

                <p>
                  <strong>Categoría:</strong> {producto.category}
                </p>

                <Link
                  to={`/productos/${producto.id}`}
                  className="btn btn-primary"
                >
                  Ver detalle
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;