// add a class defined in stylesheet
$("h1").addClass("big-title");

// change content of all elements with that selector
$("button").text("Restore title and turn purple");

// add attribute to html tag
$("a").attr("href", "https://www.yahoo.com")

// add event listener works for selecting one element
$("h1").click(function() {
  $("h1").css("color", "purple");
})

// add event listener works also to select multiple elements
$("button").click(function() {
  $("h1").text("Hello");
  $("h1").css("color", "purple");
})

// add event listner to entire page to display key instead of h1 whenever pressed
$(document).keypress(function(event) {
  $("h1").text(event.key);
})
