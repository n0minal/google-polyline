# google-polyline
[![npm](https://img.shields.io/npm/v/google-polyline.svg?style=flat-square)](https://npmjs.com/google-polyline)
[![npm license](https://img.shields.io/npm/l/google-polyline.svg?style=flat-square)](https://npmjs.com/google-polyline)
[![npm downloads](https://img.shields.io/npm/dm/google-polyline.svg?style=flat-square)](https://npmjs.com/google-polyline)
[![build status](https://img.shields.io/travis/jhermsmeier/node-google-polyline.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-google-polyline)

Encodes and decodes [Google's polyline format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save google-polyline
```

## Usage

```js
var polyline = require( 'google-polyline' )
```

```js
polyline.encode([
  [ 38.5, -120.2 ],
  [ 40.7, -120.95 ],
  [ 43.252, -126.453 ]
])
```

```js
> '_p~iF~ps|U_ulLnnqC_mqNvxq`@'
```