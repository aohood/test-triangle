$(document).ready(function() {

  $("form#cal").submit(function(event) {
    event.preventDefault();
    var number1= parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());




    if( $("#operation").val() === "adding"){
      alert("The result of "+($("#add").val())+" " +
      ($("#num1").val()) +
      " and "+ ($("#num2").val())+ " is "+add(number1,number2));
    }
      else if ($("#operation").val() === "subtracting"){
        alert("The result of "+($("#sub").val())+" " +
        ($("#num2").val()) +
        " from "+($("#num1").val()) + " is "+sub(number1,number2));
      }
      else if ($("#operation").val() === "multiplying") {
        alert("The result of "+($("#mul").val())+" " +
        ($("#num1").val()) +
        " and "+ ($("#num2").val())+ " is "+multiply(number1,number2));
      }
      else if (($("#operation").val() === "dividing")){
        alert("The result of "+($("#divide").val())+" " +
        ($("#num1").val()) +
        " by "+ ($("#num2").val())+ " is "+divide(number1,number2));

      }











    // $("#sub").click(function(){
    //   alert(sub(number1,number2));
    // }); //for the click
    //
    // $("#mul").select(function(){
    //   multiply(number1,number2);
    // }); //for the click
    //
    // $("#divide").select(function(){
    //   divide(number1,number2);
    // }); //for the click

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
