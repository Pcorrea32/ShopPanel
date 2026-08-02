import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Pedidos() {
  const [pedido, setPedido] = useState("");
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("pedidos");

    if (datosGuardados) {
      setPedidos(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

  const agregarPedido = (e) => {
    e.preventDefault();

    if (pedido.trim() === "") return;

    const nuevoPedido = {
      id: Date.now(),
      nombre: pedido,
    };

    setPedidos([...pedidos, nuevoPedido]);
    setPedido("");
  };

  const eliminarPedido = (id) => {
    const nuevosPedidos = pedidos.filter((p) => p.id !== id);
    setPedidos(nuevosPedidos);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4">Gestión de Pedidos</h2>

        <form onSubmit={agregarPedido} className="mb-4">

          <div className="input-group">

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el pedido"
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
            />

            <button className="btn btn-success">
              Agregar
            </button>

          </div>

        </form>

        {pedidos.length === 0 ? (
          <p>No hay pedidos registrados.</p>
        ) : (
          <ul className="list-group">

            {pedidos.map((item) => (

              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >

                {item.nombre}

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarPedido(item.id)}
                >
                  Eliminar
                </button>

              </li>

            ))}

          </ul>
        )}

      </div>
    </>
  );
}

export default Pedidos;