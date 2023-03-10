$('.tabs-nav li').click(function(e) {
  var a = $(this),
      parent = a.parents('.tabs'),
      nav = parent.children('.tabs-nav').children('li'),
      box = parent.children('.tabs-box').children('div');
 
  if (!a.hasClass('active')) {
    a.addClass('active')
      .siblings().removeClass('active');
 
    box.eq(a.index()).addClass('active')
      .siblings().removeClass('active');
  }
 
  e.preventDefault();
});