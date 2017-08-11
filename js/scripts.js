$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("#question4").val();
    var answer5 = $("#question5").val();

    if(answer1 === "You obsese over layouts, navigation, colors, and design" && answer3 === "Websites and webapps" ){
      $("#result1").show();
    }else if(answer1 === "You obsese over layouts, navigation, colors, and design" && answer3 === "Mobile Apps" ){
        $("#result2").show();
      }else if(answer1 === "Do you like to create logical computations" && answer3 === "Software programming" ){
          $("#result3").show();

debugger

    } else{
      $("#result4").show();
      }


  });
});
