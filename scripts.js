$(function(){
  $('.default_popup').popup({
    content		: '<p>Button</p><button>Press me</button><br><p>Textfield</p><input type="text" name="textfield" placeholder="textfield"><br><p>Range slider</p><input type="range" class="zoom-range" id="zoom-range"><br><p>Color picker</p><input type="color" name="favcolor"><br><p>Submit button</p><input type="submit" value="Submit"><br><p>Radiobutton</p><input type="radio" name="radio" value="Radiobutton"><br><p>Chechbox</p><input type="checkbox" name="checkbox" value="checkbox"><br>',
    type		: 'html',
    width		: 400,
    height		: 150
  });
});

$(function(){
  $('*').find('#mySwipe').panzoom({
    $zoomIn: $('*').find("#zoom-in"),
    $zoomOut: $('*').find("#zoom-out"),
    $zoomRange: $('*').find("#zoom-range"),
    $reset: $('*').find("#reset"),
    disablePan:true,
  });
});
$(function(){
  var element = document.getElementById('mySwipe'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next');

  window.mySwipe = new Swipe(element, {
    startSlide: 0,
    auto: 0,
    draggable: true,
    autoRestart: false,
    continuous: true,
    disableScroll: true,
    stopPropagation: true,
    callback: function(index, element) {},
    transitionEnd: function(index, element) {}
  });
  prevBtn.onclick = mySwipe.prev;
  nextBtn.onclick = mySwipe.next;
});
$(function(){
  var element = document.getElementById('swipe'),
  prevBtn = document.getElementById('previous'),
  nextBtn = document.getElementById('next1');

  window.mySwipe = new Swipe(element, {
    startSlide: 0,
    auto: 0,
    draggable: true,
    autoRestart: false,
    continuous: true,
    disableScroll: true,
    stopPropagation: true,
    callback: function(index, element) {},
    transitionEnd: function(index, element) {}
  });
  prevBtn.onclick = mySwipe.prev;
  nextBtn.onclick = mySwipe.next;
});
$(function() {
  var $section = $('#focal');
  var $panzoom = $section.find('.panzoom').panzoom();
  $panzoom.parent().on('mousewheel.focal', function( e ) {
    e.preventDefault();
    var delta = e.delta || e.originalEvent.wheelDelta;
    var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
    $panzoom.panzoom('zoom', zoomOut, {
      animate: false,
      focal: e
    });
  });
});

$(function() {
  $('.drawer').drawer();
});
