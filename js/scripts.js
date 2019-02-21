$(document).ready(function() {

  $("button#test").click(function() {
    event.preventDefault();
    var l1= parseFloat($("#l1").val());
    var l2 = parseFloat($("#l2").val());
    var l3= parseFloat($("#l3").val());

    var max;
    var min;
    var mid;

    if (l1>l2) {
          mid=l1;
          min=l2;
       } else {
          mid=l2;
          min=l1;
       }
       if (mid>l3) {
          max=mid;
          if(min>l3){
             mid=min;
             min=l3;
          }else {
             mid=l3;
          }
       }else max=l3;


      var ar1=[min,mid,max]


      $("#result").text("The aranged sides of the triangle are "+ ar1);

        if((min+mid) > max){
          $("#result").append(", " + "this can be a real triangle");

          if ((min === mid) & (mid === max)){
            $("#result").append(", " + " and this is an Equilateral triangle");

          }
          else if ((min === mid) | (mid === max)){
            $("#result").append(", " + " and this is an Isosceles triangle");

          }
          else {
            $("#result").append(", " + " and this is a Scalene triangle");

          }



        }
        else {
         $("#result").append(", " + "this cant be a triangle");
      }










      $("#result").show();



  }); //for the submit
}); //for the document
