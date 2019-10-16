(function(){
    var libros=[{
        id:1,
        title:'Programacion Basica',
        author:'Jeilyn',
        anio:2005,
        editorial:'Personal'
    },
    {
        id:2,
        title:'Programacion Concurrente',
        author:'JeanCarlo',
        anio:2007,
        editorial:'Ulacit'
    },
    {
        id:3,
        title:'Programacion Web',
        author:'Dani',
        anio:2010,
        editorial:'Tres Patitos'
    }
]

var cargarLibros=()=>{    
    var divVista= $('#vistaLibros');
    divVista.html('');
    $.each(libros, function(linea,item){
        var tarjetaLibro = 
        `<div class="card" id="${linea}">
            <div class="card-header">${item.id}</div>
            <div class="card-body">${item.title}-${item.author}</div>
            <p>${item.editorial}</p>
            <div class="card-footer"><p>${item.anio}</p>
            <button id="${item.id}"  class="btn btn-danger">Eliminar</button></div>
        </div>`
        divVista.append(tarjetaLibro);
        console.log(item);
        })
        inicializarBotones();
    }

    /**
     * 
     */

    inicializarBotones=()=>{
        var btnSend=$('#send');
        var btnClean=$('#clean');
        btnSend.on('click',crearNuevoLibro)
        btnClean.on('click',function(e){
            e.preventDefault();
            $('form').trigger('reset');
        })
        $("button").click(function() {
            for(var i = 0; i < libros.length; i++ ){
                if(libros[i].id==this.id){
                    libros.splice(libros.indexOf(libros[i]), 1);
                }
            }
            cargarLibros();
        });
    }

    var crearNuevoLibro=(e)=>{
        e.preventDefault();
        var libro={
            id:$('#id').val(),
            title:$('#title').val(),
            author:$('#author').val(),
            anio:$('#anio').val(),
            editorial:$('#editorial').val()
        }
        libros.push(libro);
        cargarLibros();
        
        
    }
    cargarLibros();
})()