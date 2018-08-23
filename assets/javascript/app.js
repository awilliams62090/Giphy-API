$(document).ready(function(){ //getting the js ready for action

//Global Variables 
var topics= ["Batman", "Wonderwoman", "Dead Pool" , "Captain America" , "Guardians of the Galaxy", "Iron Man", "Aquaman", "Mermaid Man and Barnacle Boy"];


//Giphy API- console logging successful use will remove $.get to use AJAX 
var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=mBRN2VcmC2oCNNm2yam6eDKUzpHcDQLI&limit=10");
queryURL.done(function(data) { console.log("success got data", data); });
//AJAX Call

//push array into buttons and re-render buttons to have a gify dispayed on click of button 

//take the user input from the "search form" and dynamically create a button from their search- call the api onclick to call gifs to page 

//add pause/play functionality to gifs- gifs should all start on pause and when clicked by user, they animate


    
});