![Downloads](https://img.shields.io/npm/dm/pad-center)
![Version](https://img.shields.io/github/package-json/v/ozgurg/pad-center)

# pad-center

pad-center fills between start and end characters with whatever character you want while keeping the length constant.

## Install

```bash
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
    startWith: "O",
    endWith: "G",
    fillWith: "_",
    length: 8
});
// Returns: "O______G"
```

## API

### padCenter({ startWith, endWith, fillWith, length })

| Option    | Is required? | Type                |
|-----------|--------------|---------------------|
| startWith | true         | `string` `number`   |
| endWith   | true         | `string` `number`   |
| fillWith  | true         | `string` `number`   |
| length    | true         | `integer`(positive) |

## License

[![License](https://img.shields.io/github/license/ozgurg/pad-center)](https://github.com/ozgurg/pad-center/blob/main/LICENSE)
