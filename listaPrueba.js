class NodolistaPrueba{

    constructor(libro){
        this.libro=libro
        this.siguiente=null;
        this.posicion=0;
    }
}


class listaPrueba {

    constructor(){
        this.inicio=null;
        this.final=null
        this.size=0;
    }


    insertarLibro(libro){
        let nuevo=new NodolistaPrueba(libro)
        nuevo.posicion=this.size;
        this.size++;
        if (this.inicio==null) {
            this.inicio=nuevo;
        }else{
            let temp=this.inicio;
            while(temp.siguiente!=null){
                temp=temp.siguiente;

            }
            temp.siguiente=nuevo;
        }
     
    }

    get_libro(posicion){
        let aux=this.inicio;

        while (aux!=null) {
            
            if (aux.posicion==posicion) {
                
                return aux
            }
            aux=aux.siguiente;
        }

        return null
    }

    set_libro(posicion,libro){

        let aux=this.inicio;

        while (aux!=null) {
            
            if (aux.posicion==posicion) {
                
                aux.libro=libro;
                break
            }
            aux=aux.siguiente;
        }

       

    }
    quickorteDescendente(inferior, superior){


        if (superior==-1) {
            superior=0;
        }
        let piv= this.get_libro(superior).libro

        let i=inferior;
        let j=superior-1;
        let contador=1;

        let aux;

        if (inferior>=superior) {
            
        }else{
            
            while (contador==1) {
                
                while (this.get_libro(i).libro>piv) {
                    i++;
                }

                while (this.get_libro(j).libro<piv && j>0) {
                    j--;
                }

                if (i<j) {
                    aux=this.get_libro(i).li;
                    this.set_libro(i,this.get_libro(j).libro)
                    this.set_libro(j,aux);
                    
                }else{
                    contador=0;
                }

            }

            aux=this.get_libro(i).libro;
            this.set_libro(i,this.get_libro(superior))
            this.set_libro(superior,aux)

            this.quickorteDescendente(inferior,i-1)
            this.quickorteDescendente(i+1,superior)
        }


    }


    ordenarQuickSortDescendente2(inferior,  superior) {

        if (superior == -1) {
            superior = 0;
        }

       let piv = this.get_libro(superior).libro; //quickB[superior];

        let i = inferior;
        let j = superior - 1;
        let contador = 1;
        let aux;

        if (inferior >= superior) {

        } else {

            while (contador == 1) {

                while (this.get_libro(i).libro > piv) {

                    i++;

                }

                while (this.get_libro(j).libro < piv && j > 0) {
                    j--;

                }

                if (i < j) {
                    //System.out.println("no entra aqui");
                    aux = this.get_libro(i).libro;// quickB[i];
                   // System.out.println("posicon actual" + aux);

                    this.set_libro(i, this.get_libro(j).libro); //quickB[i] = //quickB[j];
                   // System.out.println("libron en j" + this.get_libro(j));

                    this.set_libro(j, aux);
                    //quickB[j] = aux;

                } else {
                    contador = 0;
                }

            }

            aux = this.get_libro(i).libro; //quickB[i];
            //System.out.println("aux " + aux);

            this.set_libro(i, this.get_libro(superior).libro);// quickB[i] = quickB[superior];
            //System.out.println(" superior" + this.get_libro(superior).libro);
           // System.out.println("posicion--" + superior);
            this.set_libro(superior, aux);//<quickB[superior] = aux;
           // System.out.println("aux2  " + aux);
            this.ordenarQuickSortDescendente2(inferior, i - 1);

            this.ordenarQuickSortDescendente2(i + 1, superior);

//            grafica(Seleccionar.cont);
//            Seleccionar.cont++;
        }

    }


    mostrar(){
        console.log("_____________________________")
        let aux=this.inicio

        while (aux!=null) {
            
            console.log("."+aux.libro)
            aux=aux.siguiente;
        }
    }
}



let li=new listaPrueba()
li.insertarLibro("a")
li.insertarLibro("e")
li.insertarLibro("m")
li.insertarLibro("n")
li.insertarLibro("o")
li.insertarLibro("i")
li.insertarLibro("m")
li.mostrar()
li.ordenarQuickSortDescendente2(0,li.size-1);
li.mostrar()


