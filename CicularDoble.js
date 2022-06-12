class NodoCircularDoble {

    constructor(numero) {
        this.numero = numero;
        this.siguiente = null;
        this.anterior = null;
        this.tamanio = 0;
    }
}

class CircularDoble {

    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertar(numero) {
        let nuevo = new NodoCircularDoble(numero);
        let cont = 0;
        if (this.primero == null) {
            this.primero = nuevo;
            this.primero.siguiente = this.primero;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            //this.tamanio++;

            this.tamanio = cont;

        } else {
            this.ultimo.siguiente = nuevo;
            nuevo.siguiente = this.primero;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            this.primero.anterior = this.ultimo;

            this.tamanio = cont;
            //   this.tamanio++;
        }
    }

    listaVacia() {

        return this.primero == null;
    }

    mostrar() {

        let aux = this.primero;

        do {
            console.log("n" + aux.numero);
            this.tamanio = this.tamanio + 1;
            aux = aux.siguiente;
        } while (aux != this.primero);

        console.log("tamanio" + this.tamanio)
    }


    grafica1() {
        let grafo = "digraph G{\ngraph[size=\"11.75,5.25\"] label=\"Inicio a fin \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contAnterior = this.tamanio;
        let temp = this.primero;
        let principal = "";

        do {
            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"" + temp.numero + "\"] ;\n"

            if (temp.siguiente != this.primero) {
                cont2 = cont + 1;
                conexion += "N" + cont + "->N" + cont2 + ";\n";
                conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            
            cont++;
            temp = temp.siguiente;
        } while (temp != this.primero);
       

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

    grafica2() {
        let grafo = "digraph G{\ngraph[size=\"11.75,5.25\"] label=\"Fin a inicio \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contAnterior = this.tamanio;
        let temp = this.ultimo;
        let principal = "";

        do {
            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"" + temp.numero + "\"] ;\n"

            if (temp.anterior != this.ultimo) {
                cont2 = cont + 1;
                conexion += "N" + cont + "->N" + cont2 + ";\n";
                conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            
            cont++;
            temp = temp.anterior;
        } while (temp != this.ultimo);
       

        conexion += "N0->" + "N" + (this.tamanio - 1) + "[dir=both]";
        console.log((2*this.tamanio - 1))
        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "{rank=same;" + principal + "}";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzo2').graphviz()
            .width(900)
            .height(200)
            .renderDot(grafo);

    }

    grafica() {
        let grafo = "digraph G{\ngraph[size=\"11.20,5.25\"] label=\"Doble recorrido \";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let contAnterior = this.tamanio;
        let temp = this.primero;
        let principal = "";

        do {
            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"" + temp.numero + "\"] ;\n"

            if (temp.siguiente != this.primero) {
                cont2 = cont + 1;
                conexion += "N" + cont + "->N" + cont2 + ";\n";
                conexion += "N" + cont2 + "->N" + cont + ";\n";

            }
            
            cont++;
            temp = temp.siguiente;
        } while (temp != this.primero);
        conexion += "N"+(this.tamanio - 1) +"->"+ "N" + (this.tamanio )+";\n" ;
        conexion += "N"+(this.tamanio ) +"->"+ "N" + (this.tamanio -1)+";\n" ;


        do {
            principal += "N" + cont + ";";
            nodos += "N" + cont + "[label=\"" + temp.numero + "\"] ;\n"

            if (temp.siguiente != this.primero) {
                cont2 = cont + 1;
                conexion += "N" + cont + "->N" + cont2 + ";\n";
                conexion += "N" + cont2 + "->N" + cont + ";\n";

            }

            cont++;
            temp = temp.siguiente;
        } while (temp != this.primero);

        conexion += "N0->" + "N" + (2*this.tamanio - 1) + "[dir=both]";
        console.log((2*this.tamanio - 1))
        grafo += nodos + "\n";
        grafo += conexion + "\n";
        grafo += "{rank=same;" + principal + "}";
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzo').graphviz()
            .width(1100)
            .height(200)
            .renderDot(grafo);

    }
}


let cir = new CircularDoble();

cir.insertar(2);
cir.insertar(0);
cir.insertar(1);
cir.insertar(9);
cir.insertar(0);
cir.insertar(0);
cir.insertar(7);
cir.insertar(1);
cir.insertar(6);
console.log(cir)
cir.mostrar()
cir.grafica()
cir.grafica1()
cir.grafica2()
