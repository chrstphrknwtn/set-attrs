# Set Attributes

Set multiple attributes on a DOM element.

````javascript
const setAttributes = require('set-attrs');

const el = document.querySelector('svg');

setAttributes(el, {
  width: '80px',
  viewbox: '0 0 80 80',
  'data-link': 'skynet'
});

// => <svg width="80" viewbox="0 0 80 80" data-link="skynet">...</svg>
````
