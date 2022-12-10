"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.obetenerUsuario = exports.obetenerUsuarios = exports.guardarUsuario = void 0;
const guardarUsuario = (req, res) => {
    res.send('Guardar un usuario');
};
exports.guardarUsuario = guardarUsuario;
const obetenerUsuarios = (req, res) => {
    res.send('Obtener todos los usuarios');
};
exports.obetenerUsuarios = obetenerUsuarios;
const obetenerUsuario = (req, res) => {
    res.send('Obtener el usuario: ' + req.params.id);
};
exports.obetenerUsuario = obetenerUsuario;
const actualizarUsuario = (req, res) => {
    res.send('Actualizar el usuario: ' + req.params.id);
};
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (req, res) => {
    res.send('Eliminar el usuario: ' + req.params.id);
};
exports.eliminarUsuario = eliminarUsuario;
