class NodoPila{

    constructor(nodo){
        this.nodo=nodo;
        
        this.siguiente=null;
    }



    
}

class Pila{

    constructor(){
        this.cima=null;
    }

    PilaVacia(){
        return this.cima==null;
    }

    push(nodo){

        let nuevo=new NodoPila(nodo);
        nuevo.siguiente=this.cima;
        this.cima=nuevo;

    }

    pop(){
        let nodo=null;

        if (this.PilaVacia()==true) {
            console.log("la pila esta vacia")
        }else{
            nodo=this.cima.nodo;
            this.cima=this.cima.siguiente;
        }
        return nodo;
    }
    
}




class NodoArbolBinario{
    static correlativo=1;
    constructor(valor){
        this.valor=valor;
        this.left=null;
        this.right=null;
        this.id=NodoArbolBinario.correlativo++;
        

    }

    grafica(){
      let grafo;

        if (this.left==null && this.right==null) {
            grafo="nodo"+this.id+"[label =\""+this.valor+"\"];\n";
        }else{
            grafo="nodo"+this.id+"[ label=\"<C0>|"+this.valor+"|<C1>\"];\n";
        }

        if (this.left!=null) {
            grafo=grafo+this.left.grafica()+"nodo"+this.id+":C0->nodo"+this.left.id+"\n";

        }
        if (this.right!=null) {
            grafo=grafo+this.right.grafica()+"nodo"+this.id+":C1->nodo"+this.right.id+"\n";
        }

        return grafo;
    }

    crearGrafica(){
        let grafo="digraph g{\ngraph[size=\"11.20,5.25\"] label=\"Tree  \"; \nrankdir=TB;\nnode [shape=record,width=0.5,fontsize=15, fillcolor=gray51,style=filled];\n"
        //let nodo=null;
      //  let pila= new Pila();
    //    pila.push(raiz);
        let etiqueta="";
        let cont2=0;
        grafo+=this.grafica();
        grafo+="}\n"
       
        d3.select('#lienzo').graphviz()
        .width(800)
        .height(800)
        .renderDot(grafo);
    }
    
}


class ArbolBinario{

    constructor(){
        this.raiz=null;
    }

    agregar(valor){

        this.raiz=this.agregar2(valor,this.raiz);
    }

    agregar2(valor,raiz){
        if(raiz==null){
            let nodoArbol= new NodoArbolBinario(valor);
            return nodoArbol;
        }else{
            if (valor<raiz.valor) {
                raiz.left=this.agregar2(valor,raiz.left);
            }else if(valor>raiz.valor){
                raiz.right=this.agregar2(valor,raiz.right)
            }else{
                console.log("repetido");
            }
        }
        return raiz;
    }
    
    // agregar(valor){
    //     if (this.raiz==null) {
    //         this.raiz=new NodoArbolBinario(valor);

    //     }else{
    //         this.raiz.agregar
    //     }
    //}

    grafica(raiz){
        let grafo="digraph g{\nlabel=\"Tree  \"; \nrankdir=TB;\nnode [shape=oval,width=0.5,fontsize=15, fillcolor=seashell2,style=filled];\n"
        let nodo=null;
        let pila= new Pila();
        pila.push(raiz);
        let etiqueta="";
        let cont2=0;

        while(pila.PilaVacia()==false){
            nodo=pila.pop();

            etiqueta+="nodo"+nodo
        }


        
    }


    graficar(){
        this.raiz.crearGrafica();
    }

}

let ar=new ArbolBinario()

ar.agregar('Sharon');
ar.agregar('Sharon Tagual');
ar.agregar('Juan');
ar.agregar('Xhun');

ar.agregar('Maria');


ar.agregar('Alberto');
ar.agregar('Rosario');






ar.graficar();


