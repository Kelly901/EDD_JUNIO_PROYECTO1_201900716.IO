// d3.select("#lienzo").graphviz()
//     .width(900)
//     .height(500)
//     .renderDot('digraph G{a->b}')

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


        graficar(){

            let grafo="digraph G{\nlabel=\"Lista\";\nnode [shape=box];\n";
            let nodo="";
            let conexiones="";
            let cont=0;
            let cont2=0;
            let auxiliar=this.cabeza;

            while(auxiliar!=null){
                nodo+="N"+cont+"[label=\""+auxiliar.nombre+"\"];\n";
                if (auxiliar.siguiente!=null) {
                    cont2=cont+1;
                    conexiones+="N"+cont+"-> N"+cont2+";\n";
                    
                }
                cont++;
                
                auxiliar=auxiliar.siguiente;

            }

            grafo+=nodo+"\n";
            grafo+="{rank=same;\n"+conexiones+"\n}\n}"

            console.log(grafo)
            d3.select('#lienzo').graphviz()
            .width(1800)
            .height(500)
            .renderDot(grafo);

        }
}

// let lit= new Lista();

// lit.insertar("usuario1","1234");
// lit.insertar("usuario2","1234");
// lit.insertar("usuario3","1234");
// lit.graficar()

//lit.mostrarLista();