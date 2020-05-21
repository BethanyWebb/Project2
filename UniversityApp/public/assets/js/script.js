$(document).ready(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    var university_id = $(this).children(".university_id").val();
    console.log(university_id);
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/universities/" + university_id
    }).then(
      function(data) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});