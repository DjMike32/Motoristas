function AbrirInicioSesion(){
    document.getElementById('PrmeraPagina').classList.add('Oculto');
    document.getElementById('inicio-sesion').classList.remove('Oculto');
}

function AbrirRegistrarse(){
    document.getElementById('PrmeraPagina').classList.add('Oculto');
    document.getElementById('registrarse').classList.remove('Oculto');
}

function AbrirInicio(){
    document.getElementById('inicio-sesion').classList.add('Oculto');
    document.getElementById('inicio').classList.remove('Oculto');
}

function AbrirAceptarOrdenes(){
    document.getElementById('inicio').classList.add('Oculto');
    document.getElementById('aceptarOrden').classList.remove('Oculto');
}

function AbrirOrdenesActivas(){
    document.getElementById('inicio').classList.add('Oculto');
    document.getElementById('ordenes-Activas').classList.remove('Oculto');
}

function AbrirRegistroOrdenes(){
    document.getElementById('inicio').classList.add('Oculto');
    document.getElementById('registro-ordenes').classList.remove('Oculto');
}

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
            </div>`
      });
  }

  renderizarPedidos();
