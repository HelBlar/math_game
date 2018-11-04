var a;
var b;
var c;
var points=0;

function rand() {
   a = Math.floor(Math.random() * 100) + 1;
   b = Math.floor(Math.random() * 100) + 1;
   $("#first").html(a);
   $("#second").html(b);
}
$( document ).ready(rand());
$("button").click(function(){
c = $("input").val();
if ((b+a)==c){
  points++;
  $("#score").html(points);
  alert("WYGRAŁEŚ!!!");
  rand();
} else {points--;
  $("#score").html(points);
  alert("PRZEGRAŁEŚ!!!");
  rand();
}
});