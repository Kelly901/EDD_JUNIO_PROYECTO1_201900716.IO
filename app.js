

class app {

    admin() {
        let nombre = document.getElementById("user").value;
        let password = document.getElementById("password").value;

        if (nombre == "Wilfred" && password == "123") {
            alert("Bienvenido admin")

            let login = document.getElementById("login");
            let opcionesG = document.getElementById("opciones1");
            let opcionesA = document.getElementById("opciones");
            let iniciar = document.getElementById("iniciar");
            let cerrar = document.getElementById("cerrar");

            iniciar.style.display = "none";
            cerrar.style.display = "inline";
            login.style.display = "none";

            opcionesG.style.display = "none";
            opcionesA.style.display = "block";

            //ca.innerHTML='<button type="button" onclick="CargarArchivo.lC.usuario()" >Aceptar</button>'

        } else if (CargarArchivo.lC != null) {
            if (CargarArchivo.lC.usuario() == "admin") {

                alert("Bienvenido admin" + nombre)

                let login = document.getElementById("login");
                let opcionesG = document.getElementById("opciones1");
                let opcionesA = document.getElementById("opciones");
                let iniciar = document.getElementById("iniciar");
                let cerrar = document.getElementById("cerrar");

                iniciar.style.display = "none";
                cerrar.style.display = "inline";
                login.style.display = "none";

                opcionesG.style.display = "none";
        CargarArchivo.mTop5.style.display="none"

                opcionesA.style.display = "block";


            } else if (CargarArchivo.lC.usuario() == "usuario") {

                alert("Bienvenido usuario")
                this.mostrarPag_principalUsuario()
                let iniciar = document.getElementById("iniciar");
                let cerrar = document.getElementById("cerrar");
                
                iniciar.style.display="none"
                cerrar.style.display="inline"

            }
        }

    }

    cargarUsuarios() {
        let file = document.getElementById("cargar");
        let iniciar = document.getElementById("iniciar");
        let cerrar = document.getElementById("cerrar");

        iniciar.style.display = "none";
        cerrar.style.display = "inline";
        file.style.display = "block";
    }

    //_________cargar autores
    cargarAutores() {
        let file = document.getElementById("cargar_autores");
        let iniciar = document.getElementById("iniciar");
        let cerrar = document.getElementById("cerrar");

        iniciar.style.display = "none";
        cerrar.style.display = "inline";
        file.style.display = "block";
    }
    //Cargar archivo de libros
    cargarLibros() {
        let file = document.getElementById("cargar_libros");
        let iniciar = document.getElementById("iniciar");
        let cerrar = document.getElementById("cerrar");

        iniciar.style.display = "none";
        cerrar.style.display = "inline";
        file.style.display = "block";
    }
    //mostar ventana principal
    mostrarPag_principal() {
        let login = document.getElementById("login")
        let opcionesA = document.getElementById("opciones");
        let opcionesG = document.getElementById("opciones1");
        let file = document.getElementById("cargar");
        let iniciar = document.getElementById("iniciar");
        let cerrar = document.getElementById("cerrar");
        let libros = document.getElementById("motrarLibros")
        let mostrar = document.getElementById("mostrarPila")
        let mostraInfo = document.getElementById("infoAutor");
        let botones = document.getElementById("botonesLibros");
        let opcionesU = document.getElementById("opciones2")
        let cola=document.getElementById("lienzoCola");
        let top5=document.getElementById("mostrarTop5");
        let libros2=document.getElementById("mostrarLibros2")

        if (CargarArchivo.ldoble!=null) {
            CargarArchivo.mTop5.innerHTML=""

            CargarArchivo.ldoble.mostrarTop()
            CargarArchivo.ldoble.graficar()
        }


        



        if (CargarArchivo.autores != null) {
            CargarArchivo.autores.innerHTML = "";

            CargarArchivo.autores.style.display = "none";

        }

        if (CargarArchivo.librosM != null) {

            CargarArchivo.librosM.style.display = "none"

        }

        libros.style.display = "none";
        file.style.display = "none";
        opcionesA.style.display = "none";
        login.style.display = "none";
        cerrar.style.display = "none";
        mostrar.style.display = "none"
        mostraInfo.style.display = "none";
        //CargarArchivo.librosM.style.display="none"
        botones.style.display = "none";
        opcionesU.style.display="none"
        cola.style.display="none"
        libros2.style.display="none"
        iniciar.style.display = "inline";
        opcionesG.style.display = "block";
        CargarArchivo.mTop5.style.display="block"
        top5.style.display="block"
        



    }

