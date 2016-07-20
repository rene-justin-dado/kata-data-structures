module.exports = where

function where (arr, propertiesObj) {
  var result = arr.filter(function (element) {
    for (var prop in propertiesObj) {
      if (!element.hasOwnProperty(prop)) {
        return false
      }
      if (element[prop] !== propertiesObj[prop]) {
        return false
      }
    }
    return true
  })
  if (result.length === 1) {
    return result[0]
  }
  return result
}
