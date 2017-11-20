# unpinned

[![npm version](https://badge.fury.io/js/unpinned.svg)](https://badge.fury.io/js/unpinned) [![Build Status](https://travis-ci.org/herrmannplatz/unpinned.svg?branch=master)](https://travis-ci.org/herrmannplatz/unpinned)

Checks your package.json for unpinned dependencies

## Install

Install globally:

```
$ npm i unpinned -g
```

Install locally:
```
$ npm i unpinned
```

## Usage

Use it inside your node modules:

```javascript
const unpinned = require('unpinned')

unpinned('path/to/package.json')
```

Use it via cli:
```bash
$ unpinned # will check for package.json in the current directory

$ unpinned ./path/to/package.json
$ unpinned ./path/to/package/json
```
Describe general usage.

## API

### `unpinned(path)`

* **path**: Path to look for package.json.
