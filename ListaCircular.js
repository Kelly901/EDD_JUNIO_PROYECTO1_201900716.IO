//_______________________Lista simple
// class Libro {
//     constructor(isb, nombre_autor, nombre_libro, cantidad, paginas, categoria) {
//         this.isb = isb
//         this.nombre_autor = nombre_autor
//         this.nombre_libro = nombre_libro
//         this.cantidad = cantidad
//         this.paginas = paginas
//         this.categoria = categoria
//     }
// }


class NodoSimple{

    constructor(libro){
        this.libro=libro;
        this.siguiente=null;
    }
}

class ListaSimple{

    constructor(){
        this.tamanio=0;
        this.primero=null;

    }

    agregarLibro(libro){
        let nuevo=new NodoSimple(libro);
       
        this.tamanio++;
        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo
        }
    }

    get(nombre) {
        let aux = this.primero;
        while (aux != null) {
            if (aux.libro.nombre_libro ==nombre) {
                //console.log(aux.contenido)
                //  console.log("____________"+aux instanceof NodoMatrizO)

                return aux.contenido
            }
            aux = aux.siguiente
        }
        return null;
    }

    size() {
        return this.tamanio;
    }
}
 
 
 //________________________Lisa cisruclar
 
 class Usuario{
    constructor(_dpi,_nombre,_usuario,_correo,_rol,_contrasenia,_telefono){
        this.dpi=_dpi;
        this.nombre=_nombre;
        this.usuario=_usuario;
        this.correo=_correo;
        this.rol=_rol;
        this.contrasenia=_contrasenia;
        this.telefono=_telefono;
    }
}

 class NodoCircular{

    constructor(_Usuario,lista){
        this.Usuario=_Usuario;
        this.lista=lista
        this.siguiente=null;
    }


}

 class ListaCircular{

    constructor(){
        this.cabeza=null;
        this.ultimo=null;
        this.tamanio=0;
    }

    agregarUsuario(_usuario,lista){
        this.tamanio++;
        var nuevo=new NodoCircular(_usuario,lista);
        if(this.cabeza==null){
            this.cabeza=nuevo;
            this.ultimo=this.cabeza;
      
        }else{
            this.ultimo.siguiente=nuevo;
            this.ultimo=nuevo;
            this.ultimo.siguiente=this.cabeza;
          
        }

    }

    mostrar(){

        var temp=this.cabeza;
        let cont=0;
        console.log(this.tamanio);
        console.log(temp.Usuario.nombre);
         while(cont<this.tamanio){
             console.log("___________________________________________________________")
            console.log("DPI: "+temp.Usuario.dpi);

             console.log("Nombre: "+temp.Usuario.nombre);
             console.log("Usuario: "+temp.Usuario.usuario);

             console.log("Correo: "+temp.Usuario.correo);
             console.log("Rol: "+temp.Usuario.rol);
             console.log("Password: "+temp.Usuario.contrasenia);
             console.log("Telefono: "+temp.Usuario.telefono);

             temp=temp.siguiente;
             cont++;
         }
    }
    /// comprobar si el usuario existe y la contraseña coincide
    usuarioExiste(nombre,password){

        var temp=this.cabeza;
        let cont=0;
        console.log(this.tamanio);
        
         while(cont<this.tamanio){
             console.log("___________________________________________________________")
                
             if (nombre==temp.Usuario.usuario && password==temp.Usuario.contrasenia) {
                 return true;
             }

             temp=temp.siguiente;
             cont++;
         }
         return false;
    }

    rolUsuario(nombre){

        var temp=this.cabeza;
        let cont=0;
        console.log(this.tamanio);
        
         while(cont<this.tamanio){
             console.log("___________________________________________________________")
                
             if (nombre==temp.Usuario.usuario) {

                if (temp.Usuario.rol=="Administrador") {

                    return "admin";
                }else{
                    return "usuario"
                }
                 
             }

             temp=temp.siguiente;
             cont++;
         }
         return false;
    }
    usuario(){
        let nombre=document.getElementById("user").value;
        let password=document.getElementById("password").value;
        if(this.usuarioExiste(nombre,password)){
            return this.rolUsuario(nombre)

            //alert("bienvenido "+nombre)
        }else{
            alert("el usuario "+nombre+" no existe  o la contraseñia no coincide")
            return null
        }
    }

    agregar_libroCliente(libro){
        let nombre=document.getElementById("user").value
        var temp=this.cabeza;
        let cont=0;
        let contl=0;
            let contl2=0;
        console.log(this.tamanio);
        
         while(cont<this.tamanio){
             console.log("___________________________________________________________")
                
             if (nombre==temp.Usuario.usuario) {
                temp.lista.agregarLibro(libro)
                console.log("tamaño de la lista "+temp.lista.size())
                break 
             }

             temp=temp.siguiente;
             cont++;
         }

        
    }

    grafica1(nombre) {
        let grafo = "digraph G{\ngraph[size=\"11.70,6.25\"] label=\"Inicio a fin \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contl=0;
        let contl2=0;
        let contAnterior = this.tamanio;
        let temp = this.cabeza;
        let principal = "";

        while(cont<this.tamanio){
            console.log("___________________________________________________________")


            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\""+temp.Usuario.dpi +"\\n"+ temp.Usuario.nombre +"\\n"+ temp.Usuario.usuario+"\\nRol: "+temp.Usuario.rol +"\\n"+temp.Usuario.correo+"\\n"+temp.Usuario.telefono+"\\n"+"\"] ;\n"

            if (temp.siguiente != this.cabeza) {
                cont2 = cont + 1;
                console.log("cont2 "+cont2)
                conexion += "N" + cont + "->N" + cont2 + ";\n";
               // conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            let tempL=temp.lista.primero;
            
            while (tempL!=null) {

                if (tempL==temp.lista.primero) {
                    
                    conexion+="N"+cont+"->Nc"+contl+";\n";
                }

                nodos+="Nc"+contl+"[label=\""+tempL.libro.nombre_libro+"\"];\n";

                if (tempL.siguiente!=null) {
                     
                    contl2=contl+1;
                    conexion+="Nc"+contl+"->Nc"+contl2+";\n"
                }
                contl++;
                tempL=tempL.siguiente;
            }
            
            //cont++;

            


            temp=temp.siguiente;
            cont++;
        }

        // while (temp.siguiente!=this.cabeza) {
       
        

        conexion += "N" + (this.tamanio - 1)+ "->N0";
        console.log((2*this.tamanio - 1))
        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "{rank=same;" + principal + "}";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#'+nombre).graphviz()
            .width(1300)
            .height(1000)
            .renderDot(grafo);

    }
}






// let c= new ListaCircular();
// let u1= new Usuario(1234,"usuario1","usuario1","us@gmail.com","usuario","123","123");
// c.agregarUsuario(u1);
// let u2=new Usuario(1234,"usuario2","usuario2","us@gmail.com","usuario","123","123");
// c.agregarUsuario(u2);
// let u3=new Usuario(1234,"usuario3","usuario3","us@gmail.com","usuario","123","123");
// c.agregarUsuario(u3);
// c.mostrar();