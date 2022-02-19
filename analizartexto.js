/*Metemos todas las palabras en esta variable*/
var palabramalsonante = ['Metemierdas','metemierdas','hijodeputa','Hijodeputa','hijadeputa','Hijodeputa', 'mamahuevo','Mamahuevo', 'puta','Puta', 'Gilipollas', 'gilipollas','Imbécil','imbécil','Imbecil','imbecil','Cabrón','cabrón','Cabron','cabron','Cabrona','cabrona','idiota','Idiota','Maganto','maganto', 'Podemita','podemita', 'Malasangre','malasangre', 'Socialista','socialista', 'Malparido','malparido', 'Mameluco','mameluco', 'Mamporrero','mamporro', 'Facha','facha', 'Aborto','aborto', 'Cabrón','cabrón','Baboso','baboso', 'caraanchoa','Caraanchoa','Gey','gey', 'Barriobajero','barriobajero', 'Maricón','maricón', 'Bellaco', 'belllaco','Bellaca', 'belllaca',' pajero','Pajero', 'Berzotas','berzotas', 'Besugo','besugo', 'Bobalicón','bobalicón', 'Bobalicon','bobalicon',' Bocabuzón','bocabuzón', ' Bocabuzon','bocabuzon', 'Bocachancla','bocachancla', 'Bocallanta','bocallanta', 'Boquimuelle','Mastuerzo','mastuerzo', 'Matacandiles','matacandile', 'Meapilas','meapilas', 'Melón','melón','Pelele','pelele', 'Pelma','pelma', 'Percebe','percebe', 'Perrocostra','perrocostra', 'Perroflauta','perroflauta', 'Peterete','peterete', 'Petimetre','petimetre', 'Picapleitos','picapleitos', 'Pichabrava','pichabrava', 'Pillavispas','pillavispas', 'Piltrafa','piltrafa', 'Pinchauvas','pinchauvas', 'Pintamonas','pintamonas', 'Piojoso','piojoso', 'Pitañoso','pitañoso', 'Pitoflojo','pitoflojo', 'Plomo','plomo', 'Pocasluces','pocasluces', 'Pollopera','pollopera', 'Quitahipos','quitahipos', 'Rastrapajo','rastrapajo', 'Rebañasandías','rebañasandías', 'Revientabaules','revientabaules', 'Ríeleches','ríeleches', 'Robaperas','robaperas', 'Sabandija','sabandija', 'Sacamuelas','sacamuelas', 'Sanguijuela','sanguijuela', 'Sinentraero','sinentraero', 'Sinsustancia','sinsustancia', 'Sonajas','sonajas','Sonso','sonso', 'Soplagaitas','soplagaitas', 'Soplaguindas','soplaguindas', 'Sosco','sosco', 'Tagarote','tagarote', 'Tarado','tirado', 'Tarugo','tarugo', 'Tiralevitas','tiralevitas', 'Tocapelotas','tocapelotas', 'Tocho','tocho', 'Tolai','tolai', 'Tontaco','tontaco', 'Tontucio','tontucio', 'Tordo','tordo', 'Tragaldabas','tragaldabas', 'Tuercebotas','tuercebotas', 'Tunante','tunante', 'Zamacuco','zamacuco', 'Zambombo','zambombo','Zampabollos','zampabollos', 'Zamugo','zamugo','Zángano','zángano','Zarrapastroso','zarrasposo','Zascandil','zascandil','Zopenco','zopenco', 'Zoquete','zoquete','Zote','zote','Zullenco','zullenco',' Zurcefrenillos','zurcefrenillos'];


const checkMalasPalabras = (palabra) => {
  var rgx = new RegExp(palabramalsonante.join("|")+"|" + "/gi");
  return (rgx.test(palabra));
}

$('#boton-guardar').click(() => { /*Cuando hagamos click nos analizará el texto con las palabras que hallamos metido en la parte de arriba*/ 
      
  var nombre = $("#nombretxt").val().toLowerCase();
  
  if(checkMalasPalabras(nombre) == true){/*Si encuentra una palabra mal sonante nos saldrá en el alert*/
    window.alert("Hemos encontrado la siguiente palabra malsonante: " + nombre);
  }
  
});