    mostrarPag_principalAdmin() {
        let login = document.getElementById("login")
        let opcionesA = document.getElementById("opciones");
        let opcionesG = document.getElementById("opciones1");
        let file = document.getElementById("cargar");
        let iniciar = document.getElementById("iniciar");
        let cerrar = document.getElementById("cerrar");
        let libros = document.getElementById("motrarLibros")
        let lb = document.getElementById("cargar_libros");
        let autor = document.getElementById("cargar_autores")
        let botones = document.getElementById("botonesLibros")
        let opcionesU = document.getElementById("opciones2")
        let cola=document.getElementById("lienzoCola");
        let libros2=document.getElementById("mostrarLibros2")
        let top=document.getElementById("mostrarTop5")

        if (CargarArchivo.ldoble!=null) {
            CargarArchivo.mTop5.innerHTML=""
            CargarArchivo.ldoble.mostrarTop()

            CargarArchivo.ldoble.graficar()
        }


        if (CargarArchivo.autores != null) {
            CargarArchivo.autores.innerHTML = "";
            CargarArchivo.autores.style.display = "none";
        }

        if (CargarArchivo.librosM != null) {

            CargarArchivo.librosM.style.display = "none"

        }

        libros.style.display = "none";
        lb.style.display = "none";
        file.style.display = "none";
        opcionesG.style.display = "none";
        login.style.display = "none";
        iniciar.style.display = "none";
        autor.style.display = "none";
        botones.style.display = "none";
        opcionesU.style.display = "none";
        libros2.style.display="none"
        cola.style.display="none";
        
        opcionesA.style.display = "block";
        cerrar.style.display = " inline";
        top.style.display="block"

    }

    mostrarPag_principalUsuario() {
        let login = document.getElementById("login")
        let opcionesA = document.getElementById("opciones");
        let opcionesG = document.getElementById("opciones1");
        let opcionesU = document.getElementById("opciones2")
        let file = document.getElementById("cargar");
        let botones = document.getElementById("botonesLibros")
        let libros = document.getElementById("motrarLibros")
        let libros2=document.getElementById("mostrarLibros2")
        let top=document.getElementById("mostrarTop5")

        if (CargarArchivo.librosM != null) {

            CargarArchivo.librosM.style.display = "none"

        }
        if (CargarArchivo.ldoble!=null) {
            CargarArchivo.mTop5.innerHTML=""

            CargarArchivo.ldoble.mostrarTop()

            CargarArchivo.ldoble.graficar()
        }

        file.style.display = "none";
        opcionesA.style.display = "none";
        login.style.display = "none";
        botones.style.display = "none";
        //CargarArchivo.librosM.style.display="none"
        libros.style.display = "none";
        opcionesG.style.display = "none";
        libros2.style.display="none"
        opcionesU.style.display = "block"
        
        CargarArchivo.mTop5.style.display="block"
        top.style.display="block"
        

    }
    mostrarLogin() {
        let login = document.getElementById("login")
        let top=document.getElementById("mostrarTop5")

        //CargarArchivo.matrizDis.graficar()
        if (CargarArchivo.mTop5!=null) {
        CargarArchivo.mTop5.style.display="none"
            
        }
        top.style.display="none"
        login.style.display = "block";

    }
    //Mostrar libros con fondo

