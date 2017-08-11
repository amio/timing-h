# timing-h [![npm-version][npm-badge]][npm-link]
Human readable performance timing.

Parse [`window.performance.timing`][timing-spec] into this:

```
  [
    // ...
    {
        "phase": "Request-Response",
        "timespan": 150,
        "timestamps": [
            [ "requestStart", 1502441841472 ],
            [ "responseStart", 1502441841571 ],
            [ "responseEnd", 1502441841622 ]
        ]
    },
    // ...
  ]
```

## Usage

`npm install timing-h`

```javascript
import parseTiming from 'timing-h'
parseTiming(window.performance.timing)
```

## License

MIT @ [Amio][author]

[npm-badge]:   https://img.shields.io/npm/v/timing-h.svg?style=flat-square
[npm-link]:    https://www.npmjs.com/package/timing-h
[timing-spec]: https://www.w3.org/TR/navigation-timing/#process
[author]:      https://github.com/amio
