

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const campo={
  correo:false,
  password: false,
  nombre:false,
  apellido:false,
  telefono:false,
  correo2:false,
  password2:false


}
const lbls=document.querySelectorAll('#formulario2 input');

const lbls2=document.querySelectorAll('#formulario3 input');

function validar(e){
switch(e.target.name) {
   
  case "correo":
   if(expresiones.correo.test(e.target.value)){
      document.getElementById('em').classList.remove('incorrecto');
      document.getElementById('em').classList.add('correcto');
    campo.correo['em']=true;
    }
    else{
      document.getElementById('em').classList.add('incorrecto');
      document.getElementById('em').classList.remove('correcto');
      campo.usuario['em']=false;
    }
  break;

   case "contra":
    if(expresiones.password.test(e.target.value)){
          document.getElementById('cont').classList.remove('incorrecto');
          document.getElementById('cont').classList.add('correcto');
          campo.password['cont']=true;
        }
    else{
          document.getElementById('cont').classList.add('incorrecto');
          document.getElementById('cont').classList.remove('correcto');
          campo.password['cont']=false;
        }
        
  break;


case "nombre":
    if(expresiones.nombre.test(e.target.value)){
          document.getElementById('nom').classList.remove('incorrecto');
          document.getElementById('nom').classList.add('correcto');
          campo.nombre['nom']=true;
        }
    else{
          document.getElementById('nom').classList.add('incorrecto');
          document.getElementById('nom').classList.remove('correcto');
          campo.nombre['nom']=false;
        }
        
  break;


case "apellido":
    if(expresiones.nombre.test(e.target.value)){
          document.getElementById('ape').classList.remove('incorrecto');
          document.getElementById('ape').classList.add('correcto');
          campo.apellido['ape']=true;
        }
    else{
          document.getElementById('ape').classList.add('incorrecto');
          document.getElementById('ape').classList.remove('correcto');
          campo.apellido['ape']=false;
        }
        
  break;


case "celular":
    if(expresiones.telefono.test(e.target.value)){
          document.getElementById('cel').classList.remove('incorrecto');
          document.getElementById('cel').classList.add('correcto');
          campo.telefono['cel']=true;
        }
    else{
          document.getElementById('cel').classList.add('incorrecto');
          document.getElementById('cel').classList.remove('correcto');
          campo.telefono['cel']=false;
        }
        
  break;


case "cor2":
    if(expresiones.correo.test(e.target.value)){
          document.getElementById('em2').classList.remove('incorrecto');
          document.getElementById('em2').classList.add('correcto');
          campo.correo2['em2']=true;
        }
    else{
          document.getElementById('em2').classList.add('incorrecto');
          document.getElementById('em2').classList.remove('correcto');
          campo.correo2['em2']=false;
        }
        
  break;


case "contra2":
    if(expresiones.password.test(e.target.value)){
          document.getElementById('cont2').classList.remove('incorrecto');
          document.getElementById('cont2').classList.add('correcto');
          campo.password2['cont2']=true;
        }
    else{
          document.getElementById('cont2').classList.add('incorrecto');
          document.getElementById('cont2').classList.remove('correcto');
          campo.password2['cont2']=false;
        }
        
  break;

}}

var form1=document.getElementById('formulario2');
form1.addEventListener('submit', function(e){

e.preventDefault();
if(campo.correo && campo.password)
    console.log('enviando formlario')

      document.getElementById('inicio-sesion').style.display="none";
      document.getElementById('registrarse').style.display="none";
      document.getElementById('inicio').style.display="block";
      document.getElementById('navH').style.display="block";
  })
 
  var form2=document.getElementById('formulario3');
  form2.addEventListener('submit', function(e){

e.preventDefault();
if(campo.nombre && campo.apellido && campo.telefono && campo.correo2 && campo.password2)
    console.log('enviando formlario')

      document.getElementById('inicio-sesion').style.display="none";
      document.getElementById('registrarse').style.display="none";
      document.getElementById('inicio').style.display="block";
      document.getElementById('navH').style.display="block";
  })