    mostrarLibros() {
        let libros = document.getElementById("motrarLibros")
        let libros2=document.getElementById("mostrarLibros2")
        let top=document.getElementById("mostrarTop5")

        libros.style.display = "block";
        libros2.style.display="block"
        console.log("::::::::::garvfica::::::::::::::::::::")
        CargarArchivo.mTop5.style.display="none"
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        CargarArchivo.matrizOrt.graficar('#lienzoL2')
        CargarArchivo.matrizDis.graficar('#lienzoL3')

    }

    mostrarAutores() {
        let top=document.getElementById("mostrarTop5")

        CargarArchivo.autores.style.display = "block";
        CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz);
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"

        CargarArchivo.autores.innerHTML += "<label for=\"\" style=\"display: block ;\"> Buscar autor</label>"

        CargarArchivo.autores.innerHTML += "<input id=\"buscar\" type=\"text\" style=\"display:block;\"></input>";
        CargarArchivo.autores.innerHTML += "<button type=\"button\" class=\"btn btn-outline-dark\" onclick=\"a.buscarAutor()\">Buscar Autor</button>"


    }

    buscarAutor() {
        let mostraInfo = document.getElementById("infoAutor");
        let buscar = document.getElementById("buscar").value
        let top=document.getElementById("mostrarTop5")

        console.log("______" + buscar)
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        mostraInfo.style.display = "block"

        CargarArchivo.arbol_bi.pre_buscar(CargarArchivo.arbol_bi.raiz, buscar)

    }


    mostrarPila() {
        let mostrar = document.getElementById("mostrarPila")
        let top=document.getElementById("mostrarTop5")

        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        mostrar.style.display = "block"

    }

    agregarLibro() {
        let agregar = document.getElementById("AgregarLibro").value
        let top=document.getElementById("mostrarTop5")

        console.log("mostrar Pila" + agregar)
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        if (CargarArchivo.matrizOrt.mostrarPila(agregar)) {
            console.log("pila")
        } else if (CargarArchivo.matrizDis.mostrarPila(agregar)) {
            console.log("")
        } else {
            alert("Libro no encontrado")
        }

    }

    mosotrarBotonesDyA() {
        let botones = document.getElementById("botonesLibros")
        let top=document.getElementById("mostrarTop5")

        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"

        botones.style.display = "block"

    }

    motrarLibrosA() {
        //let libro=document.getElementById("listaLibros")
        CargarArchivo.librosM.innerHTML = ""
        let top=document.getElementById("mostrarTop5")

        CargarArchivo.listaAs.bubleSort()
        CargarArchivo.listaAs.mostrar()
        CargarArchivo.listaAs.mostrarLibros()
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        CargarArchivo.librosM.style.display = "block"


    }

    mostrarLibrosD() {

        let top=document.getElementById("mostrarTop5")

        CargarArchivo.librosM.innerHTML = ""

        CargarArchivo.listaAs.ordenarQuickSortDescendente2(0, CargarArchivo.listaAs.size - 1);
        CargarArchivo.listaAs.mostrarLibros()
        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        CargarArchivo.librosM.style.display = "block"




    }


    compraLibro() {
        let comprar = document.getElementById("compra").value
        let top=document.getElementById("mostrarTop5")

        CargarArchivo.mTop5.style.display="none"
        top.style.display="none"
        CargarArchivo.listaAs.bucarLibro(comprar);

        //bucarLibro
    }

    mostrarUsuarios() {
        let usuarios1 = document.getElementById("mostrarUsuarios1");
        CargarArchivo.lC.grafica1("mostrarUsuarios1");
        CargarArchivo.mTop5.style.display="none"

        usuarios1.style.display = "block"
    }

    mostrarCola(){
        let cola=document.getElementById("lienzoCola");
        let top=document.getElementById("mostrarTop5")
        
        top.style.display="none"
        CargarArchivo.colaU.graficar()
        CargarArchivo.mTop5.style.display="none"

        cola.style.display="block"
    }

    mostrarTop5(){
        let top=document.getElementById("mostrarTop5")
        
        top.style.display="block"
    }
}
//clase principal
let a = new app();
