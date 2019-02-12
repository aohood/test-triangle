$(document).ready(function() {

  $("form#cal").submit(function(event) {
    event.preventDefault();
    var number1= parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());

    // $("#add").select(function(){
    //   add(number1,number2);
    // }); //for the click


    alert("The result of "+($("#sub").val())+" " +
    ($("#num1").val()) +
    " and "+ ($("#num2").val())+ " is "+sub(number1,number2));

    $("#sub").select(function(){
      sub(number1,number2);
    }); //for the click

    $("#mul").select(function(){
      multiply(number1,number2);
    }); //for the click

    $("#divide").select(function(){
      divide(number1,number2);
    }); //for the click

  }); //for the submit
}); //for the document




  var add = function(n,m){
    return n+m;
  }
  var sub = function(n,m){
    return n-m;
  }
  var multiply = function(n,m){
    return n*m;
  }
  var divide = function(n,m){
    return n/m;
  }
