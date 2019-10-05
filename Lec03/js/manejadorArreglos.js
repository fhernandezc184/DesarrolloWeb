(function(){
    var numeros= [1,2,3,4];

    var libros=[{
        id:1,
        title:'Harry Potter',
        year:2001
    },{
        id:2,
        title:'Señor ded los anillos',
        year:2004
    },{
        id:3,
        title:'Programacion Web',
        year:2019
    },]

    var carrosList=[]

    var desplegarArreglos = function(){

        /**
         * Desplega tarjetas de los carros
         */
        var divCarro= document.getElementsByClassName('carros');
        var listaCarros = carrosList.map(function(carro){
            return '<div class="card">' +
            '<div class="card-header">'+carro.id+'</div>'+
            '<div class="card-body">'+
              '<p>'+carro.brand+'</p>'+
              '<p>'+carro.model+'</p>'+
            '</div>'+
          '</div>';
        });
        divCarro[0].innerHTML=listaCarros;

        /**
         * Desplega el numero agregado
         */

        var divResultado = document.getElementsByClassName('resultado');
        divResultado[0].innerHTML='';
        var mensaje ='';
        numeros.forEach(function(elemento){
            mensaje+='<p>'+elemento+'</p>';

        })
        divResultado[0].innerHTML=mensaje;
    
        /**
         * Desplega la lista de libros
         */

        var divLibros= document.getElementsByClassName('libros');
        var listaLibros = libros.map(function(libro){
            return '<div class="card">' +
            '<div class="card-header">'+libro.id+'</div>'+
            '<div class="card-body">'+
              '<p>'+libro.title+'</p>'+
              '<p>'+libro.year+'</p>'+
            '</div>'+
          '</div>';
        });
        divLibros[0].innerHTML=listaLibros;

        console.dir(carrosList);
    }

    var btnAgregaNumero=document.getElementById('add');
    var btnEliminarNumero= document.getElementById('eliminar');
    btnAgregaNumero.onclick= function(){
        var numero= document.getElementById('numero');
        numeros.push(numero.value);
        numero.value='';
        desplegarArreglos();
    }
    btnEliminarNumero.onclick=function(){
        numeros.pop();
        desplegarArreglos();
    }


    var btnAgregaCarro = document.getElementById('addCarro');
    var btnEliminarCarro = document.getElementById('eliminarCarro');

    btnAgregaCarro.onclick= function(event){
        event.preventDefault();
        var form = document.getElementById('car-form');
        var carro = Object.fromEntries(new FormData(form));
        carrosList.push(carro);
        form.reset();
        desplegarArreglos();
    }
    btnEliminarCarro.onclick=function(event){
        event.preventDefault();
        carrosList.pop();
        desplegarArreglos();
    }
    desplegarArreglos();
})()