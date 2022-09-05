![Downloads](https://img.shields.io/npm/dm/pad-center)
![Version](https://img.shields.io/github/package-json/v/ozgurg/pad-center)

# pad-center

`pad-center` fills between the start and end characters with whatever character you want while maintaining the length.
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
// Returns: "053*******0"

padCenter({
    startWith: "GH1",
    endWith: "9",
    fillWith: "0",
    length: 10
});
// Returns: "GH10000009"

padCenter({
    startWith: "O",
    endWith: "G",
    fillWith: "_",
    length: 8
});
// Returns: "O______G"
```

## API

### padCenter({ startWith, endWith, fillWith, length })

All params are required.

| Param     | Type                                   |
|-----------|----------------------------------------|
| startWith | <code>string &#124; number</code>      |
| endWith   | <code>string &#124; number</code>      |
| fillWith  | <code>string &#124; number</code>      |
| length    | <code>number</code> (positive integer) |

## License

[![License](https://img.shields.io/github/license/ozgurg/pad-center)](https://github.com/ozgurg/pad-center/blob/main/LICENSE)
