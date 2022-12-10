"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruta = void 0;
const express_1 = __importDefault(require("express"));
const Usuarios_controllers_1 = require("../controllers/Usuarios.controllers");
exports.ruta = express_1.default.Router();
//Guardar un usuario
exports.ruta.post('/', Usuarios_controllers_1.guardarUsuario);
//Obtener todos los usuarios
exports.ruta.get('/', Usuarios_controllers_1.obetenerUsuarios);
//Obtener un usuario
exports.ruta.get('/:id', Usuarios_controllers_1.obetenerUsuario);
//Actualizar un usuario
exports.ruta.put('/:id', Usuarios_controllers_1.actualizarUsuario);
//Eliminar un usuario
exports.ruta.delete('/:id', Usuarios_controllers_1.eliminarUsuario);
