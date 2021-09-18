const pick = require('./pick')

function unpinned (path) {
  if (path == null) {
    throw new Error('Missing argument path')
  }

  const pkg = require(path)

  // keep only the properties that hold dependencies
  const dependencies = pick(pkg, (key, value) => key.toLowerCase().includes('dependencies'))

  // keep only the dependencies that have unpinned versions
  const results = Object.entries(dependencies)
    .reduce((obj, [dependency, packages]) => {
      obj[dependency] = pick(packages, (name, version) => /[\^~x*]/.test(version))
      return obj
    }, {})

  // remove empty results
  const filtered = pick(results, (key, value) => {
    return Object.keys(value).length
  })

  return Object.keys(filtered).length ? filtered : undefined
}

module.exports = unpinned
