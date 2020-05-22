$(document).ready(function(){

  var textIn = "";
  var studentData = "";

  //Vairables and Buttons
  //The submit button should submit student data
  //that data should generate universities that match student needs
  $("#submitBtn").on("click", function() {
        console.log("data provided");
        $(".datacell").empty();
        $("#data-cell").empty();
    if (studentData == "") {
        dataAlert();
        return;
    }
    if ($("#inputText").val() === "") {
        textAlert();
        return;
    }
    if ($(studentData).val() !== "" && $("#inputText").val() !== "") {
        textIn = $("#inputText").val();
        console.log("form completed");
        loadAlert();
    }
   
})

//I think there needs to be a return for desired country.
//this should be used to trigger the api to collect informaiton.


//section for university API 

const apiKey = "";

// Set endpoints
const endpoints = {
  locate: "",
  detect: "detect",
  Universities: "Universities"
};

//We need a for loop here which tells the system if the candiate
//choses x country display univeristies from that country

// Abstract API request function
function makeApiRequest(endpoint, data, type, authNeeded) {
  url = "" + endpoint;
  url += "?key=" + apiKey;
}

$.ajax({
  url:  "https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=" + langSel + "&key=trnsl.1.1.20200328T161314Z.bcd4843be4019ae7.a951bdf2b7f5fbb7821f0f8421561bb28404dea0",
  method: "GET"
}).then(function(response) {
  // console.log(response);
})

// Locate Universities
function findUniversity() {
  
  //debugger insert url into paranthesis + studentData + '&text=' + textIn, function(json) ;
  $.getJSON('' + studentData + '&text=' + textIn, function(json) {

        var allResponse = (JSON.stringify(json));

        // console.log(allResponse);

        var JSONObject = JSON.parse(allResponse);
        var translatedText = JSONObject["text"];
        $('#outputText').val(translatedText);

        // console.log(translatedText);
    });
}


})

