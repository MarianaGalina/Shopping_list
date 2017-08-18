$(document).ready(function(){
  var items = [];
  var items_html= "";
  function renderList(){
    console.clear();
    console.info(items);
    items_html ='';

    $(items).each(function(index, item){
      items_html += '<li>'+(index+1) + '. ' +  item + '</li>';
    })

    $('p#counter').html('Tienes ' + items.length + ' elementos');
    $('ul#items_lista').html(items_html);
  }

  $('form#agregar').on('submit', function(event){
    event.preventDefault();
    var text= $('input#nuevo_articulo').val();

    if (text){
      items.push(text);
    }
    else{
    items.pop();
    }

    renderList();
  });
    $('button#remove').on('click', function(event){
      event.preventDefault();
      items.pop();
      renderList();



    });
  });
