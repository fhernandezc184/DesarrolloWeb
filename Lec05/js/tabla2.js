(function(){
    var arrPosts =[];
    var post={
        id:0,
        name:'',
        price:0,
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
                url:'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data',    
                success:function(data,status, xhrs){                    
                    arrPosts=data.rows;
                    console.log(data);
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
            var fila=`<tr id="${post.id}-${post.name}">
            <td><div class="fila">${post.id}</div></td>
            <td><div class="fila">${post.name}</div></td>
            <td><div class="fila">${post.price}</div></td>
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
           if(id!==(objeto.id+'-'+objeto.name))
           return objeto;
       });
       arrPosts=newArrPost;
       cargarCuerpoTabla();
    }

    inicializar();
})()