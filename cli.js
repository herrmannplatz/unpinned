const argv = require('minimist')(process.argv.slice(2))
const { resolve } = require('path')

const unpinned = require('./lib')

const { path = process.env.PWD } = argv

const absolutePath = path.endsWith('package.json')
  ? resolve(path)
  : resolve(path, 'package.json')

console.log(`Looking for package.json in path ${absolutePath}`)
const unpinnedDependencies = unpinned(absolutePath)

if (unpinnedDependencies) {
  console.log('Found unpinned dependencies')
  console.log(JSON.stringify(unpinnedDependencies, null, 2))
  process.exit(1)
} else {
  console.log('Couldnt find any unpinned depedency')
  process.exit()
}
