import mongoose from "mongoose"; //libreria para conectarse con mongo DB//
import dotenv from "dotenv";//libreria para poder llamar mi archivo.env//
import express from "express";//libreria para crear servidores//
import cors from "cors";//libreria para seguridad en el server//
import { test } from "./backend/controlles/alumnos.controlles.js";
dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("funciono la base de datos")
)
.catch((error) => console.log("No jalo esta mamada, ivan dame dos"))

//creando un servidor local//
const app = express();
app.use(cors());

app.listen(4000, ()=> console.log("Funciona el fvck servidor"))






























