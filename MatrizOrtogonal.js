class NodoPilaL {

    constructor(libro) {
        this.libro = libro;

        this.siguiente = null;
    }




}

class PilaLibro {

    constructor() {
        this.tamanio = 0;

        this.cima = null;
    }

    PilaVacia() {
        return this.cima == null;
    }

    push(libro) {
        //console.log(numero)
        let nuevo = new NodoPilaL(libro);
        this.tamanio++;
        nuevo.siguiente = this.cima;
        this.cima = nuevo;

    }

    pop() {
        let nodo = 0;
        this.tamanio = this.tamanio - 1;
        if (this.PilaVacia() == true) {
            console.log("la pila esta vacia")
        } else {
            nodo = this.cima.numero;
            this.cima = this.cima.siguiente;
        }
        return nodo;
    }


    grafo(nombre) {


        //transparent
        let grafo = "digraph G{\ngraph[size=\"11.20,5.25\"] bgcolor=\"lightblue\" label=\"Pila de ejemplares\\n" + nombre + "\";\nnode[shape=box];\n";
        let conexion = "";
        let nodos = "";
        let cont = 0;
        let cont2 = 0;
        let temp = this.cima;
        //console.log(this.cima)
        grafo += "a0[label=<<TABLE>\n"
        while (temp != null) {

            grafo += "<TR><TD>" + temp.libro.nombre_libro + "</TD></TR>\n"
            //  nodos += "N" + cont + "[label=\"" + temp.libro.nombre_libro+ "\"] ;\n"

            // if (temp.siguiente!=null) {
            // cont2=cont+1;
            //  conexion += "N" + cont + "->N" + cont2 + ";\n";
            //}
            // cont++;

            temp = temp.siguiente;
        }

        //grafo += nodos + "\n";
        //grafo += conexion + "\n";
        grafo += "</TABLE>>];"
        grafo += "\n}";
        console.log(grafo);

        d3.select('#lienzoPila').graphviz()
            .width(500)
            .height(700)
            .renderDot(grafo);

    }




}




//_______________________
class NodoEncabezado {

    constructor(id) {
        this.id = id;
        this.siguiente = null;
        this.anterior = null;
        this.acceso = null;
    }
}

class Encabezado {

    constructor(primero) {
        this.primero = primero;
    }
    setEncabezado(nuevo) {

        if (this.primero == null){
            this.primero = nuevo

        }else if (nuevo.id < this.primero.id) {
            nuevo.siguiente =this.primero
            this.primero.anterior = nuevo
            this.primero = nuevo
        } else {
           let actual = this.primero
            while (actual.siguiente != null) {
                if (nuevo.id < actual.siguiente.id) {
                    nuevo.siguiente = actual.siguiente
                    actual.siguiente.anterior = nuevo
                    nuevo.anterior = actual
                    actual.siguiente = nuevo
                    break
                }
                actual = actual.siguiente
            }
                if (actual.siguiente == null) {
                    actual.siguiente = nuevo
                    nuevo.anterior = actual
                    }
            }
            
            // if (this.primero == null) {
            //     this.primero = nuevo;
            // } else if (this.id < this.primero.id) {
            //     nuevo.siguiente = this.primero
            //     this.primero.anterior = nuevo;
            //     this.primero = nuevo;
            // } else {
            //     let actual = this.primero;
            //     while (actual.siguiente != null) {
            //         if (nuevo.id < actual.siguiente.id) {
            //             nuevo.siguiente = actual.siguiente;
            //             actual.siguiente.anterior = nuevo;
            //             nuevo.anterior = actual;
            //             actual.siguiente = nuevo;
            //             break;

            //         }
            //         actual = actual.siguiente;
            //     }
            //     if (actual.siguiente == null) {
            //         actual.siguiente = nuevo;
            //         nuevo.anterior = actual;
            //     }
            // }
            } 

          getEncabezado(id) {
            let actual = this.primero;
            while (actual != null) {
                if (actual.id == id) {
                    return actual;
                }
                actual = actual.siguiente;
            }
            return null;

        }


    }

class Libro {
    constructor(isb, nombre_autor, nombre_libro, cantidad, paginas, categoria) {
        this.isb = isb
        this.nombre_autor = nombre_autor
        this.nombre_libro = nombre_libro
        this.cantidad = cantidad
        this.paginas = paginas
        this.categoria = categoria
    }
}
class NodoMatrizO {


