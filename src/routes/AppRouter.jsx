import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ProductoDetalle from "../pages/ProductoDetalle";
import Pedidos from "../pages/Pedidos";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRouter() {
  return (
    <Routes>

      {/* Ruta pública */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route
        path="/productos"
        element={
          <ProtectedRoute>
            <Productos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/productos/:id"
        element={
          <ProtectedRoute>
            <ProductoDetalle />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pedidos"
        element={
          <ProtectedRoute>
            <Pedidos />
          </ProtectedRoute>
        }
      />

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRouter;