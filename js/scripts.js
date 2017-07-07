$(document).ready(function(){
  $("#submit").click(function(){
    var heightInput = parseFloat($("#height").val());

    if (heightInput >= 55) {
      $(".tall").show();
      $(".small").hide();
    } else {
      $(".short").show();
      $(".tall").hide();
    }
    $("#submit").removeheightInput();
  });
});