    constructor(fila, columna, libro, id) {
        this.id = id;
        this.pila = null;
        this.fila = fila;
        this.columna = columna;
        this.libro = libro;
        this.derecha = null;
        this.izquierda = null;
        this.arriba = null;
        this.abajo = null;
    }
}

class MatrizOrtogonal {


    constructor() {
        this.encabezadoFilas = new Encabezado();
        this.encabezadoColumnas = new Encabezado();
    }

    insertar2(fila, columna, libro, num) {
        //  let num=0;
        console.log(columna)

        let nuevo = new NodoMatrizO(fila, columna, libro, num)

        let efilas = this.encabezadoFilas.getEncabezado(fila)

        if (efilas == null) {
            efilas = new NodoEncabezado(fila)
            efilas.acceso = nuevo
            this.encabezadoFilas.setEncabezado(efilas)
        } else {
            if (nuevo.columna < efilas.acceso.columna) {
                nuevo.derecha = efilas.acceso
                efilas.acceso.izquierda = nuevo
                efilas.acceso = nuevo
            } else {
                let actual = efilas.acceso
                while (actual.derecha != null) {
                    if (nuevo.columna < actual.derecha.columna) {
                        nuevo.derecha = actual.derecha
                        actual.derecha.izquierda = nuevo
                        nuevo.izquierda = actual
                        actual.derecha = nuevo
                        break
                    }
                    actual = actual.derecha
                }
                if (actual.derecha == null) {
                    actual.derecha = nuevo
                    nuevo.izquierda = actual
                }

            }
        }
        // #Insercion encabezado por columna
        let eColumnas = this.encabezadoColumnas.getEncabezado(columna)
        if (eColumnas == null) {
            eColumnas = new NodoEncabezado(columna)
            eColumnas.acceso = nuevo
            this.encabezadoColumnas.setEncabezado(eColumnas)
        } else {
            if (nuevo.fila < eColumnas.acceso.fila) {
                nuevo.abajo = eColumnas.acceso
                eColumnas.acceso.arriba = nuevo
                eColumnas.acceso = nuevo
            } else {
                let actual = eColumnas.acceso
                while (actual.abajo != null) {
                    if (nuevo.fila < actual.abajo.fila) {
                        nuevo.abajo = actual.abajo
                        actual.abajo.arriba = nuevo
                        nuevo.arriba = actual
                        actual.abajo = nuevo
                        break
                    }
                    actual = actual.abajo
                }
                if (actual.abajo == null) {
                    actual.abajo = nuevo
                    // #se inserta al final de la lista
                    nuevo.arriba = actual
                }
            }
        }


    }


    insertar(fil, columna, libro, cont) {



        let pila = new PilaLibro();
        // for (let i = 0; i < libro.cantidad; i++) {
        //     console.log(i)
        //         pila.push(i)


        // }
        //console.log(pila.PilaVacia())
        let nuevo = new NodoMatrizO(fil, columna, libro, cont);

        let efilas = this.encabezadoFilas.getEncabezado(fil);

        if (efilas == null) {
            efilas = new NodoEncabezado(fil);
            efilas.acceso = nuevo;
            this.encabezadoFilas.setEncabezado(efilas);
        } else {

            if (nuevo.columna < efilas.acceso.columna) {
                nuevo.derecha = efilas.acceso;
                efilas.acceso.izquierda = nuevo;
                efilas.acceso = nuevo;

            } else {
                let actual = efilas.acceso;
                while (actual.derecha != null) {
                    if (nuevo.columna < actual.derecha.columna) {
                        nuevo.derecha = actual.derecha;
                        actual.derecha.izquierda = nuevo;
                        nuevo.izquierda = actual;
                        actual.derecha = nuevo;
                        break;

                    }
                    actual = actual.derecha;
                }
                if (actual.derecha == null) {
                    actual.derecha = nuevo;
                    nuevo.izquierda = actual;
                }

            }

        }
        //insercion encabezado por columna

        let eColumnas = this.encabezadoColumnas.getEncabezado(columna);

        if (eColumnas == null) {
            eColumnas = new NodoEncabezado(columna);
            eColumnas.acceso = nuevo;
            this.encabezadoColumnas.setEncabezado(eColumnas);
        } else {
            if (nuevo.fila < eColumnas.acceso.fila) {
                nuevo.abajo = eColumnas.acceso;
                eColumnas.acceso.arriba = nuevo;
                eColumnas.acceso = nuevo;

            } else {
                let actual = eColumnas.acceso;
                while (actual.abajo != null) {
                    if (nuevo.fila < actual.abajo.fila) {
                        nuevo.abajo = actual.abajo;
                        actual.abajo.arriba = nuevo;
                        nuevo.arriba = actual;
                        actual.abajo = nuevo;
                        break;
                    }
                    actual = actual.abajo;
                }
                if (actual.abajo == null) {
                    actual.abajo = nuevo;
                    nuevo.arriba = actual;
                }
            }

        }
    }

