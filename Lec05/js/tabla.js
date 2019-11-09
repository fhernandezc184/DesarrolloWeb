(function(){
    var arrPosts =[];
    var post={
        userId:0,
        id:0,
        title:'',
        body:''
    }
    var inicializar=()=>{
        var controles = $('input');
        controles.on('change',asignarValorObjeto)
        var btnSalvar = $('#salvar');
        btnSalvar.on('click',agregarPost);
        invocarUrl();
    }
    var agregarPost=(e)=>{
        e.preventDefault();
        arrPosts.push(post);
        cargarCuerpoTabla();

    }
    var asignarValorObjeto=(e)=>{
        var {name,value} = e.target;
        post[name]=value;
    }
    var invocarUrl=()=>{
        $.ajax(
            {
                url:'https://jsonplaceholder.typicode.com/posts',    
                success:function(data,status, xhrs){                    
                    arrPosts=data;
                    cargarCuerpoTabla();
                },
                error:function(xhrs,status,error){
                    console.log('Error:',error);
                }

            }
        )
    }

    var cargarCuerpoTabla=()=>{
        var filas = $('#tbdPost');
        filas.html('');
        $.each(arrPosts,function(index,post){
            var fila=`<tr id="${post.userId}-${post.id}">
            <td><div class="fila">${post.userId}</div></td>
            <td><div class="fila">${post.id}</div></td>
            <td><div class="fila">${post.title}</div></td>
            <td><div class="fila">${post.body}</div></td>
            </tr>`;
            filas.append(fila);
            if(index===(arrPosts.length-1)){
                $('.fila').dblclick(function(){
                    eliminarPost(this);
                })
            }
        });
    }
    var eliminarPost=(post)=>{
       var id = $(post).parent().parent().attr('id')
       var newArrPost= arrPosts.filter(function(objeto,linea){
           if(id!==(objeto.userId+'-'+objeto.id))
           return objeto;
       });
       arrPosts=newArrPost;
       cargarCuerpoTabla();
    }

    inicializar();
})()