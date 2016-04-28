# Set Attributes

Set multiple attributes on a DOM element.

## Install

````shell
npm install set-attrs
````

## Usage

````javascript
const setAttributes = require('set-attrs');

const el = document.querySelector('svg');

setAttributes(el, {
  width: '80px',
  viewbox: '0 0 80 80',
  'data-link': 'skynet'
});

// => <svg width="80px" viewbox="0 0 80 80" data-link="skynet">...</svg>
````
