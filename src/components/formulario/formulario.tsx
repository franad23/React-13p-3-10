interface FormularioProps {
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Formulario({ submitForm }: FormularioProps) {
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <label>Nombre:</label>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        minLength={2}
        maxLength={100}
        required
        name="name"
      />
      <label>Apellido:</label>
      <input
        name="lastname"
        type="text"
        placeholder="Ingrese su apellido"
        minLength={2}
        maxLength={100}
        required
      />
      <label>Edad:</label>
      <input
        type="number"
        placeholder="Ingrese su edad"
        min={18}
        max={150}
        required
        name="age"
      />
      <button>Agregar</button>
    </form>
  );
}

export default Formulario;
