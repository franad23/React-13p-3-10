interface ICita {
  cita: string;
  nombre: string;
  fecha: string;
  valoracion: number;
}

const citasDATOS: ICita[] = [
  {
    cita: "La vida es aquello que te pasa mientras estás ocupado haciendo otros planes.",
    nombre: "John Lennon",
    fecha: "1970-01-01",
    valoracion: 5,
  },
  {
    cita: "El único modo de hacer un gran trabajo es amar lo que haces.",
    nombre: "Steve Jobs",
    fecha: "2005-06-12",
    valoracion: 5,
  },
  {
    cita: "No cuentes los días, haz que los días cuenten.",
    nombre: "Muhammad Ali",
    fecha: "1974-03-15",
    valoracion: 4,
  },
  {
    cita: "La imaginación lo es todo. Es una visión de lo que está por venir.",
    nombre: "Albert Einstein",
    fecha: "1929-01-20",
    valoracion: 5,
  },
  {
    cita: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    nombre: "Robert Collier",
    fecha: "1912-05-10",
    valoracion: 4,
  },
  {
    cita: "La mejor manera de predecir el futuro es crearlo.",
    nombre: "Peter Drucker",
    fecha: "1974-09-18",
    valoracion: 5,
  },
  {
    cita: "Todo lo que puedas imaginar es real.",
    nombre: "Pablo Picasso",
    fecha: "1945-02-14",
    valoracion: 4,
  },
  {
    cita: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
    nombre: "Nelson Mandela",
    fecha: "1990-07-11",
    valoracion: 5,
  },
  {
    cita: "Haz lo que puedas, con lo que tengas, donde estés.",
    nombre: "Theodore Roosevelt",
    fecha: "1903-04-22",
    valoracion: 5,
  },
  {
    cita: "El futuro depende de lo que hagas hoy.",
    nombre: "Mahatma Gandhi",
    fecha: "1947-08-15",
    valoracion: 4,
  },
];

export { citasDATOS };

export type { ICita };