    reccorerFilas() {
        let fila = this.encabezadoFilas.primero;
        while (fila != null) {

            let actual = fila.acceso;
            console.log(">>>>>>>>>filas<<<<<<<<<<<")
            console.log("  Fila " + actual.fila)
            while (actual != null) {
                console.log(actual.columna + "  " + actual.libro.nombre_libro)
                actual = actual.derecha;
            }
            fila = fila.siguiente;
        }

    }


    restarLibro(nombre) {
        let fila = this.encabezadoFilas.primero;
        while (fila != null) {

            let actual = fila.acceso;
           
        
            while (actual != null) {

                if (actual.libro.nombre_libro==nombre) {
                    actual.libro.cantidad=actual.libro.cantidad-1;

                    return true
                }
                
                actual = actual.derecha;
            }
            fila = fila.siguiente;
        }

        return false
        
    }

    mostrarPila(nombre_libro) {
        let fila = this.encabezadoFilas.primero;
        
        while (fila != null) {

            let actual = fila.acceso;
            // console.log(">>>>>>>>>filas<<<<<<<<<<<")
            //console.log(actual.id + "  Fila " + actual.fila)
            while (actual != null) {
                //  console.log(actual.columna + "  " + actual.libro.nombre_libro)
                if (actual.libro.nombre_libro == nombre_libro) {
                    actual.pila=new PilaLibro()

                    for (let i = 0; i < actual.libro.cantidad; i++) {
                        actual.pila.push(actual.libro)

                    }
                    //console.log("la pila esta vacia" + actual.pila.PilaVacia())

                    actual.pila.grafo(nombre_libro)
                    //console.log(">>>>>>>>>>>arbol econtrado<<<<<<<<<<<<<<")

                    return true
                }

                actual = actual.derecha;
            }
            fila = fila.siguiente;
        }

        return false

        //console.log(">>>>>>>>>>>>Fin<<<<<<<<<<<")
    }
    //////////////////////////////////////

    graficar2() {
        let cadena = "digraph G{\nlabel=\"Matriz\"; \nnode [shape=box];\n"
        let conexion = "";
        let nodos = "";
        let efila = this.encabezadoFilas.primero;





        while (efila != null) {

            let actual = efila.acceso;

            let conexion2 = "";

            while (actual != null) {
                nodos += "n" + actual.id + "[label=\"" + actual.libro.nombre_libro + "\"];\n";

                if (actual.abajo != null) {
                    conexion += "n" + actual.id + "-> n" + actual.abajo.id + ";\n";
                    // console.log("...abajo.." + actual.id + "  _> " + actual.abajo.id)


                }
                if (actual.arriba != null) {
                    conexion += "n" + actual.id + "-> n" + actual.arriba.id + ";\n";

                }

                if (actual.derecha != null) {
                    conexion2 += "n" + actual.id + "-> n" + actual.derecha.id + ";\n";
                    // console.log("derecha "+actual.id)
                }
                if (actual.izquierda != null) {
                    conexion2 += "n" + actual.id + "-> n" + actual.izquierda.id + ";\n";

                }

                actual = actual.derecha;



            }

            conexion += "{rank=same;" + conexion2 + "}"
            efila = efila.siguiente;

        }
        cadena += nodos + "\n"
        cadena += "\n" + conexion + "\n"
        cadena += "\n}"
        console.log("garfica 2___________")
        console.log(cadena);

    }


