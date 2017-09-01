function displayResults(animals) {
  $("tbody").empty();

  animals.forEach(function(animal) {
    $("tbody").append("<tr><td>" + animal.name + "</td>" +
                         "<td>" + animal.numlegs + "</td>" +
                         "<td>" + animal.class + "</td>" +
                         "<td>" + animal.weight + "</td>" +
                         "<td>" + animal.whatIWouldReallyCallIt + "</td></tr>");
  });
}

function setActive(selector) {
  $("th").removeClass("active");
  $(selector).addClass("active");
}

$.getJSON("/all", function(data) {
  displayResults(data);
});

$("#weight-sort").on("click", function() {
  setActive("#animal-weight");
  $.getJSON("/weight", function(data) {
    displayResults(data);
  });
});

$("#name-sort").on("click", function() {
  setActive("#animal-name");
  $.getJSON("/name", function(data) {
    displayResults(data);
  });
});
