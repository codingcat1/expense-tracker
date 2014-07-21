$(document).ready(function() {
  var total = 0;
  var quantity = 0;
  $("form#category").submit(function(event) {
    event.preventDefault();
    var description = $("input#description").val();
    var amount = parseInt($("input#amount").val());
    $("#result").show();
    $("ul.purchases").append("<li>" + description + " $" + amount + "</li>");

    total += amount;
    $(".total").text("$" + total);

    quantity +=1;
    $(".quantity").text(quantity);
  });
});
