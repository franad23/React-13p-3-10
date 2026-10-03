import type { ICita } from "../../data/cita";
import "./cita.css";

// AGREGAR CAMPO NOMBRE DE LIBRO
function CitaREACT({ cita, fecha, nombre, valoracion }: ICita) {
  return (
    <div className="citaContenedor">
      <div>
        <p>{cita}</p>
      </div>
      <div className="datosCita">
        <span>{valoracion}</span>
        <div>
          <h4>{nombre}</h4>
          <span>{fecha}</span>
        </div>
      </div>
    </div>
  );
}
export default CitaREACT;

// <div className="citaContenedorPrincipal">
//   {citasDATOS.map((citaOBJ, index) => (
//     <CitaREACT
//       key={index}
//       cita={citaOBJ.cita}
//       fecha={citaOBJ.fecha}
//       nombre={citaOBJ.nombre}
//       valoracion={citaOBJ.valoracion}
//     />
//   ))}
// </div>
