# autofocus.js

## CDN File

https://cdn.andyet.com/autofocus.min.js

## Intro

Autofocusing inputs for stuff like contact forms and newsletter signups increases signups.

In many cases simply using the `autofocus` attribute on the input is all you need. But if the form is further down the page, that doesn't work because the browser will scroll to it as well. 

So this tiny helper script will focus on the input when it first becomes visible.

This is for use with simple static pages such as andyet.com.

## using it

1. load this script asynchronously with a script tag `<script async src='https://cdn.andyet.com/autofocus.min.js'/>`
2. grab the DOM element using something like `document.querySelector()` and assign the result to a global variable called `autofocus` like so: `window.autofocus = document.querySelector('#some-input')`
3. profit! (at least better conversion rates, supposedly)

## tech details

It registers a debounced scroll handler and uses `.getBoundingClientRect()` to determine if element is visible in viewport and focuses the input (only once).

When the script loads/runs it'll check for the existance of the `autofocus` variable and registers it with this script.

Since the script is loaded asynchronously there's no guarantee you can just call the `focusWhenFirstVisible` method that it adds. 

Minification: `npm i && npm run build`