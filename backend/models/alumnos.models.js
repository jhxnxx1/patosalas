import {Schema, model} from "mongoose";

const EsquemaAlumno = new Schema({
    nombre: String,
    calificacion: Number,
    Material:String 
})

export const TablaAlumnos = new model("Tabla de Alumnos reporobados", EsquemaAlumno)//creacion de tabla en la base datos//
