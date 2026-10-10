import { useForm } from "react-hook-form";

interface DatosForm {
  name: string;
  lastname: string;
  age: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DatosForm>({
    mode: "onSubmit",
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("Datos válidos:", data);
      })}
    >
      <div>
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", {
            required: "El nombre es obligatorio",
          })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Apellido"
          {...register("lastname", {
            required: "El apellido es obligatorio",
            minLength: {
              value: 2,
              message: "El apellido debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 50,
              message: "El apellido no debe tener mas de 50 caracteres",
            },
          })}
        />
        {errors.lastname && (
          <span style={{ color: "red" }}>{errors.lastname.message}</span>
        )}
      </div>

      <div>
        <input
          type="number"
          placeholder="Edad"
          {...register("age", {
            required: "La edad es obligatoria",
            min: {
              value: 18,
              message: "Tenes que ser mayor de edad",
            },
            max: {
              value: 150,
              message: "Tenes que estar vivo",
            },
          })}
        />
        {errors.age && (
          <span style={{ color: "blue" }}>{errors.age.message}</span>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
