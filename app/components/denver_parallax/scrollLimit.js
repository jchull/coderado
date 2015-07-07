/**
 * Created by jchull on 7/6/15.
 */
(function(){
  var scrollArea = document.querySelector('div[scroll-limit]');
  var limit = 0;

  if(scrollArea) {
    scrollArea.addEventListener(
      'scroll',
      function (event) {
        // add debounce later
        if(document.querySelector('.limit').getBoundingClientRect().top<1){
          if(limit>0)
            this.scrollTop = limit;
          else
            limit = this.scrollTop;
        }
      }
    );
  }

})();
