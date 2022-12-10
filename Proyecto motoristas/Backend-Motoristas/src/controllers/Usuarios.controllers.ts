import  { Request, Response } from 'express';

export const guardarUsuario =(req: Request, res: Response) => {
    res.send('Guardar un usuario');
  };

export const obetenerUsuarios=(req: Request, res: Response) => {
    res.send('Obtener todos los usuarios');
  };

  export const obetenerUsuario=(req: Request, res: Response) => {
    res.send('Obtener el usuario: ' + req.params.id);
  };

  export const actualizarUsuario=(req: Request, res: Response) => {
    res.send('Actualizar el usuario: ' + req.params.id );
  };

  export const eliminarUsuario=(req: Request, res: Response) => {
    res.send('Eliminar el usuario: '+ req.params.id);
  };