import { TablaAlumnos } from "../models/alumnos.models.js";

TablaAlumnos.create({
    nombre: "brenda",
    calificacion: 5, 
    materia:"matematics"

})

export const test = () => {console.log("Si si esta llamando al controlador correctamente")}
