class UsuarioE{

    constructor(usuario,nombre_libro){
        this.usuario=usuario
        this.nombre_libro=nombre_libro
        this.cantidad=1
    }
}


class NodoColaU{
    
    constructor(usuario){
        this.usuario=usuario;
        this.siguiente=null;

    }
}
class ColaUsuario{

    constructor(){
        this.tamanio=0;

        this.frente=null;
        this.fin=null;

    }

    colaVacia(){
        return this.frente==null;
    }


    encolar(usuario){
        
        let nuevo=new NodoColaU(usuario);
        this.existente(usuario.usuario)
        this.tamanio++;
        if (this.colaVacia()) {
            this.frente=nuevo;
        }else{
            nuevo.siguiente=null;
            this.fin.siguiente=nuevo
        }
        this.fin=nuevo
    }


    desencolar(){
        let auxiliar=null;

        if (!this.colaVacia()) {
            auxiliar=this.frente;

            this.frente=this.frente.siguiente
        }

        return auxiliar;
    }


    

    mostrarCola(){
        let aux=this.frente;
        while (aux!=null) {
            
            aux=aux.siguiente;
        }

    }

    existente(nombre_libro,usuario){

        let aux=this.frente;
        while (aux!=null) {
            if (nombre_libro==aux.usuario.nombre_libro && usuario==aux.usuario.usuario ) {
                console.log("libro existente")
                aux.usuario.cantidad+=1;

                return true
            }
            aux=aux.siguiente;
        }
        return false;

    }

    graficar(){

        let temp=this.frente;
        let cont=0;
        let cont2=0;
        let grafo = "digraph G{\ngraph[size=\"8.70,6.25\"] label=\"Cola de espera \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        while (cont<this.tamanio) {
            nodos+="Nc"+cont+"[label=\""+temp.usuario.usuario+"\\n"+temp.usuario.nombre_libro+"\\ncantidad: "+temp.usuario.cantidad+"\"];\n";
            
            if (temp.siguiente!=null) {
                cont2=cont+1;
                conexion+="Nc"+cont+"->Nc"+cont2+";\n"

            }
            cont++;
            temp=temp.siguiente;
        }


        grafo += nodos + "\n";
       // grafo += conexion + "\n";
        grafo += "{rank=same;" + conexion + "}";
        grafo += "\n}";


        d3.select('#lienzoCola').graphviz()
        .width(900)
        .height(1000)
        .renderDot(grafo);
    }
}
