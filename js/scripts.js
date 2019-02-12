$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    $(".first-name").text($("#fname").val());
    $(".Last-name").text($("#lname").val());
    $(".address").text($("#address").val());
    $(".menu").text($("#menu").val());


    $("#confirmation").show();
    event.preventDefault();



  });
});
