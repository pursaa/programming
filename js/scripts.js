$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();

    if(answer1 === "You obsese over layouts, navigation, colors, and design" && answer3 === "Websites and webapps" && answer4 === "Yes" && answer5 === "Yes" ){
      $("#result1").show();
    }else if(answer1 === "You obsese over layouts, navigation, colors, and design" && answer3 === "Mobile Apps" || answer2 === "Small company" && answer4 === "Yes" && answer5 === "Yes"){
      $("#result2").show();
    }else if(answer1 === "Do you like to create logical computations" && answer2 && answer3 === "Software programming" && answer4 === "Yes" && answer5 === "Yes"){
      $("#result3").show();
    }else if(answer4 === "No" || answer5 === "No" ){
      $("#result5").show();
    } else{
      $("#result4").show();
      }
  });
});
