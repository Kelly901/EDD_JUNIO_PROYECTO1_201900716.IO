//import ListaCircular from './ListaCircular.js';


class CargarArchivo {
    static lC;
    static arbol_bi;
    static matrizDis;
    static matrizOrt;
    static autores;
    static listaAs;
    static librosM;
    static colaU;
    static ldoble;
    //_-
    static mTop5;
    static abrirArhivo(event) {
        let auxiliar = "";
        let archivo = event.target.files[0];
        //var lC = new ListaCircular();
        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;
                //inicializacion
                CargarArchivo.lC = new ListaCircular();
                //cola
                CargarArchivo.colaU=new ColaUsuario()
                CargarArchivo.ldoble=new ListaDoble();
                CargarArchivo.mTop5=document.getElementById("cardsTop5");
                //console.log(contenido);

                //agregar al administrador
                let admin=new Usuario("2354168452525","WIlfred Perez","Wilfred","wilfred@corre.con","Administrador","123","+502(123) 123-4567")    
                //_
                let lis=new ListaSimple()
                CargarArchivo.lC.agregarUsuario(admin,lis);
                let ob = JSON.parse(e.target.result);
                // console.log(ob);

                for (let index = 0; index < ob.length; index++) {
                    let lis2=new ListaSimple();
                    const element = ob[index];
                    let us = new Usuario(element.dpi, element.nombre_completo, element.nombre_usuario, element.correo, element.rol, element.contrasenia, element.telefono);
                    CargarArchivo.lC.agregarUsuario(us,lis2);
                }
                CargarArchivo.lC.mostrar();
                CargarArchivo.lC.grafica1("lienzo1");

                let lista = {
                    "lista": CargarArchivo.lC
                };
                localStorage.nota = lista;
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


    static cargarAutores() {
        



        let auxiliar = "";
        let archivo = event.target.files[0];
        //var lC = new ListaCircular();
        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;
                CargarArchivo.arbol_bi = new ArbolBinario()
                CargarArchivo.autores=document.getElementById("autores");
                //console.log(contenido);
                let ob = JSON.parse(e.target.result);
                
                // console.log(ob)
                
                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                for (let index = 0; index < ob.length; index++) {
                    const element = ob[index];
                    let us = new Autor(element.dpi, element.nombre_autor, element.correo, element.telefono,element.direccion,element.biografia);
                    CargarArchivo.arbol_bi.agregar(us);
                }
                
                CargarArchivo.arbol_bi.graficar();
               // CargarArchivo.arbol_bi.pre_order(CargarArchivo.arbol_bi.raiz)

             
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
    static cargarLibros() {
        

//constructor(isb,nombre_autor,nombre_libro,cantidad,paginas,categoria)

        let auxiliar = "";
        let archivo = event.target.files[0];
        //var lC = new ListaCircular();
        if (archivo) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let contenido = e.target.result;
                auxiliar = contenido;
                CargarArchivo.matrizDis=new MatrizOrtogonal();
                CargarArchivo.matrizOrt= new MatrizOrtogonal();
                CargarArchivo.listaAs=new ListaAscendete()
                CargarArchivo.librosM=document.getElementById("listaLibros");
                //console.log(contenido);
                let ob = JSON.parse(e.target.result);
                // console.log(ob);
                // constructor(dpi,nombre,correo,telefono,direccion,bibliografia){
                let cont1=0;
                for (let fil = 1; fil <=25; fil++) {
                   
                    for (let col = 1; col <=25; col++) {
                        let lib=new Libro("","","","","","")
                        CargarArchivo.matrizOrt.insertar2(fil,col,lib,cont1)
                        cont1++;
                    }
                    
                }
                for (let index = 0; index < ob.length; index++) {
                    const element = ob[index];
                    // if (element.categoria=="Thriller") {
                    
                    // }
                    console.log("isbn "+element.isbn)
                    let lib = new Libro(element.isbn,element.nombre_autor,element.nombre_libro,element.cantidad,element.paginas,element.categoria);
                    CargarArchivo.listaAs.insertarLibro(lib)

                    if (element.categoria=="Thriller") {

                      let lib = new Libro(element.isbn,element.nombre_autor,element.nombre_libro,element.cantidad,element.paginas,element.categoria);
                        CargarArchivo.matrizDis.insertar2(element.fila,element.columna,lib,element.fila);
                    }else{
                        
                        let lib = new Libro(element.isbn,element.nombre_autor,element.nombre_libro,element.cantidad,element.paginas,element.categoria);
                    CargarArchivo.matrizOrt.guardarLibro(element.fila,element.columna,lib)
                    }


                    
                }
                CargarArchivo.matrizDis.reccorerFilas() 
                CargarArchivo.matrizDis.graficar("#lienzoL")
                CargarArchivo.matrizOrt.graficar("#lienzoLo")

                CargarArchivo.listaAs.mostrar()
               
                
               // CargarArchivo.arbol_bi.graficar();

             
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




/////////____________________________________-







window.addEventListener('load', () => {
    document.getElementById('archivo').addEventListener('change', CargarArchivo.abrirArhivo)
});
//prueba();

window.addEventListener('load', () => {
    document.getElementById('archivo_A').addEventListener('change', CargarArchivo.cargarAutores)
});

//cargar_libros
window.addEventListener('load', () => {
    document.getElementById('cargar_libros').addEventListener('change', CargarArchivo.cargarLibros)
});