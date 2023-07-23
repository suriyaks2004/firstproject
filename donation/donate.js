$("#button-1").click(function(){
  $(".popup-1").css("visibility", "visible");
});
$("#button-2").click(function(){
  $(".popup-2").css("visibility", "visible");
  $("#button-close1").css("visibility", "visible");
  $(".popup-1").css("visibility", "hidden");
});
$("#button-3").click(function(){
  $(".popup-3").css("visibility", "visible");
  $(".popup-1").css("visibility", "hidden");
});
$("#button-3").click(function(){
  $(".popup-3").css("visibility", "visible");$("#button-close2").css("visibility", "visible");
});
$("#button-close0").click(function(){
  $(".popup-1").css("visibility", "hidden");
});
$("#button-close1").click(function(){
  $(".popup-2").css("visibility", "hidden");
  $("#button-close1").css("visibility", "hidden");
});
$("#button-close2").click(function(){
  $(".popup-3").css("visibility", "hidden");
  $("#button-close2").css("visibility", "hidden");
});