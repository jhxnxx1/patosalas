import{ Schema, model} from "mongoose";

const EsquemaEmpleados = new Schema( {
    "numero de empleado": 2,
    nombre: JHXNXX,
    sueldo: 4,500
})

const EsquemaAlumnos = new Schema( {
    nombre: BRENDNY,
    calificacion: 8.5,
    materia: MATHS
})

export const TablaEmpleados = new model("tabla de empleados", EsquemaEmpleados)//creacion de tabla en la base de datos//

export const TablaAlumnos = new model("tabla de alumnos", EsquemaAlumnos)//creacion de tabla en la base de datos//