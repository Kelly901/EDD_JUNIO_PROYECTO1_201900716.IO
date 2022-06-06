

class app{

    admin(){
        let nombre=document.getElementById("user").value;
       
        if (nombre=="admin") {
            alert("Bienvenido admin")
        let ca= document.getElementById("cargar");
        ca.innerHTML='<input id="archivo" type="file" >'
        //ca.innerHTML='<button type="button" onclick="CargarArchivo.lC.usuario()" >Aceptar</button>'
        window.addEventListener('load', () => {
             document.getElementById('archivo').addEventListener('change', CargarArchivo.abrirArhivo)
         });

        }
    }

}

//let a=new app();
