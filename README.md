![Downloads](https://img.shields.io/npm/dm/pad-center)
![Version](https://img.shields.io/github/package-json/v/ozgurg/pad-center)

# pad-center

`pad-center` fills between the start and end characters with character you want while maintaining the length.
Like [padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
and [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) but from
center, padCenter!

## Use cases

- Barcode generation
- It's not goal of the package, but you can use it for masking strings
- _Tell me what you are using it for 🙂_

## Install

```shell
npm install pad-center
```

_This package is a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)._

## Usage

```javascript
import padCenter from "pad-center";

padCenter({
    startWith: "053",
    endWith: "0",
    fillWith: "*",
    length: 11
});
// "053*******0"

padCenter({
    startWith: "GH1",
    endWith: "9",
    fillWith: "0",
    length: 10
});
// "GH10000009"

padCenter({
    startWith: "O",
    endWith: "G",
    fillWith: "_",
    length: 8
});
// "O______G"
```

## API

### padCenter(params) : string

#### params

Default: <code>{}</code>\
Type: <code>object</code>\
Required: Yes

#### params.startWith

Type: <code>string | number</code>\
Required: Yes

#### params.endWith

Type: <code>string | number</code>\
Required: Yes

#### params.fillWith

Type: <code>string | number</code>\
Required: Yes

#### params.length

Type: <code>number</code>\
Required: Yes

## License

[![License](https://img.shields.io/github/license/ozgurg/pad-center)](https://github.com/ozgurg/pad-center/blob/main/LICENSE)
