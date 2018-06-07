# rx-template-strings

Util for create Observable of string from ES6-TemplateStrings. The keys can be Observable or any.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# Install

    npm install rx-template-strings --save

    or

    yarn add rx-template-strings

# Usage

```typescript
import { fromTemplateStrings } from "rx-template-strings";
const name = new BehaviorSubject("World");
const greeting = new BehaviorSubject("Hello");

// Non-unique observable will be processing only one time
fromTemplateStrings`${greeting}, ${name}-${name}!`
    .subscribe( (value) => console.log(value) ); // "Hello, World-World!"

```

Look example.ts for more.

# API

```typescript
fromTemplateStrings(strings: TemplateStringsArray, ...keys: any[]): Observable<string>;
```
# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/rx-template-strings.svg
[npm-url]: https://npmjs.org/package/rx-template-strings
[travis-image]: https://travis-ci.org/arvitaly/rx-template-strings.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/rx-template-strings
[daviddm-image]: https://david-dm.org/arvitaly/rx-template-strings.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/rx-template-strings
[coveralls-image]: https://coveralls.io/repos/arvitaly/rx-template-strings/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/rx-template-strings