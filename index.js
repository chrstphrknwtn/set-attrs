module.exports = function (els, attrs) {
  var elements = []

  if (els.length === undefined) {
    elements = [els]
  } else if (Array.isArray(els)) {
    elements = els
  } else if (els instanceof NodeList) {
    for (var i = 0; i < els.length; i++) {
      elements[i] = els[i]
    }
  } else {
    throw new Error('set-attrs: els argument must be an element, array or nodelist')
  }

  if (Array.isArray(attrs)) {
    setMatchedAttrs(elements, attrs)
  } else if (typeof attrs === 'object') {
    setSameAttrs(elements, attrs)
  }
}

// Set the same attributes on one or more elements
function setSameAttrs(elements, attrs) {
  elements.forEach(function (el) {
    setAttrs(el, attrs)
  })
}

// Set matched attrs object on element by index
function setMatchedAttrs(elements, attrs) {
  for (var i = 0; i < elements.length; i++) {
    if (attrs[i]) {
      setAttrs(elements[i], attrs[i])
    }
  }
}

// Set attributes on an element
function setAttrs(el, attrs) {
  for (var key in attrs) {
    if ({}.hasOwnProperty.call(attrs, key)) {
      el.setAttribute(key, trim(attrs[key]))
    }
  }
}

// Trim newlines and multiple spaces from attribute
function trim(attr) {
  return attr.toString().replace(/(?:\r\n|\r|\n)/g, ' ').replace(/ +/g, ' ')
}
