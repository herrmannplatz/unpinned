/* eslint-env jest */
const unpinned = require('../')
const { resolve } = require('path')

describe('unpinned', () => {
  it('should throw when path is missing', () => {
    expect(() => unpinned()).toThrow()
  })

  it('should throw if package.json is not at given path', () => {
    expect(() => unpinned('./package.json')).toThrow()
  })

  it('should return object with unpinned dependencies', async () => {
    const path = resolve(__dirname, '__fixtures__/package.failure.json')
    await expect(unpinned(path)).toMatchSnapshot()
  })

  it('should return undefined if all dependencies are pinned', async () => {
    const path = resolve(__dirname, '__fixtures__/package.success.json')
    await expect(unpinned(path)).toMatchSnapshot()
  })
})
