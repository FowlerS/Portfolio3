/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $(".00").css("background-color", "black");
    
    $("p").css("padding", "15px");
    
    $("#0 ~ *").css("color", "red");
    
    $("#0").css("color", "red");
    
    $("#0").css("border", "solid");
    
    $("#0").css("border-color", "white");
    
    $("#2").css("border", "solid");
    
    $("#2").css("border-color", "white");
    
    $("#3").css("border", "solid");
    
    $("#3").css("border-color", "white");
    
    $("#0").css("text-align", "center");
    
    $("#2").css("text-align", "center");
    
    $("#3").css("text-align", "center");
    
    $("#1").css("text-align", "center");
    
    $("#Facts").css("text-align", "left");
    
    $("#Interest").css("text-align", "left");
    
    $("p").css("font-size", "30px");
    
    $("#0").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("#2").bind('click', backgroundChange);
    
    $("#3").bind('click', backgroundChangeBack);
    
});

//These two functions changes the background color in addition to the text and border color.//

function backgroundChange(){
    $(".00").css("background-color", "white");
    
    $("#0").css("color", "blue");
    
    $("#0 ~ *").css("color", "blue");
    
    $("#0").css("border-color", "black");
    
    $("#2").css("border-color", "black");
    
    $("#3").css("border-color", "black");
}

function backgroundChangeBack(){
    $(".00").css("background-color", "black");
    
    $("#0").css("color", "red");
    
    $("#0 ~ *").css("color", "red");
    
    $("#0").css("border-color", "white");
    
    $("#2").css("border-color", "white");
    
    $("#3").css("border-color", "white");
}

function mouseOverMe(){
    $("#0").html("Aka CrimsonSlayer96 on xbox one");
}

function mouseOutMe(){
    $("#0").html("Hello, my name is Shamon Fowler");
}