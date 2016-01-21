/**
 * Created by jchull on 7/6/15.
 */
(function(){

  var handleScroll = function (limitElement) {
    return function(event) {
      // Not sure if these are helping
      event.preventDefault();
      event.stopPropagation();

      if (limitElement.getBoundingClientRect().top < 1) {
        var p = this;
        if (limit < 1 || p.scrollTop < limit)
          limit = p.scrollTop;

        if (p.scroll)
          p.scroll(0, limit);
        else {
          p.scrollTop = limit - 1;
        }

      }
      else {
        // anything to do if scrolling back the other way?
      }
    };
  };

  var scrollArea = document.querySelector('div[scroll-limit]');

  var limit = 0;

  if(scrollArea) {
    var limitElement = scrollArea.querySelector('.limit');

    scrollArea.addEventListener(
      'scroll',
      handleScroll(limitElement)
    );

    //disable scrolling for touch (for now)
    scrollArea.addEventListener('touchmove', function(evt) {
        evt.preventDefault()
    });
  }

})();
