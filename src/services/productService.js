const URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Error al cargar los productos");
  }

  const data = await response.json();
  return data.products;
}

export async function getProductById(id) {
  const response = await fetch(`${URL}/${id}`);

  if (!response.ok) {
    throw new Error("Producto no encontrado");
  }

  return await response.json();
}