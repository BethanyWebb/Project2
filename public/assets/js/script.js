//lines 2-41 are establishing our variables 
// $(function() {
//   $(".enter_section").on("submit", function(event) {
//     event.preventDefault();

//     var firstName = {
//       first_name: $("#enter_text")
//         .val()
//         .trim(),
//     };

//     var lastName = {
//       last_name: $("#enter_text")
//         .val()
//         .trim(),
//     };
//     var emailAddress = {
//       email_address: $("#enter_text")
//         .val()
//         .trim(),
//     };
//     var nationality = {
//       nationality: $("#enter_text")
//         .val()
//         .trim(),
//     };
//     var highestEducation = {
//       highest_educaiton: $("#enter_text")
//         .val()
//         .trim(),
//     };
//     var desiredCounty = {
//       desired_country: $("#enter_text")
//         .val()
//         .trim(),
//     };
//     var studentVisa = {
//       student_visa: $("#enter_text")
//         .val()
//         .trim(),
//     };


//lines 45-52 changes and "burgers" to "university".  I added the variable newStudent for new students who input their informaiton.
  //   $.ajax("/api/universities", {
  //     type: "POST",
  //     data: newStudent
  //   }).then(function() {
  //     console.log("Added new student");
  //     location.reload();
  //   });
  // });


//Lines 56-82 is the API Request
  //const apiKey = "3Qehhm2UOanyHsXtb95d4A5WMv2DtdRbnna4Ya5P";

// // Set endpoints
// const endpoints = {
//   translate: "",
//   detect: "detect",
//   Universities: "Universities"
// };

// // Abstract API request function
// function makeApiRequest(endpoint, data, type, authNeeded) {
//   url = "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=3Qehhm2UOanyHsXtb95d4A5WMv2DtdRbnna4Ya5P" + endpoint;
//   url += "?key=" + apiKey;

//   // If not listing universities, find alternative.
//   if (endpoint !== endpoints.) {
//     url += "&q=" + encodeURI(data.universities);
//   }

// $.ajax({
//     url:  "https://api.data.gov/ed/collegescorecard/v1/schools?api_key" + desiredCountry + "&key=3Qehhm2UOanyHsXtb95d4A5WMv2DtdRbnna4Ya5P",
//     method: "GET"
//   }).then(function(response) {
//     // console.log(response);
// })
    
// }
