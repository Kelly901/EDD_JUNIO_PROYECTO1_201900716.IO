
class Nodo{
   
    constructor(nombre,password){
        this.nombre=nombre;
        this.password=password;
        this.siguiente=null;
    }
}

class Lista{

        constructor(){
            this.cabeza=null;
        }


        insertar(nombre,password){
            let nuevo=new Nodo(nombre,password);

            if(this.cabeza==null){
                this.cabeza=nuevo;
            }else{

                let aux=this.cabeza;

                while(aux.siguiente!=null){
                    aux=aux.siguiente;
                }
                aux.siguiente=nuevo;
            }
        }

         listaVacia() {
            
            return this.cabeza==null;
        }

        
        mostrarLista(){
            let nodoAux=this.cabeza;

            while(nodoAux!=null){
                console.log(nodoAux.nombre)
                nodoAux=nodoAux.siguiente;
            }
        }


        usuarioExiste(nombre){
            let nodoAux=this.cabeza;

            while(nodoAux!=null){

                if(nombre==nodoAux.nombre){
                    
                    return true;
                }
                nodoAux=nodoAux.siguiente;
            }
            return false;
        }

        usuario(){
            let nombre=document.getElementById("user").value;
            if(this.usuarioExiste(nombre)){
                alert("bienvenido "+nombre)
            }else{
                alert("el usuario "+nombre+" no existe")
            }
        }
}

let lit= new Lista();

lit.insertar("usuario1","1234");
lit.insertar("usuario2","1234");
lit.insertar("usuario3","1234");

//lit.mostrarLista();