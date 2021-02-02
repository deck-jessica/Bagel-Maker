
$(function() {
    $(".devour-bagel").on("click", function(event) {
        event.preventDefault();

      var id = $(this).data("id");
      
  
      var devouredStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/bagels/" + id, {
        type: "PUT",
        data: devouredStatus
      }).then(
        function() {
          console.log(devouredStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});

    $(".newBagel-form").on("submit", function(event) {
    
      event.preventDefault();
  
      var newBagel = {
        bagel_name: $("#newBagel").val().trim(),
        // devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/bagels", {
        type: "POST",
        data: newBagel
      }).then(
        function() {
          console.log(newBagel, "created new bagel");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });