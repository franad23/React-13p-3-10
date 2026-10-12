import { useState } from "react";
import { useForm } from "react-hook-form";

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface ProductForm {
  name: string;
  description: string;
  price: number | undefined;
  stock: number | undefined;
}

function App() {
  const [product, setProduct] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductForm>({
    defaultValues: {
      name: "",
      description: "",
      price: undefined,
      stock: undefined,
    },
  });

  function handleProduct(data: ProductForm) {
    const newProduct: Product = {
      name: data.name,
      description: data.description,
      price: data.price!,
      stock: data.stock!,
    };

    setProduct((prev) => [...prev, newProduct]);

    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleProduct)}>
        <div>
          <input
            type="text"
            placeholder="Nombre Producto"
            {...register("name", {
              required: "El nombre es requerido",
            })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Descripción producto"
            {...register("description", {
              required: "La descripción es requerida",
            })}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description.message}</span>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Precio Producto"
            {...register("price", {
              valueAsNumber: true,
              required: "El precio es requerido",
              min: {
                value: 0,
                message: "El precio no puede ser negativo",
              },
            })}
          />
          {errors.price && (
            <span style={{ color: "red" }}>{errors.price.message}</span>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Stock Producto"
            {...register("stock", {
              valueAsNumber: true,
              required: "El stock es requerido",
              min: {
                value: 0,
                message: "El stock no puede ser negativo",
              },
            })}
          />
          {errors.stock && (
            <span style={{ color: "red" }}>{errors.stock.message}</span>
          )}
        </div>

        <button type="submit">Guardar</button>
      </form>

      <h2>Productos guardados</h2>

      {product.map((item, index) => (
        <div key={index}>
          <p>Nombre: {item.name}</p>
          <p>Descripción: {item.description}</p>
          <p>Precio: {item.price}</p>
          <p>Stock: {item.stock}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
