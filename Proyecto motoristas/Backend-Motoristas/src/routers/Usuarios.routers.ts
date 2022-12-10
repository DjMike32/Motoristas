import express, { Request, Response } from 'express';
import {Router} from "express";
import {guardarUsuario, obetenerUsuarios, obetenerUsuario, actualizarUsuario, eliminarUsuario} from "../controllers/Usuarios.controllers";


export const ruta: Router = express.Router();

//Guardar un usuario
ruta.post('/', guardarUsuario);


//Obtener todos los usuarios
ruta.get('/', obetenerUsuarios);

//Obtener un usuario

ruta.get('/:id', obetenerUsuario);

//Actualizar un usuario
ruta.put('/:id', actualizarUsuario);

//Eliminar un usuario
ruta.delete('/:id', eliminarUsuario);