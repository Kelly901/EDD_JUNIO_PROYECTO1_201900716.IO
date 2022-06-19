class NodoPila{

    constructor(numero){
        this.numero=numero;

        this.siguiente=null;
    }




}

class PilaTarea{
    
    constructor(){
        this.tamanio=0;
        
        this.cima=null;
    }

    PilaVacia(){
        return this.cima==null;
    }

    push(numero){
        console.log(numero)
        let nuevo=new NodoPila(numero);
        this.tamanio++;
        nuevo.siguiente=this.cima;
        this.cima=nuevo;

    }

    pop(){
        let nodo=0;
        this.tamanio=this.tamanio-1;
        if (this.PilaVacia()==true) {
            console.log("la pila esta vacia")
        }else{
            nodo=this.cima.numero;
            this.cima=this.cima.siguiente;
        }
        return nodo;
    }


    grafo(num){

        
        
        let grafo = "digraph G{\ngraph[size=\"11.20,5.25\"] label=\"Pila \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let temp=this.cima;
        console.log(this.cima)

        while (temp!=null) {
            
            nodos += "N" + cont + "[label=\"" + temp.numero+ "\"] ;\n"

            if (temp.siguiente!=null) {
                cont2=cont+1;
                conexion += "N" + cont + "->N" + cont2 + ";\n";
            }
            cont++;
            temp=temp.siguiente;
        }

        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzo'+num).graphviz()
            .width(500)
            .height(700)
            .renderDot(grafo);

    }


    

}



function graficar(){
    let n1="pila"
    let n2="pilaa"

    let cont=0;
    let principal=document.getElementById("principal")
       
    let pila1=new PilaTarea();
    pila1.push(2);
    pila1.push(0);
    pila1.push(1);
    pila1.push(9);
    pila1.push(0);
    pila1.push(0);
    pila1.push(7);
    pila1.push(1);
    pila1.push(6);
    pila1.grafo(1);
    cont++;
    pila1.grafo(18)
    let pila2=new PilaTarea()
    //sacar 6
    pila2.push(pila1.pop())
    pila1.grafo(17);
    pila2.grafo(16);
    cont++;
    //________________________
    //sacar 1
    pila2.push(pila1.pop())
    pila1.grafo(15);
    pila2.grafo(14);
    cont++;
    //________________________
    //sacar 7
    pila2.push(pila1.pop())
    pila1.grafo(13);
    pila2.grafo(12);
    cont++;
    //________________________
    //sacar 0
    pila2.push(pila1.pop())
    pila1.grafo(11);
    pila2.grafo(10);
    cont++;
    //________________________
    //sacar 0
    pila2.push(pila1.pop())
    pila1.grafo(9);
    pila2.grafo(8);
    cont++;
    //________________________
    //sacar 9
    pila2.push(pila1.pop())
    pila1.grafo(7);
    pila2.grafo(6);
    cont++;
    //________________________
    //sacar 1
    pila2.push(pila1.pop())
    pila1.grafo(5);
    pila2.grafo(4);
    cont++;
    //________________________
    //sacar 0
    pila2.push(pila1.pop())
    pila1.grafo(3);
    pila2.grafo(2);
    cont++;
    //________________________
    //sacar 2
    pila2.push(pila1.pop())
    //pila1.grafo(n1+cont);
    pila2.grafo(1);
    cont++;
    //________________________
    //<div ></div>
}