//import ListaCircular from './ListaCircular.js';


class CargarArchivo {
    static lC;
    static abrirArhivo(event) {
        var auxiliar = "";
        var archivo = event.target.files[0];
        //var lC = new ListaCircular();
        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;
                CargarArchivo.lC = new ListaCircular();
                //console.log(contenido);
                let ob = JSON.parse(e.target.result);
                // console.log(ob);

                for (let index = 0; index < ob.length; index++) {
                    const element = ob[index];
                    let us = new Usuario(element.dpi, element.nombre_completo, element.nombre_usuario, element.correo, element.rol, element.contrasenia, element.telefono);
                    CargarArchivo.lC.agregarUsuario(us);
                }
                CargarArchivo.lC.mostrar();
                CargarArchivo.lC.grafica1();

                let lista={
                    "lista":CargarArchivo.lC
                };
                localStorage.nota=lista;
                console.log(localStorage.nota)
                //localStorage("lista",JSON.stringify(lista))

            };
            try {
                reader.readAsText(archivo);
            } catch (error) {
                console.log("error");
            }
        } else {
            alert("no se ha seleccionado ningun archivo")
        }
       
    }


}





window.addEventListener('load', () => {
    document.getElementById('archivo').addEventListener('change', CargarArchivo.abrirArhivo)
});
//prueba();

