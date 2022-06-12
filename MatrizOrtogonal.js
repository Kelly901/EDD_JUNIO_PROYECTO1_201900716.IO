class NodoEncabezado{

    constructor(id){
        this.id=id;
        this.siguiente=null;
        this.anterior=null;
        this.acceso=null;
    }
}

class Encabezado{

    constructor(primero=null){
        this.primero=primero;
    }
    setEncabezado(nuevo){
        if (this.primero==null) {
            this.primero=nuevo;
        }else if (this.id<this.primero.id) {
            nuevo.siguiente=this.primero
            this.primero.anterior=nuevo;
            this.primero=nuevo;
        }else{
            let actual=this.primero;
            while (actual.siguiente!=null) {
                if (nuevo.id<actual.siguiente.id) {
                    nuevo.siguiente=actual.siguiente;
                    actual.siguiente.anterior=nuevo;
                    nuevo.anterior=actual;
                    actual.siguiente=nuevo;
                    break;
                    
                }
                actual=actual.siguiente;
            }
            if (actual.siguiente==null) {
                actual.siguiente=nuevo;
                nuevo.anterior=actual;
            }
        }
    }

    getEncabezado(id){
        let actual=this.primero;
        while (actual!=null) {
            if (actual.id==id) {
                return actual;
            }
            actual=actual.siguiente;
        }
        return null;

    }


}

class NodoMatrizO{


    constructor(fila,columna,valor,id){
        this.id=id;
        this.fila=fila;
        this.columna=columna;
        this.valor=valor;
        this.derecha=null;
        this.izquierda=null;
        this.arriba=null;
        this.abajo=null;
    }
}

class MatrizOrtogonal{


    constructor(){
        this.encabezadoFilas=new Encabezado();
        this.encabezadoColumnas=new Encabezado();
    }

    insertar2(fila,columna,valor,num){
      //  let num=0;
console.log(columna)
        
      let  nuevo=new NodoMatrizO(fila,columna,valor,num);
        
     let   efilas=this.encabezadoFilas.getEncabezado(fila);

        if (efilas==null) {
            efilas=new NodoEncabezado(fila);
            efilas.acceso=nuevo;
            this.encabezadoFilas.setEncabezado(efilas);
        }else{
            if (nuevo.columna<efilas.acceso.columna) {
                nuevo.derecha=efilas.acceso;
                efilas.acceso.izquierda=nuevo;
                efilas.acceso=nuevo;
            }else{
              let  actual=efilas.acceso;
                while (actual.derecha!=null) {
                    if (nuevo.columna<actual.derecha.columna) {
                        nuevo.derecha=actual.derecha;

                        actual.derecha.izquierda=nuevo;
                        nuevo.izquierda=actual;
                        actual.derecha=nuevo
                        break
                    }
                    actual=actual.derecha;
                }

                if (actual.derecha==null) {
                    actual.derecha=nuevo;
                    nuevo.izquierda=actual
                }
            }

            //columnas_____________

          let  eColumunas=this.encabezadoColumnas.getEncabezado(columna)
            if (eColumunas==null) {
                eColumunas=new NodoEncabezado(columna);
                eColumunas.acceso=nuevo;
                this.encabezadoColumnas.setEncabezado(eColumunas);
            }else{
                if (nuevo.fila<eColumunas.acceso.fila) {
                    nuevo.abajo=eColumunas.acceso;
                    eColumunas.acceso.arriba=nuevo;
                    eColumunas.acceso=nuevo;
                }else{
                    let actual=eColumunas.acceso;
                    
                    while (actual.abajo!=null) {
                        if (nuevo.fila<actual.abajo.fila) {
                            nuevo.abajo=actual.abajo
                            actual.abajo.arriba=nuevo;
                            nuevo.arriba=actual
                            actual.abajo=nuevo
                            break;
                        }
                        actual=actual.abajo;
                    }
                    if (actual.abajo==null) {
                        actual.abajo=nuevo
                        nuevo.arriba=actual
                    }
                }


               
            }

            
        }

    }


