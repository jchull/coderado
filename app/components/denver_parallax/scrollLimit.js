/**
 * Created by jchull on 7/6/15.
 */
(function(){

  var handleScroll = function (event) {
    var limitElement = this.querySelector('.limit');
      if(limitElement.getBoundingClientRect().top<1){
        console.log(this.scrollTop);
        if(limit>0) {
          this.scrollTop = limit-1;
        }
        else {
          limit = this.scrollTop;
        }
      }
    else {
        // anything to do if scrolling back the other way?
      }

  }

  var scrollArea = document.querySelector('div[scroll-limit]');
  var limit = 0;

  if(scrollArea) {
    scrollArea.addEventListener(
      'scroll',
     // debounce(handleScroll, 250)
      handleScroll
    );
  }

})();
