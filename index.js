module.exports = function (el, attrs) {
  for (let key in attrs) {
    if ({}.hasOwnProperty.call(attrs, key)) {
      el.setAttribute(key, attrs[key].toString().replace(/\s{2,}/g, ''))
    }
  }
}
