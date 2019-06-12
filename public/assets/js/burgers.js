$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var eaten = $(this).data("eaten");
  
      var eaten = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        complete: function() {
          location.reload();
        }        
      })
      
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
    
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: false
        
      };
      console.log(newBurger)
  
      // Send the POST request.
      $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger,
        complete: function() {
          console.log("created new cat");
          location.reload();
        }
      })
    });
  
  
  });
  