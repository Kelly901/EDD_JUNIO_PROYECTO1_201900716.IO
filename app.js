

class app{

    admin(){
        let nombre=document.getElementById("user").value;
       
        if (nombre=="admin") {
            alert("Bienvenido admin")
       
        let login=document.getElementById("login");
        let opcionesG=document.getElementById("opciones1");
        let opcionesA=document.getElementById("opciones");
        let iniciar=document.getElementById("iniciar");
        let cerrar=document.getElementById("cerrar");

        iniciar.style.display="none";
        cerrar.style.display="inline";
        login.style.display="none";
           
            opcionesG.style.display="none";
            opcionesA.style.display="block";

        //ca.innerHTML='<button type="button" onclick="CargarArchivo.lC.usuario()" >Aceptar</button>'
        window.addEventListener('load', () => {
             document.getElementById('archivo').addEventListener('change', CargarArchivo.abrirArhivo)
         });
         
        }
    }

    cargarUsuarios(){
        let file= document.getElementById("cargar");
        let iniciar=document.getElementById("iniciar");
        let cerrar=document.getElementById("cerrar");

        iniciar.style.display="none";
        cerrar.style.display="inline";
        file.style.display="block";
    }
    mostrarPag_principal(){
        let login=document.getElementById("login")
        let opcionesA=document.getElementById("opciones");
        let opcionesG=document.getElementById("opciones1");
        let file= document.getElementById("cargar");
        let iniciar=document.getElementById("iniciar");
        let cerrar=document.getElementById("cerrar");
        file.style.display="none";
        opcionesA.style.display="none";
        login.style.display="none";
        cerrar.style.display="none";
        iniciar.style.display="inline";
        opcionesG.style.display="block";
        

    }

    mostrarPag_principalAdmin(){
        let login=document.getElementById("login")
        let opcionesA=document.getElementById("opciones");
        let opcionesG=document.getElementById("opciones1");
        let file= document.getElementById("cargar");
        let iniciar=document.getElementById("iniciar");
        let cerrar=document.getElementById("cerrar");

        file.style.display="none";
        opcionesG.style.display="none";
        login.style.display="none";
       iniciar.style.display="none";
        opcionesA.style.display="block";
        cerrar.style.display=" inline";

    }

    mostrarPag_principalUsuario(){
        let login=document.getElementById("login")
        let opcionesA=document.getElementById("opciones");
        let opcionesG=document.getElementById("opciones1");
        let file= document.getElementById("cargar");
        file.style.display="none";
        opcionesA.style.display="none";
        login.style.display="none";
        opcionesG.style.display="block";

    }
    mostrarLogin(){
        let login=document.getElementById("login")
        login.style.display="block";
    }

}

let a=new app();
