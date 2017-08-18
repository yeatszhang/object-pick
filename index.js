var pick = require('lodash/pick')
var isObject = require('lodash/isObject')

module.exports = function (obj, keys, rename) {
  const newObj = pick(obj, keys)
  if (isObject(rename)) {
    _.forEach(rename, (oldKey, newKey) => {
      if (oldKey in obj) newObj[newKey] = obj[oldKey]
    })
  }
  return newObj
}