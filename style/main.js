$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');
 
  var elemenTujuan = $(tujuan);
 
  $('html , body').animate({
   scrollTop: elemenTujuan.offset().top - 50
  }, 1000, 'swing');
 
  e.preventDefault();
 });

 var sentences = [
  "I'M Pandu Zamora..",
 ];

 var part = 0;
 var part_index = 0;
 var interval_instance;
 var elm = document.querySelector("#change");

 function Write() {
   var text = sentences[part].substring(0, part_index + 1);
   elm.innerHTML = text;
   part_index++;

   if(text === sentences[part]) {
     clearInterval(interval_instance);
     setTimeout(function() {
       interval_instance = setInterval(Delete, 25);
     }, 1000);
   }
 }

 function Delete() {
   var text = sentences[part].substring(0, part_idex - 1);
   elm.innerHTML = text;
   part_index--;
   
   if(text === '') {
     clearInterval(interval_instance);

     if(part == (sentences.length - 1))
      part = 0;
     else
      part++;

      part_index = 0;

      setTimeout(function() {
        interval_instance = setInterval(Write, 85);
      }, 400);
   }
}
interval_instance = setInterval(Write, 85);
