<h1 align="center">Random String</h1>
<p align="center">
Random String package provides functionality to generate a random string value.
</p>

<p align="center">
<a href="https://github.com/glowyjs/random-string/releases"><img alt="Version" src="https://img.shields.io/github/release/glowyjs/random-string.svg?label=version&color=green"></a> <a href="https://github.com/glowyjs/random-string"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/glowyjs/random-string/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @glowyjs/random-string
```

## Usage

```js
import randomString from '@glowyjs/random-string';

randomString();
//=> 3Kekravwvb78vP9CQPP1vaRCgi4dZETOktxzf8pF5gufFqh8mOICMqjRP4y8UxoI

randomString(10);
//=> FxvqHNFNUu

randomString(10, '#@$%&+=');
//=> $+#%#&$$=@
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/glowyjs/random-string/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
