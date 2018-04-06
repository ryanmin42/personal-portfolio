var expanded = false;
  function display() {
    var list = $('.content');
    var title = $('.title');
    if(expanded) {
      list.removeClass('responsive');
      title.removeClass('extend');
      expanded = false;
    }
    else {
      title.addClass('extend');
      title.css('position', 'relative');
      $('#headshot').addClass('front');
      list.addClass('responsive');
      setTimeout(function(){title.css('position', 'static');
      $('#headshot').removeClass('front');
      }, 300);
      expanded = true;
    }
  }
