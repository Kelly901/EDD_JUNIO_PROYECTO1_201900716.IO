class Cliente{

    constructor(usuario,cantidad){
        this.usuario=usuario;
        
        this.cantidad=cantidad;
        
    }

}


class NodoListaD{

    constructor(usuario){
        this.id=0;
        this.usuario=usuario;
        this.siguiente=null;
        this.anterior=null;

    }
}

class ListaDoble{

    constructor(){
        this.primero=null;
    }

    insertar(usuario){

        let nuevo=new NodoListaD(usuario);

        if (this.primero==null) {
            this.primero=nuevo;
        }else if (nuevo.usuario.cantidad>this.primero.usuario.cantidad) {
            nuevo.siguiente=this.primero;
            this.primero.anterior=nuevo
            this.primero=nuevo
        }else{
            let actual=this.primero;
            while(actual.siguiente!=null){
                if (nuevo.usuario.cantidad>actual.siguiente.usuario.cantidad) {
                    nuevo.siguiente=actual.siguiente
                    actual.siguiente.anterior=nuevo
                    nuevo.anterior=actual
                    actual.siguiente=nuevo
                    break;
                }
                actual=actual.siguiente
            }

            if (actual.siguiente==null) {
                actual.siguiente=nuevo
                nuevo.anterior=actual;
            }
        }
    }

    mostrar(){

        let aux=this.primero;
        

        console.log("::::::::::")

        while (aux!=null) {
            console.log("cantidad: "+aux.usuario.cantidad)
            aux=aux.siguiente;
        }
       // console.log(aux.usuario.cantidad)
    }


    aumentarContador(usuario){
        let aux=this.primero;
        

        console.log("::::::::::")

        while (aux!=null) {
            if (aux.usuario.usuario==usuario) {
                console.log("true")
                aux.usuario.cantidad+=1
                return true
            }
            console.log("cantidad: "+aux.usuario.cantidad)
            aux=aux.siguiente;
        }
        let us=new Cliente(usuario,1)
        this.insertar(us)
        return false
    }


    bubleSort() {

        let valor = this.primero;
        let temporal = this.primero
        if (temporal.siguiente != null && valor != null) {

            let i = this.primero; //i
            while (i != null) {
                let j = i.siguiente //i+1
                while (j != null) {
                    if (i.usuario.cantidad < j.usuario.cantidad) {
                        let temporal2 = i.usuario
                        i.usuario = j.usuario
                        j.usuario = temporal2

                    }
                    j = j.siguiente
                    //j++;

                }
                i = i.siguiente//i++

            }
        }
    }

    mostrarTop(){

        let aux=this.primero;
        if (this.primero!=null) {
            this.bubleSort()
        }
        while (aux!=null) {
            
            let tarjeta = "<div class=\"card\" style=\"width: 8rem; display: inline-block; margin: auto 10px;\" >"
            tarjeta += "<img src=\"https://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png\" class=\"card-img-top\" alt=\"\"></img>"
            tarjeta += "<div class=\"card-body\">"
            tarjeta += "<p class=\"card-text\">Usuario: "+aux.usuario.usuario+"\nCantidad: "+aux.usuario.cantidad+"</p>"
            tarjeta += "</div>"
            tarjeta += "</div>"
    
            CargarArchivo.mTop5.innerHTML+=tarjeta;
            aux=aux.siguiente;
        }
    }

    graficar(){
        let grafo = "digraph G{\ngraph[size=\"11.75,5.25\" ,nodesep=\"0.5\"] label=\"Top 5 \";\nnode[shape=box];\n";
        
        let aux=this.primero;
        
        let conexion=""
        let nodos=""
        let cont =0;
        let cont2=0;
        console.log("::::::::::")

        while (aux!=null) {
            nodos+="N"+cont+"[label=\"Posición"+(cont+1)+"Nombre: "+aux.usuario.usuario+"\\nCantidad"+aux.usuario.cantidad+"\"];\n"
            if (aux.siguiente!=null) {
                
                cont2=cont+1;
                conexion+="N"+cont+"->N"+cont2+"[dir=both]\n"
            }
            console.log("cantidad: "+aux.usuario.cantidad)
            cont++
            aux=aux.siguiente;
        }

        grafo+=nodos+"\n"
        //grafo+=conexion+"\n"
        grafo+="{rank=same;"+conexion+"}"
        grafo+="\n}"

        console.log(grafo)

        d3.select('#mostrarTop5').graphviz()
        .width(900)
        .height(1000)
        .renderDot(grafo);
    }
}