    graficar(lienzo) {
        let principal = "digraph g{\n bgcolor=\"transparent\" graph[size=\"15.75,12.25\" ]\n label=\"Matriz dispersa\" \n node[shape=box] \n subgraph h{\n";
        principal += "raiz[label=\"Inicio\",group=\"1\"]\nedge[dir=\"both\"]\n\n";
        let grupos;
        let f = 'fila';//fila
        let c = 'columna';//columna
        let n = "nodo";

        let listaFilas = new Lista2();
        let listaCol = new Lista2()

        let recorridoFilas = new Lista1()
        let recorrdioCol = new Lista1()

        let eFil = this.encabezadoFilas.primero;
        let eCol = this.encabezadoColumnas.primero;

        while (eFil != null) {
            let actual = eFil.acceso;
            listaFilas.add(actual)
            let aux = new Lista2();
            while (actual != null) {
                aux.add(actual);
                //   console.log(actual)
                //    console.log(aux.primero.contenido)
                actual = actual.derecha;
            }
            recorridoFilas.add(aux);
            //console.log("rre"+recorridoFilas.size())
            eFil = eFil.siguiente;

        }

        while (eCol != null) {
            let actual = eCol.acceso;
            listaCol.add(actual);
            //console.log(actual)
            // console.log("columnas " + actual.columna)
            let aux = new Lista2();

            while (actual != null) {
                aux.add(actual);
                actual = actual.abajo;
            }
            recorrdioCol.add(aux)
            eCol = eCol.siguiente;
        }

        //console.log("tamanio"+listaFilas.size())
        for (let i = 0; i < listaFilas.size(); i++) {
            //const element = array[i];

            let filaA = f + listaFilas.get(i).fila;
            principal += filaA + "[label=\"" + listaFilas.get(i).fila + "\",group=\"1\"];\n"
            if (i < listaFilas.size() - 1) {
                principal += f + "" + listaFilas.get(i).fila + "->" + f + "" + listaFilas.get(i + 1).fila + ";\n"
            }
            //recorrido dentro de la lista de filas
            let aux = recorridoFilas.get(i)
            //console.log("____________"+recorridoFilas.size())
            principal += f + listaFilas.get(i).fila + "->" + n + aux.get(0).fila + "_" + aux.get(0).columna + ";\n";
            let rankAux = "{rank=same;" + filaA + ";";

            for (let j = 0; j < aux.size(); j++) {
                //const element = array[j];
                if (j < aux.size() - 1) {
                    principal += n + aux.get(j).fila + "_" + aux.get(j).columna + "->" + n + aux.get(j).fila + "_" + aux.get(j + 1).columna + ";\n";

                }
                rankAux += n + aux.get(j).fila + "_" + aux.get(j).columna + ";";

            }
            principal += rankAux.substring(0, rankAux.length - 1) + "}\n";


        }
        grupos = 2;

        let rankColumnas = "{rank=same;raiz;";
        // console.log("::::::::::::::::::::::::::::::::::")

        for (let i = 0; i < listaCol.size(); i++) {
            let columnaAux = c + listaCol.get(i).columna
            principal += columnaAux + "[label=\"" + listaCol.get(i).columna + "\",group=\"" + grupos + "\"]\n";
            rankColumnas += columnaAux + ";";

            let aux = recorrdioCol.get(i)
            principal += columnaAux + "->" + n + aux.get(0).fila + "_" + aux.get(0).columna + ";\n";
            //   console.log("_________________________")
            for (let j = 0; j < aux.size(); j++) {
                //console.log("fila "+i+" col "+j)
                // console.log("fila " + aux.get(j).fila + " col " + aux.get(j).columna)
                principal += n + aux.get(j).fila + "_" + aux.get(j).columna + "[style=\"filled\",fillcolor=\"\",label=\"" + aux.get(j).libro.nombre_libro + "\",group=\"" + grupos + "\"]\n";
                if (j < aux.size() - 1) {
                    principal += n + aux.get(j).fila + "_" + aux.get(j).columna + "->" + n + aux.get(j + 1).fila + "_" + aux.get(j).columna + "\n";
                    // principal += n+ aux.get(j).fila + "_" + aux.get(j).columna + "->" + n + aux.get(j + 1).fila + "_" + aux.get(j).columna+ "\n";
                }
            }

            grupos++;

            if (i < listaCol.size() - 1) {
                principal += c + listaCol.get(i).columna + "->" + c + listaCol.get(i + 1).columna + ";\n";
            }

        }


        principal += rankColumnas.substring(0, rankColumnas.length - 1) + "}\n";
        principal += "raiz->" + f + listaFilas.get(0).fila + ";\n";
        principal += "raiz->" + c + listaCol.get(0).columna + ";\n";
        principal += "}\n}";

        //  console.log(principal)

        //grafo+="{rank=same;\n"+conexiones+"\n}\n}"

        //console.log(principal)
        d3.select(lienzo).graphviz()
            .width(1200)
            .height(1200)
            .renderDot(principal);

        // this.graficar2()

    }

