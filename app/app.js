
//this is where we jquery
$(document).ready(function() {

  //READ/ WRITE
  //http://api.jquery.com/html/
  //https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
  $("#showText").html(localStorage.getItem("key"));

  //https://api.jquery.com/submit/
  $(".addText").submit(function(event) {

    //http://api.jquery.com/val/
    var listing = $("#listing").val();
    var checkbox = "<li><input class='checkbox' type='checkbox'>";
    var remove = "<a class='remove'> delete </a></li>";

    if (listing) {
      $("#showText").append(checkbox + listing + remove);

      //https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
      localStorage.setItem("key", $("#showText").html());
      $(".text-input").val("");
    }
  });

  //UPDATE
  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }
    $(this)

      //https://api.jquery.com/parent/
      .parent()
      
      //http://api.jquery.com/toggleclass/
      .toggleClass("strike");

    localStorage.setItem("key", $("#showText").html());
  });

  //DELETE
  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();
    localStorage.setItem("key", $("#showText").html());
  });
});
