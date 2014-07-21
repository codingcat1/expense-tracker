$(document).ready(function() {
  $("form#category").submit(function(event) {
    event.preventDefault();
    var description = $("input#description").val();
    var amount = parseFloat($("input#amount").val()).toFixed(2);
    $("#result").show();
    $("ul.purchases").append("<li>" + description + " $" + amount + "</li>");


  });
});
