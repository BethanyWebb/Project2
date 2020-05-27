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


  //Images API 

  $.ajax({
    url:"https://api.unsplash.com/search/photos?query=university&client_id=bjK2SBxTZdM6KIq1bx8T-ZxcEoBOqd-8MlnhrgLQ71Q",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });




//create card with informatin found in api search 

// Create header using searchSel value we can use this if need be. 
$("<h3>").text("Universities that may interest you" + searchSel + "?").appendTo("#ID for this section");
        
for (var i = 0; i < 6; i++) {
    
    var card = $("<div>").addClass("card col-lg-2 col-sm-4 col-xs-6");
    var cardBody = $("<div>").addClass("card-body d-flex flex-column justify-content-start align-items-stretch");
    
    var thumbnail = $("<img>").addClass("card-img-top").attr("src", response.items[i].volumeInfo.imageLinks.thumbnail);
    var universityName = $("<h5>").addClass("card-title").text(response.items[i].volumeInfo.title);
    var preview = $("<a>").addClass("card-text").text("Preview");
    $(preview).attr({"href": response.items[i].volumeInfo.previewLink, "target": "_blank"});

    $(cardBody).append(university, preview);
    $(card).append(thumbnail, cardBody);
    $(".university").append(card);  
}