    insertar(fil, columna, valor, cont){
        let nuevo = new NodoMatrizO(fil, columna, valor, cont);

        let efilas = this.encabezadoFilas.getEncabezado(fil);

        if (efilas == null) {
            efilas = new NodoEncabezado(fil);
            efilas.acceso=nuevo;
            this.encabezadoFilas.setEncabezado(efilas);
        } else {

            if (nuevo.columna < efilas.acceso.columna) {
                nuevo.derecha=efilas.acceso;
                efilas.acceso.izquierda=nuevo;
                efilas.acceso=nuevo;

            } else {
                let actual = efilas.acceso;
                while (actual.derecha != null) {
                    if (nuevo.columna < actual.derecha.columna) {
                        nuevo.derecha=actual.derecha;
                        actual.derecha.izquierda=nuevo;
                        nuevo.izquierda=actual;
                        actual.derecha=nuevo;
                        break;

                    }
                    actual = actual.derecha;
                }
                if (actual.derecha == null) {
                    actual.derecha=nuevo;
                    nuevo.izquierda=actual;
                }

            }

        }
//insercion encabezado por columna

        let eColumnas = this.encabezadoColumnas.getEncabezado(columna);

        if (eColumnas == null) {
            eColumnas = new NodoEncabezado(columna);
            eColumnas.acceso=nuevo;
            this.encabezadoColumnas.setEncabezado(eColumnas);
        } else {
            if (nuevo.fila < eColumnas.acceso.fila) {
                nuevo.abajo=eColumnas.acceso;
                eColumnas.acceso.arriba=nuevo;
                eColumnas.acceso=nuevo;

            } else {
                let actual = eColumnas.acceso;
                while (actual.abajo != null) {
                    if (nuevo.fila < actual.abajo.fila) {
                        nuevo.abajo=actual.abajo;
                        actual.abajo.arriba=nuevo;
                        nuevo.arriba=actual;
                        actual.abajo=nuevo;
                        break;
                    }
                    actual = actual.abajo;
                }
                if (actual.abajo == null) {
                    actual.abajo=nuevo;
                    nuevo.arriba=actual;
                }
            }

        }
    }

    reccorerFilas(){
        let fila=this.encabezadoFilas.primero;
        while (fila!=null) {
            
            let actual=fila.acceso;
            console.log(">>>>>>>>>filas<<<<<<<<<<<")
            console.log(actual.id+"  Fila "+actual.fila)
            while (actual!=null) {
                console.log(actual.columna+"  "+actual.valor)
                actual=actual.derecha;
            }
            fila=fila.siguiente;
        }

        console.log(">>>>>>>>>>>>Fin<<<<<<<<<<<")
    }


    graficar2(){
        let cadena="digraph G{\nlabel=\"Matriz\"; \nnode [shape=box];\n"
        let conexion="";
        let nodos="";
        let efila= this.encabezadoFilas.primero;



        

        while (efila!=null) {
            
            let actual=efila.acceso;

            let conexion2="";

            while (actual!=null) {
                nodos+="n"+actual.id+"[label=\""+actual.valor+"\"];\n";

                if (actual.abajo!=null) {
                    conexion+="n"+actual.id+"-> n"+actual.abajo.id+";\n";
                    console.log("...abajo.."+actual.id+"  _> "+actual.abajo.id)
                
                  
                }
                if (actual.arriba!=null) {
                    conexion+="n"+actual.id+"-> n"+actual.arriba.id+";\n";
                    
                }

                if (actual.derecha!=null) {
                    conexion2+="n"+actual.id+"-> n"+actual.derecha.id+";\n";
                   // console.log("derecha "+actual.id)
                }
                if (actual.izquierda!=null) {
                    conexion2+="n"+actual.id+"-> n"+actual.izquierda.id+";\n";
                    
                }

                actual=actual.derecha;
                
                
                
            }

            conexion+="{rank=same;"+conexion2+"}"
            efila=efila.siguiente;

        }
        cadena+=nodos+"\n"
        cadena+="\n"+conexion+"\n"
        cadena+="\n}"
        console.log(cadena);
        
    }


