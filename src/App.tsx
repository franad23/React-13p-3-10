import { useState } from "react";
import "./App.css";
import Formulario from "./components/formulario/formulario";
import Table from "./components/tabla/Tabla";
import type { DataPersona } from "./types/persona";

function App() {
  const [personas, setPersonas] = useState<DataPersona[]>([]);
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: DataPersona = {
      lastname: formData.get("lastname") as string,
      name: formData.get("name") as string,
      age: Number(formData.get("age")),
    };

    setPersonas((prev) => [...prev, data]);
  }

  return (
    <>
      <Formulario submitForm={submitForm} />
      <Table personas={personas} />
    </>
  );
}

export default App;
