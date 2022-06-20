

class NodoAscendente {

    constructor(libro) {
        this.libro = libro
        this.siguiente = null;
        this.tamanio = 0;
        this.posicion=0;
    }
}


class ListaAscendete {

    constructor() {
        this.inicio = null;
        this.size=0;
    }


    insertarLibro(libro) {
        let nuevo = new NodoAscendente(libro)
        nuevo.posicion=this.size;
        this.size++;
        if (this.inicio == null) {
            this.inicio = nuevo;
        } else {
            let temp = this.inicio;
            while (temp.siguiente != null) {
                temp = temp.siguiente;

            }
            temp.siguiente = nuevo;
        }

    }

    bucarLibro(nombre){
        
        let aux=this.inicio;
        let usuario=document.getElementById("user").value
        
        
        while (aux!=null) {
            if (aux.libro.nombre_libro==nombre && aux.libro.cantidad>0) {
                
                aux.libro.cantidad=aux.libro.cantidad-1;
                CargarArchivo.ldoble.aumentarContador(usuario);
                if (CargarArchivo.matrizOrt.restarLibro(nombre)) {
                    console.log("restar a ortogonal")
                }else {
                    CargarArchivo.matrizDis.restarLibro(nombre)
                }
                
                CargarArchivo.lC.agregar_libroCliente(aux.libro)
                return true;
            }
            aux=aux.siguiente;
        }

        if (CargarArchivo.colaU.existente(nombre,usuario)) {
            
        }else{
            let usuarioE =new UsuarioE(usuario,nombre)
            CargarArchivo.colaU.encolar(usuarioE)
        }
        alert("El libro no existe")
           
            return false
        
    }


    bubleSort() {

        let valor = this.inicio;
        let temporal = this.inicio
        if (temporal.siguiente != null && valor != null) {

            let i = this.inicio; //i
            while (i != null) {
                let j = i.siguiente //i+1
                while (j != null) {
                    if (i.libro.nombre_libro > j.libro.nombre_libro) {
                        let temporal2 = i.libro
                        i.libro = j.libro
                        j.libro= temporal2

                    }
                    j = j.siguiente
                    //j++;

                }
                i = i.siguiente//i++

            }
        }
    }

    mostrar() {
        console.log("________________________Libro___________________")
        let temp = this.inicio
        while (temp != null) {
            console.log(temp.libro.nombre_libro)
            temp = temp.siguiente
        }
    }


    mostrarLibros() {


        console.log("________________________Libro___________________")
        let temp = this.inicio
        while (temp != null) {

            let tarjeta = "<div class=\"card\" style=\"width: 13rem;  margin: auto 10px;\" >"
            tarjeta += "<img src=\"https://img.freepik.com/vector-gratis/libro-abierto-concepto-educacion-lectura_189033-418.jpg\" class=\"card-img-top\" alt=\"\"></img>"
            tarjeta += "<div class=\"card-body\">"
            tarjeta += "<p class=\"card-text\"> Nombre:" + temp.libro.nombre_libro + "</p>"
            tarjeta += "<p class=\"card-text\">Autor: " + temp.libro.nombre_autor + "</p>"
            tarjeta += "<p class=\"card-text\">ISBN: " + temp.libro.isb + "</p>"

            tarjeta += "<p class=\"card-text\">Paginas: " + temp.libro.paginas + "</p>"
            tarjeta += "<p class=\"card-text\">Categoría: " + temp.libro.categoria + "</p>"
            tarjeta += "<p class=\"card-text\">Cantidad: " + temp.libro.cantidad + "</p>"

            tarjeta += "</div>"
            tarjeta += "</div>"
            CargarArchivo.librosM.innerHTML += tarjeta;
            temp = temp.siguiente
        }


    }
    get_libro(posicion) {
        let aux = this.inicio;

        while (aux != null) {

            if (aux.posicion == posicion) {

                return aux
            }
            aux = aux.siguiente;
        }

        return null
    }

    set_libro(posicion, libro) {

        let aux = this.inicio;

        while (aux != null) {

            if (aux.posicion == posicion) {

                aux.libro = libro;
                break
            }
            aux = aux.siguiente;
        }



    }

    ordenarQuickSortDescendente2(inferior, superior) {

        if (superior == -1) {
            superior = 0;
        }

        let piv = this.get_libro(superior).libro.nombre_libro; //quickB[superior];

        let i = inferior;
        let j = superior - 1;
        let contador = 1;
        let aux;

        if (inferior >= superior) {

        } else {

            while (contador == 1) {

                while (this.get_libro(i).libro.nombre_libro > piv) {

                    i++;

                }

                while (this.get_libro(j).libro.nombre_libro < piv && j > 0) {
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

}