(function() {

    var items = document.querySelectorAll(".timeline li");
    /* function to check whether list item passes as parameter has its
    margin area falling inside document's visible width and height.
    Returns true in case above condition is met. */
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }
    
      /* check for scroll event on document
      and call specified function */
      window.addEventListener("scroll", callbackFunc);
    
    })();