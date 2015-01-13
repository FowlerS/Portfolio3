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
    
    $("#3").css("border", "solid");
    
    $("#3").css("border-color", "white");
    
    $("#4").css("border", "solid");
    
    $("#4").css("border-color", "white");
    
    $("#0").css("text-align", "center");
    
    $("#3").css("text-align", "center");
    
    $("#4").css("text-align", "center");
    
    $("#1").css("text-align", "center");
    
    $("#2").css("text-align", "left");
    
    $("p").css("font-size", "30px");
    
    $("#0").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("#3").bind('click', backgroundChange);
    
    $("#4").bind('click', backgroundChangeBack);
    
});

function backgroundChange(){
    $(".00").css("background-color", "white");
    
    $("#0 ~ *").css("color", "blue");
    
    $("#0").css("border-color", "black");
    
    $("#3").css("border-color", "black");
    
    $("#4").css("border-color", "black");
}

function backgroundChangeBack(){
    $(".00").css("background-color", "black");
    
    $("#0 ~ *").css("color", "red");
    
    $("#0").css("border-color", "white");
    
    $("#3").css("border-color", "white");
    
    $("#4").css("border-color", "white");
}

function mouseOverMe(){
    $("#0").html("Portfolio 3");
}

function mouseOutMe(){
    $("#0").html("Hello, my name is Shamon Fowler");
}