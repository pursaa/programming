$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var You obsese over layouts, navigation, colors, and design = "1a"
    var Websites and webapps = "3a"
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("#question4").val();
    var answer5 = $("#question5").val();

    if(answer1 === "You obsese over layouts, navigation, colors, and design" && answer3 === "Websites and webapps" ){
      $("#result1").show();

    // }else if (answer1 !== "Beast" && answer2 === "Under the sea" && answer3 === "No" ){
    // $("#result2").show();
    //
    // } else if(answer1 !== "Fox" && answer2==="In the forest" && answer3==="Yes"){
    //   $("#result2").show();
    //
    // } else if(answer1 === "Fox" && answer2==="In the forest" && answer3 ==="Yes"){
    //   $("#result3").show();
    //
    // } else if(answer2 === "In the suburbs"){
    //   $("#result3").show();
    // } else if (answer1 === "Beast"){
    //   $("#result1").show();
    //
    // } else if (answer1 === "Lamp" && answer2 === "In the desert" && answer3 === "Yes"){
    //   $("#result2").show();

    } else{
      $("#result4").show();
      }


  });
});
