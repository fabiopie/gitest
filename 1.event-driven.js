//approccio ad eventi asincrono
var dato = ottieniDatoRemoto(url);

 ottieniDatoRemoto(url,function(dato){
    alert(dato);
})//la funzione ritorna subito