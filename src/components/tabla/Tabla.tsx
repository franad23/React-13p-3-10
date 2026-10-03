import type { DataPersona } from "../../types/persona";

interface TableProps {
  personas: DataPersona[];
}

function Table({ personas }: TableProps) {
  return (
    <table border={3}>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </thead>
      <tbody>
        {personas.map((persona) => (
          <tr>
            <td>{persona?.name}</td>
            <td>{persona?.lastname}</td>
            <td>{persona?.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