lbls.forEach((input)=>{
  input.addEventListener('keyup', validar)
  input.addEventListener('blur', validar)
})

lbls2.forEach((input)=>{
  input.addEventListener('keyup', validar)
  input.addEventListener('blur', validar)
})

function mostrarSiguiente(idPagina){
   
    if(idPagina=='inicio-sesion'){
      
        document.getElementById('primer-Pagina').style.display="none";
        document.getElementById('inicio-sesion').style.display="block";

    }else if(idPagina=='registrarse'){
     
        document.getElementById('primer-Pagina').style.display="none";
        document.getElementById('registrarse').style.display="block";
  

    }   
    else if(idPagina=='aceptarOrden'){
        document.getElementById('inicio').style.display="none";
        document.getElementById('aceptarOrden').style.display="block";
    }
    else if(idPagina=='ordenes-Activas'){
        document.getElementById('inicio').style.display="none";
        document.getElementById('ordenes-Activas').style.display="block";
    }
    else if(idPagina=='registro-ordenes'){
        document.getElementById('inicio').style.display="none";
        document.getElementById('registro-ordenes').style.display="block";
    }

return false;
}

function volver(idPagina){
    if(idPagina=='primer-Pagina'){
        document.getElementById('registrarse').style.display="none";
        document.getElementById('inicio-sesion').style.display="none";
        document.getElementById('primer-Pagina').style.display="block";
    }

}



//Toggle
 const toggle= document.querySelector('.toggle')
 const links= document.querySelector('.links')
 const inicio=document.querySelector('#inicio')
 const back=document.querySelector('.backI')
 const aceptOrden=document.querySelector('#aceptarOrden')
 const ordenAct=document.querySelector('#ordenes-Activas')
 const regOrden=document.querySelector('#registro-ordenes')




 back.addEventListener('click', ()=> {
    inicio.classList.remove('Oculto')
    aceptOrden.classList.add('Oculto')
    ordenAct.classList.add('Oculto')
    regOrden.classList.add('Oculto') 
    links.classList.remove('active')
})

 toggle.addEventListener('click', ()=> {
     links.classList.toggle('active')
 })

 function renderizarPedidos() {
  pedidos.forEach(p => {
        document.getElementById('Pedido').innerHTML += 
            `  <div style="display: flex; justify-content:center; align-items: center;  "><hr style="background-color: #000; width: 90%; opacity: 1;"></div>
            <div class="ped" style="display: flex; justify-content:space-between; align-items: center;">
            <div class="font-pedido">Pedido realizado en: ${p.lugar}<br>
             Direccion: ${p.Direccion}
            <br><br>
            <div class="time-color">
           ${p.Tiempo}
           </div>
            </div>
            <div id="check"><input type="checkbox"></div>
            </div>`;
      });
  }

 






    /*function renderizarTarjetas() {
      tarjetas.forEach(t => {
        document.getElementById('lista-tarjetas').innerHTML += `<option value="${t.numero}">${t.numero}/${t.marca}</option>` ;
      });
    
      document.getElementById('lista-tarjetas').value = null;
    }
    
    renderizarTarjetas();

function renderizarCategorias() {
  if (tarjetaSeleccionada.categoriaTransacciones) {
    tarjetaSeleccionada.categoriaTransacciones.forEach(categoria => {
      document.getElementById('transacciones').innerHTML += 
          `<div class="transaccion">
            <div class="icono">
              <span>
                <i class="${categoria.icono}"></i>
              </span>
            </div>
            <div class="texto">
              <div class="titulo">${categoria.titulo}</div>
              <div class="descripcion">${categoria.fechaUltimaTransaccion}</div>
            </div>
            <div class="monto">
              $${categoria.total}
            </div>
          </div>`;
    });
  }
}*/

