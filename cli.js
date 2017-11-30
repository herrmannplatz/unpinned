#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const { resolve } = require('path')

const unpinned = require('./lib')

const { path = process.env.PWD } = argv

const absolutePath = path.endsWith('package.json')
  ? resolve(path)
  : resolve(path, 'package.json')

console.log(`Looking for package.json in path ${absolutePath}`)
const unpinnedDependencies = unpinned(absolutePath)

function prettyPrint (dependencies) {
  let longest = 0
  for (const name in Object.assign({}, dependencies.dependencies, dependencies.devDependencies)) {
    if (name.length > longest) {
      longest = name.length
    }
  }

  for (const key of ['dependencies', 'devDependencies']) {
    for (const name in dependencies[key]) {
      console.log(' ', name, ' '.repeat(longest - name.length), dependencies[key][name])
    }
  }
}

if (unpinnedDependencies) {
  console.log('\nFound unpinned dependencies\n')
  prettyPrint(unpinnedDependencies)
  process.exit(1)
} else {
  console.log("\nCouldn't find any unpinned dependency")
  process.exit()
}
