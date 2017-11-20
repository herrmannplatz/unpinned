
function pick (object, fn) {
  return Object.entries(object).reduce((newObject, [key, value]) => {
    const pickKey = fn(key, value)
    if (pickKey) {
      newObject[key] = value
    }
    return newObject
  }, {})
}

module.exports = pick
