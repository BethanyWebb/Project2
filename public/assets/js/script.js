<<<<<<< HEAD
$(document).ready(function(){
  
  //Variables established for corresponding search fields
  var desiredCountry = "";
  var searchCA = "";
  var searchUSA = "";
  

  //function corresponding with that search 

  $("#desiredcountry").on("click", function() {
    // console.log("desired country");
    desiredCountry = "Canada";
    searchCA = "Canada";
})

$("#desiredcountry").on("click", function() {
  // console.log("desired country");
  desiredCountry = "USA";
  searchUSA = "USA";
})


  $.ajax({
    url:"http://universities.hipolabs.com/search?country+" desiredCountry,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

//Get universities function 

function findUniversity() {
    
  //debugger;
  $.getJSON('http://universities.hipolabs.com/search?country+' desiredCountry, function(json) {

      var allResponse = (JSON.stringify(json));

      console.log(allResponse);

      var JSONObject = JSON.parse(allResponse);
      var allUniversities = JSONObject["text"];
      $('#outputText').val(allUniversities);

  });


//create card with informatin found in api search 

// Create header using searchSel value we can use this if need be. 
// $("<h3>").text("Universities that may interest you" + searchSel + "?").appendTo("#ID for this section");
        
// for (var i = 0; i < 6; i++) {
    
//     var card = $("<div>").addClass("card col-lg-2 col-sm-4 col-xs-6");
//     var cardBody = $("<div>").addClass("card-body d-flex flex-column justify-content-start align-items-stretch");
    
//     var thumbnail = $("<img>").addClass("card-img-top").attr("src", response.items[i].volumeInfo.imageLinks.thumbnail);
//     var universityName = $("<h5>").addClass("card-title").text(response.items[i].volumeInfo.title);
//     var preview = $("<a>").addClass("card-text").text("Preview");
//     $(preview).attr({"href": response.items[i].volumeInfo.previewLink, "target": "_blank"});

//     $(cardBody).append(university, preview);
//     $(card).append(thumbnail, cardBody);
//     $(".university").append(card);  
// }

=======
$(function() {
  // $(".enter_section").on("submit", function(event) {
  //   event.preventDefault();

  //   var newBurger = {
  //     burger_name: $("#enter_text")
  //       .val()
  //       .trim(),
  //     devoured: 0
  //   };

  //   $.ajax("/api/burgers", {
  //     type: "POST",
  //     data: newBurger
  //   }).then(function() {
  //     console.log("Added new burger");
  //     location.reload();
  //   });
  // });

  // $(".eatburger").on("click", function(event) {
  //   event.preventDefault();

  //   var id = $(this).data("id");
  //   var devouredState = {
  //     devoured: 1
  //   };

  //   $.ajax("/api/burgers/" + id, {
  //     type: "PUT",
  //     data: devouredState
  //   }).then(function() {
  //     console.log("Burger devoured");
  //     location.reload();
  //   });
  // });

  // $(".trashburger").on("click", function(event) {
  //   event.preventDefault();

  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax({
  //     type: "DELETE",
  //     url: "/api/burgers/" + id
  //   }).then(location.reload());
  // });
});
>>>>>>> c24cec60ceebb59f46983a3c9c21c1e43ba7b7d8
