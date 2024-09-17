# lezer-metricsql

## Overview

This is a PromQL grammar for the [lezer](https://lezer.codemirror.net/) parser system. It is inspired by the initial
grammar coming from [Prometheus](https://github.com/prometheus/prometheus/blob/main/promql/parser/generated_parser.y)
written in yacc.

**Note**: This library is a lezer-based implementation of the [authoritative, goyacc-based PromQL grammar](https://github.com/prometheus/prometheus/blob/main/promql/parser/generated_parser.y).
Any changes to the authoritative grammar need to be reflected in this package as well.

## Installation

This package is available as an npm package:

```bash
npm install --save @skbkontur-moira/lezer-metricsql
```

**Note**: you will have to manually install the `lezer` dependencies as it is a peer dependency to this package.

```bash
npm install --save @lezer/lr @lezer/highlight
```

## Development

### Building

    npm i
    npm run build

### Testing

    npm run test
