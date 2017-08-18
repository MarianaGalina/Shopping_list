$(document).ready(function(){
  var items = [
    'Leche',
    'Queso',
    'Yogurt',
    'Manzanas',
    'Jamón',
    'Cereal',
    'Mermelada',
    'Carne',
    'Pollo',
    'Verdura',
    'Arroz',
    'Jugo',
    'Pasta',
  ];
    items.push('chocomilk');
    items[items.length] = 'Agua de Litro';
    items[items.length - 1 ] = 'Agua de 1l.';
    items[7] = 'Huevo de 1Kg';
     console.info( items);

//Javascript manual
     document.querySelector('#items li:nth-child(1)')
     .innerHTML = items[0]

//JQuery manual
    $('#items li').eq(1).html(items[1]);

//Jquery automatizado
   var total_items= items.length -1,
   i=0;

   while(i <= total_items){
     $('#items li').eq(i).html(items[i]);
     i++;
   }
 for (i=0; i<=total_items; i++){
   $('#items li').eq(i).html(items[i]);
 }
});
