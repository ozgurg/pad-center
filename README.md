![Downloads](https://img.shields.io/npm/dm/pad-center)
![Version](https://img.shields.io/github/package-json/v/ozgurg/pad-center)

# pad-center

pad-center fills between start and end characters with whatever character you want while keeping the length constant.
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

All options are required.

| Option    | Type                        |
|-----------|-----------------------------|
| startWith | `string &#124; number`      |
| endWith   | `string &#124; number`      |
| fillWith  | `string &#124; number`      |
| length    | `number` (positive integer) |

## License

[![License](https://img.shields.io/github/license/ozgurg/pad-center)](https://github.com/ozgurg/pad-center/blob/main/LICENSE)
