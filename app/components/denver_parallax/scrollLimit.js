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
    }

  }

  var scrollArea = document.querySelector('div[scroll-limit]');

  var limit = 0;

  if(scrollArea) {
    var limitElement = scrollArea.querySelector('.limit');

    scrollArea.addEventListener(
      'scroll',
      handleScroll(limitElement)
    );
    scrollArea.addEventListener('touchmove', function(evt) {
      //In this case, the default behavior is scrolling the body, which
      //would result in an overflow.  Since we don't want that, we preventDefault.
      if(!evt._isScroller) {
        evt.preventDefault()
      }
    })
  }

})();
