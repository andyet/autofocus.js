// docs here: https://github.com/andyet/autofocus.js
/* global autofocus*/
(function () {
  function debounce (fn, val) {
    var timer
    return function () {
      var args = arguments
      if (timer) clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(window, args)
      }, val)
    }
  }

  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function focusWhenFirstVisible (inputElement) {
    var hasFocused = false
    function focusIfVisible () {
      if (!hasFocused && isElementInViewport(inputElement)) {
        inputElement.focus()
        hasFocused = true
      }
    }
    window.addEventListener('scroll', debounce(focusIfVisible, 100))
    focusIfVisible()
  }

  window.focusWhenFirstVisible = focusWhenFirstVisible
})()

if (typeof autofocus !== 'undefined') {
  window.focusWhenFirstVisible(autofocus)
}
