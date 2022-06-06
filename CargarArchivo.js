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



function obterner() {
    console.log("hola")
    if (localStorage.getItem("ll")) {
        //let localS = JSON.parse(localStorage.getItem("lC"));
        //let la=JSON.parse(localStorage.getItem("ll"));
        //let la=JSON.parse(sessionStorage.getItem("ll"))
        let la= sessionStorage.getItem("ll")
        //console.log(localS);
        console.log(la.a)
    
    } else {
        console.log("no existe")
    }
}
function listaC() {
    let lc2 = {
        "lC": "diccionario"
    };
    let a={
        "a":CargarArchivo.lC
    }

    //localStorage.setItem("lC", JSON.stringify(lc2))
   // localStorage.setItem("ll",JSON.stringify(a));
    localStorage.setItem("n", "hola");
    sessionStorage.setItem("ll",a)

}

function prueba() {
    if (CargarArchivo.lC != null) {
        listaC();
        console.log("ddddddddddddddddd" + CargarArchivo.lC.cabeza.Usuario.usuario)
        //let ar = new CargarArchivo();
        obterner();

    } else {
        console.log("vacia")
    }
}
window.addEventListener('load', () => {
    document.getElementById('archivo').addEventListener('change', CargarArchivo.abrirArhivo)
});
//prueba();