    guardarDatos(fil, columna, isb, nombre_autor, nombre_libro, cantidad, paginas, categoria) {


        let fila = this.encabezadoFilas.primero;
        while (fila != null) {

            let actual = fila.acceso;
            if (fil == actual.fila) {

                while (actual != null) {
                    // console.log(actual.columna + "  " + actual.libro.nombre_libro)

                    if (actual.columna == columna) {
                        actual.libro.isb = isb;
                        actual.libro.nombre_autor = nombre_autor;
                        actual.libro.nombre_libro = nombre_libro;
                        actual.libro.cantidad = cantidad;
                        actual.paginas = paginas;
                        actual.categoria = categoria;

                    }
                    actual = actual.derecha;
                }

            }

            fila = fila.siguiente;
        }

    }
    ///
    guardarLibro(fila, columna, libro) {


        let efila = this.encabezadoFilas.primero;
        while (efila != null) {

            let actual = efila.acceso;
            if (fila == actual.fila) {

                while (actual != null) {
                    // console.log(actual.columna + "  " + actual.libro.nombre_libro)

                    if (actual.columna == columna) {
                        actual.libro = libro

                    }
                    actual = actual.derecha;
                }

            }

            efila = efila.siguiente;
        }

    }


}





function llenarMatriz() {
    let m = new MatrizOrtogonal();
    let cont = 0;
    for (let index = 1; index <= 25; index++) {


        for (let j = 1; j <= 25; j++) {
            //  console.log("index2 "+j)
            m.insertar(index, j, "", cont)

            cont++;
        }

    }
    m.reccorerFilas()
    m.graficar()
}

class NodoLista1 {

    constructor(lista, id) {
        this.lista = lista;
        this.id = id;
        this.siguiente = null;
    }
}
class Lista1 {
    constructor() {
        this.primero = null;
        this.tamanio = 0;

    }

    add(lista) {
        let nodo = new NodoLista1(lista, this.tamanio)
        this.tamanio++;
        if (this.primero == null) {
            this.primero = nodo;
        } else {
            let aux = this.primero
            while (aux.siguiente != null) {
                aux = aux.siguiente
            }
            aux.siguiente = nodo
        }
    }

    get(id) {
        let aux = this.primero
        while (aux != null) {
            if (aux.id == id) {
                return aux.lista
            }
            aux = aux.siguiente
        }
        return null
    }

    size() {
        return this.tamanio;
    }
}

class NodoLista2 {
    constructor(contenido, id) {
        this.contenido = contenido;
        this.id = id;
        this.siguiente = null;
    }
}
class Lista2 {
    constructor() {
        this.primero = null;
        this.tamanio = 0;
    }

    add(_nodo) {
        let nodo = new NodoLista2(_nodo, this.tamanio);
        this.tamanio++;
        if (this.primero == null) {
            this.primero = nodo;
        } else {
            let aux = this.primero;
            while (aux.siguiente != null) {
                aux = aux.siguiente;
            }
            aux.siguiente = nodo
        }
    }

    get(id) {
        let aux = this.primero;
        while (aux != null) {
            if (aux.id == id) {
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
// m.insertar(0,0,"h")
// m.insertar(0,1,"o")
// m.insertar(0,2,"l")

// m.insertar(1,0,"a")
// m.insertar(1,1,"e")
// m.insertar(1,2,"e")

// m.insertar(2,0,"i")
// m.insertar(2,1,"i")
// m.insertar(2,2,"i")




