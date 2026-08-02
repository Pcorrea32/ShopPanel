import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/productService";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

function ProductoDetalle() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarProducto() {
      try {
        const data = await getProductById(id);
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    cargarProducto();
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <h3>{error}</h3>;

  return (
    <>    
      <Navbar/>
    <div className="container mt-5">

      <div className="card">

        <div className="row">

          <div className="col-md-5">
            <img
              src={producto.thumbnail}
              className="img-fluid"
              alt={producto.title}
            />
          </div>

          <div className="col-md-7 p-4">

            <h2>{producto.title}</h2>

            <p>{producto.description}</p>

            <h4>${producto.price}</h4>

            <p>
              <strong>Marca:</strong> {producto.brand}
            </p>

            <p>
              <strong>Categoría:</strong> {producto.category}
            </p>

            <p>
              <strong>Stock:</strong> {producto.stock}
            </p>

            <Link
              to="/productos"
              className="btn btn-secondary"
            >
              Volver
            </Link>

          </div>

        </div>

      </div>

    </div>
    </>
  );
}

export default ProductoDetalle;