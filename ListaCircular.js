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

    constructor(_Usuario){
        this.Usuario=_Usuario;
        this.siguiente=null;
    }


}

 class ListaCircular{

    constructor(){
        this.cabeza=null;
        this.ultimo=null;
        this.tamanio=0;
    }

    agregarUsuario(_usuario){
        this.tamanio++;
        var nuevo=new NodoCircular(_usuario);
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
    usuario(){
        let nombre=document.getElementById("user").value;
        let password=document.getElementById("password").value;
        if(this.usuarioExiste(nombre,password)){
            alert("bienvenido "+nombre)
        }else{
            alert("el usuario "+nombre+" no existe  o la contraseñia no coincide")
        }
    }



    grafica1() {
        let grafo = "digraph G{\ngraph[size=\"11.75,5.25\"] label=\"Inicio a fin \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contAnterior = this.tamanio;
        let temp = this.cabeza;
        let principal = "";

        while(cont<this.tamanio){
            console.log("___________________________________________________________")
        //    console.log("DPI: "+temp.Usuario.dpi);

        //     console.log("Nombre: "+temp.Usuario.nombre);
        //     console.log("Usuario: "+temp.Usuario.usuario);

        //     console.log("Correo: "+temp.Usuario.correo);
        //     console.log("Rol: "+temp.Usuario.rol);
        //     console.log("Password: "+temp.Usuario.contrasenia);
        //     console.log("Telefono: "+temp.Usuario.telefono);

            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"" +temp.Usuario.nombre + "\"] ;\n"

            if (temp.siguiente != this.cabeza) {
                cont2 = cont + 1;
                console.log("cont2 "+cont2)
                conexion += "N" + cont + "->N" + cont2 + ";\n";
               // conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            
            //cont++;

            


            temp=temp.siguiente;
            cont++;
        }

        // while (temp.siguiente!=this.cabeza) {
        //     principal += "N" + cont + ";";
        //         nodos += "N" + cont + "[label=\"" +temp.Usuario.nombre + "\"] ;\n"
        //     console.log(temp.Usuario)
        //         if (temp.siguiente != this.cabeza) {
        //             cont2 = cont + 1;
        //             conexion += "N" + cont + "->N" + cont2 + ";\n";
        //            // conexion += "N" + cont2 + "->N" + cont + ";\n";
    
        //         }
        //         console.log("Encilado "+cont)
                
        //         cont++;
        //         temp = temp.siguiente;
            
        // }
       
        // do {
        //     principal += "N" + cont + ";";
        //     nodos += "N" + cont + "[label=\"" +temp.Usuario.nombre + "\"] ;\n"

        //     if (temp.siguiente != null) {
        //         cont2 = cont + 1;
        //         conexion += "N" + cont + "->N" + cont2 + ";\n";
        //        // conexion += "N" + cont2 + "->N" + cont + ";\n";

        //     }
            
        //     cont++;
        //     temp = temp.siguiente;
        // } while (temp.siguiente != this.cabeza);
        

        conexion += "N0->" + "N" + (this.tamanio - 1) + "[dir=both]";
        console.log((2*this.tamanio - 1))
        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "{rank=same;" + principal + "}";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzo1').graphviz()
            .width(900)
            .height(200)
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