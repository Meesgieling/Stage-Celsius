function adjustStyle(width) {
  width = parseInt(width);
  if (width < 701) {
    $("#size-stylesheet").attr("href", "css/navigatiecss.css");
  } else if (width < 900) {
    $("#size-stylesheet").attr("href", "css/navigatiecss.css");
  } else {
     $("#size-stylesheet").attr("href", "css/desktop.css"); 
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});