    graficar(){
        let principal = "digraph g{\n graph[size=\"5.75,5.25\"]\n label=\"Matriz dispersa\" \n node[shape=box] \n subgraph h{\n";
        principal += "raiz[label=\"Inicio\",group=\"1\"]\nedge[dir=\"both\"]\n\n";
        let grupos;
        let f='fila';//fila
        let c='columna';//columna
        let n="nodo";

        let listaFilas=new Lista2();
        let listaCol=new Lista2()

        let recorridoFilas=new Lista1()
        let recorrdioCol=new Lista1()

        let eFil=this.encabezadoFilas.primero;
        let eCol=this.encabezadoColumnas.primero;

        while (eFil!=null) {
            let actual=eFil.acceso;
            listaFilas.add(actual)
            let aux=new Lista2();
            while (actual!=null) {
                aux.add(actual);
          // console.log(actual)
            //    console.log(aux.primero.contenido)
                actual=actual.derecha;
            }
            recorridoFilas.add(aux);
            //console.log("rre"+recorridoFilas.size())
            eFil=eFil.siguiente;

        }

        while (eCol!=null) {
          let actual=eCol.acceso;
          listaCol.add(actual);
          console.log(actual)
          console.log("columnas "+actual.columna)
          let aux=new Lista2();
          
          while (actual!=null) {
            aux.add(actual);
            actual=actual.abajo;
          }
          recorrdioCol.add(aux)
          eCol=eCol.siguiente;
        }

        //console.log("tamanio"+listaFilas.size())
        for (let i = 0; i < listaFilas.size(); i++) {
            //const element = array[i];

            let filaA=f+listaFilas.get(i).fila;
            principal+=filaA+"[label=\""+listaFilas.get(i).fila+"\",group=\"1\"];\n"
            if (i<listaFilas.size()-1) {
                principal+=f+""+listaFilas.get(i).fila+"->"+f+""+listaFilas.get(i+1).fila+";\n"
            }
            //recorrido dentro de la lista de filas
            let aux=recorridoFilas.get(i)
            //console.log("____________"+recorridoFilas.size())
            principal += f + listaFilas.get(i).fila + "->" + n+ aux.get(0).fila + "_" + aux.get(0).columna + ";\n";
            let rankAux = "{rank=same;" + filaA + ";";

            for (let j = 0; j <aux.size() ; j++) {
                //const element = array[j];
                if (j < aux.size() - 1) {
                    principal += n + aux.get(j).fila + "_" + aux.get(j).columna+ "->" + n + aux.get(j).fila + "_" + aux.get(j + 1).columna + ";\n";

                }
                rankAux += n + aux.get(j).fila+ "_" + aux.get(j).columna + ";";

            }
            principal += rankAux.substring(0, rankAux.length - 1) + "}\n";
        
            
        }  
        grupos=2;

        let rankColumnas = "{rank=same;raiz;";
        console.log("::::::::::::::::::::::::::::::::::")

        for (let i = 0; i < listaCol.size(); i++) {
            let columnaAux=c+listaCol.get(i).columna
            principal += columnaAux + "[label=\"" + listaCol.get(i).columna + "\",group=\"" + grupos + "\"]\n";
            rankColumnas += columnaAux + ";";
            
            let aux=recorrdioCol.get(i)
           principal += columnaAux + "->" + n + aux.get(0).fila + "_" + aux.get(0).columna + ";\n";
        console.log("_________________________")
            for (let j = 0; j < aux.size(); j++) {
                //console.log("fila "+i+" col "+j)
                console.log("fila "+aux.get(j).fila+" col "+aux.get(j).columna)
                principal += n + aux.get(j).fila + "_" + aux.get(j).columna + "[style=\"filled\",fillcolor=\"\",label=\""+ aux.get(j).valor + "\",group=\"" + grupos + "\"]\n";
                if (j < aux.size() - 1) {
                    principal += n + aux.get(j).fila+ "_" + aux.get(j).columna + "->" + n + aux.get(j + 1).fila + "_" + aux.get(j).columna + "\n";
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
        d3.select('#lienzo').graphviz()
        .width(1800)
        .height(500)
        .renderDot(principal);
        
    }

   
}





function llenarMatriz(){
    let m=new MatrizOrtogonal();
    let cont=0;
    for (let index = 0; index < 5; index++) {
     

        for (let j = 0; j < 5; j++) {
            console.log("index2 "+j)
            m.insertar(index,j,"h",j)

            cont++;
        }
        
    }
    m.reccorerFilas()
    m.graficar()
}

class NodoLista1{

    constructor(lista,id){
        this.lista=lista;
        this.id=id;
        this.siguiente=null;
    }
}
class Lista1{
    constructor(){
        this.primero=null;
        this.tamanio=0;

    }

    add(lista){
        let nodo=new NodoLista1(lista,this.tamanio)
        this.tamanio++;
        if (this.primero==null) {
            this.primero=nodo;
        }else{
            let aux=this.primero
            while (aux.siguiente!=null) {
                aux=aux.siguiente
            }
            aux.siguiente=nodo
        }
    }

    get(id){
        let aux=this.primero
        while (aux!=null) {
            if (aux.id==id) {
                return aux.lista
            }
            aux=aux.siguiente
        }
        return null
    }

    size(){
        return this.tamanio;
    }
}

class NodoLista2{
    constructor(contenido,id){
        this.contenido=contenido;
        this.id=id;
        this.siguiente=null;
    }
}
class Lista2{
    constructor(){
        this.primero=null;
        this.tamanio=0;
    }

    add(_nodo){
      let nodo=new NodoLista2(_nodo,this.tamanio);
        this.tamanio++;
        if (this.primero==null) {
            this.primero=nodo;
        }else{
            let aux=this.primero;
            while (aux.siguiente!=null) {
                aux=aux.siguiente;
            }
            aux.siguiente=nodo
        }
    }

    get(id){
        let aux=this.primero;
        while(aux!=null){
            if (aux.id==id) {
                //console.log(aux.contenido)
              //  console.log("____________"+aux instanceof NodoMatrizO)
                
                return aux.contenido
            }
            aux=aux.siguiente
        }
        return null;
    }

    size(){
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




