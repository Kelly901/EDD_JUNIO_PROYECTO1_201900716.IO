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


class Autor{
    constructor(dpi,nombre,correo,telefono,direccion,biografia){
        this.dpi=dpi
        this.nombre=nombre
        this.correo=correo
        this.telefono=telefono
        this.direccion=direccion
        this.biografia=biografia
    }
}

class NodoArbolBinario{
    static cor=1;
    constructor(autor){
        this.autor=autor;
        this.left=null;
        this.right=null;
        this.id=NodoArbolBinario.cor++;


    }

    grafica(){
      let grafo;

        if (this.left==null && this.right==null) {
            grafo="nodo"+this.id+"[label =\""+this.autor.nombre+"\"];\n";
        }else{
            grafo="nodo"+this.id+"[ label=\"<C0>|"+this.autor.nombre+"|<C1>\"];\n";
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
        let grafo="digraph g{\ngraph[size=\"11.20,5.25\"] label=\"Árbol binario  \"; \nrankdir=TB;\nnode [shape=record,width=0.5,fontsize=15, fillcolor=gray51,style=filled];\n"
        //let nodo=null;
      //  let pila= new Pila();
    //    pila.push(raiz);
        let etiqueta="";
        let cont2=0;
        grafo+=this.grafica();
        grafo+="}\n"

        d3.select('#lienzoA').graphviz()
       
        
        .renderDot(grafo);
    }

}


class ArbolBinario{
    
    constructor(){
        this.raiz=null;
    }

    agregar(autor){

        this.raiz=this.agregar2(autor,this.raiz);
    }

    agregar2(autor,raiz){
        if(raiz==null){
            let nodoArbol= new NodoArbolBinario(autor);
            return nodoArbol;
        }else{
            if (autor.nombre<raiz.autor.nombre) {
                raiz.left=this.agregar2(autor,raiz.left);
            }else if(autor.nombre>raiz.autor.nombre){
                raiz.right=this.agregar2(autor,raiz.right)
            }else{
                console.log("repetido");
            }
        }
        return raiz;
    }

    pre_order(raiz){
    
        this.pre_order2(raiz);
      
    }

    pre_order2(raiz){
        if (raiz!=null) {
            console.log("autores "+raiz.autor.nombre)
            //_____________
            let tarjeta = "<div class=\"card\" style=\"width: 9rem; display: inline-block; margin: auto 10px;\" >"
            tarjeta += "<img src=\"https://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png\" class=\"card-img-top\" alt=\"\"></img>"
            tarjeta += "<div class=\"card-body\">"
            tarjeta += "<p class=\"card-text\">"+raiz.autor.nombre+"</p>"
            tarjeta += "</div>"
            tarjeta += "</div>"
    
            CargarArchivo.autores.innerHTML+=tarjeta;


            //______________________________
            this.pre_order2(raiz.left)
            this.pre_order2(raiz.right)
        }
    }

//_____________________________

pre_buscar(raiz,nombre){
    console.log("nnnnnn"+nombre)
    this.pre_buscar2(raiz,nombre);
  
}

pre_buscar2(raiz,nombre){
    if (raiz!=null) {
        
        let nombreAutor=document.getElementById("nombreAutor")
        let dpiAutor=document.getElementById("dpiAutor")
        let correoAutor=document.getElementById("correoAutor")
        let telAutor=document.getElementById("telefonoAutor")
        let direccionA=document.getElementById("direccionAutor")
        let bio=document.getElementById("bioAutor")
        //console.log(nombre+"-------"+raiz.nombre)
        if(nombre==raiz.autor.nombre){
            
            nombreAutor.innerHTML=raiz.autor.nombre;
            dpiAutor.innerHTML=raiz.autor.dpi;
            correoAutor.innerHTML=raiz.autor.correo;
            telAutor.innerHTML=raiz.autor.telefono;
            direccionA.innerHTML=raiz.autor.direccion;
            bio.innerHTML=raiz.autor.biografia;

        }
        //______________________________
        this.pre_buscar2(raiz.left,nombre)
        this.pre_buscar2(raiz.right,nombre)
    }
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

// let ar=new ArbolBinario()

// ar.agregar('Sharon');
// ar.agregar('Sharon Tagual');
// ar.agregar('Juan');
// ar.agregar('Xhun');

// ar.agregar('Maria');


// ar.agregar('Alberto');
// ar.agregar('Rosario');






// ar.graficar();


