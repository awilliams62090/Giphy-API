$(document).ready(function () { //getting the js ready for action

    //Global Variables 
    var topics = ["Batman", "Wonderwoman", "Dead Pool", "Captain America", "Guardians of the Galaxy", "Iron Man", "Thundercats", "Mermaid Man"];

    function displayHeroes(heroName) {
        console.log(heroName);
        //Giphy API- console logging successful use will remove var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=mBRN2VcmC2oCNNm2yam6eDKUzpHcDQLI&limit=10"); to use AJAX 
        var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + heroName + "&api_key=mBRN2VcmC2oCNNm2yam6eDKUzpHcDQLI&limit=10");
        // queryURL.done(function(data) { console.log("success got data", data); });
        //AJAX Call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //Looping throuhg my array and adding the rating, also giving some variables to call and appending array to page
            for (var i = 0; i < response.data.length; i++) {
                var gif = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var heroDiv = $("<div class='hero'>")
                var rating = $("<p>").text("Rating: " + response.data[i].rating);
                var heroDiv = $("<div class='hero'>");
                var heroImage = $("<img>");
                heroImage.attr("data-gif", gif);
                heroImage.attr("data-still", still);
                heroImage.attr("data-state", "gif");
                heroImage.addClass("heroImage");
                heroImage.attr("src", response.data[i].images.fixed_height.url);
                heroDiv.append(heroImage);
                heroDiv.append(rating);
                $("#addedHeroes").prepend(heroDiv);

            }
        });

    };
    
    //push array into buttons and re-render buttons to have a gify dispayed on click of button- 
    function displayButtons() {
        $("#addedButtons").empty();
        for (var i = 0; i < topics.length; i++) {

            var heroButton = $("<button>");
            heroButton.addClass("hero-btn");
            heroButton.attr("data-name", topics[i]);
            heroButton.text(topics[i]);
            $("#addedButtons").append(heroButton);
        }
    };

    //take the user input from the "search form" and dynamically create a button from their search- call the api onclick to call gifs to page. Also won't let a button be added for words less than 2 characters
    $("#add-hero").click(function (event) {
        event.preventDefault();
        var topic = $("#hero-input").val().trim();
        if (topic.length > 2) {
            topics.push(topic)
        };
        displayButtons();
    });

    $(document).on("click", ".hero-btn", function () {
        var heroName = $(this).data("name");
        console.log(heroName);
        console.log($(this));
        displayHeroes(heroName);

    });

    //add pause/play functionality to gifs- gifs should all start on pause and when clicked by user, they animate
    $(document).on("click", ".heroImage", function () {
        var image = $(this);
        if (image.attr("data-state") === "gif") {
            image.attr("src", image.attr("data-still"));
            image.attr("data-state", "still");
        } else {
            image.attr("src", image.attr("data-gif"));
            image.attr("data-state", "gif");
        }

    });

    displayButtons();



});