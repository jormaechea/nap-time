<h1 align="center">:zzz: Go to sleep :zzz:</h1>

<p align="center">

<a href="https://www.npmjs.com/package/gotosleep">
	<img src="https://badge.fury.io/js/gotosleep.svg" alt="npm version" />
</a>

<a href="https://travis-ci.org/jormaechea/gotosleep">
	<img src="https://travis-ci.org/jormaechea/gotosleep.svg?branch=master" alt="Build status" />
</a>

<a href="https://coveralls.io/github/jormaechea/gotosleep?branch=master">
	<img src="https://coveralls.io/repos/github/jormaechea/gotosleep/badge.svg?branch=master" alt="Coverage status" />
</a>

</p>

<p align="center">
	<strong>A simple non-blocking sleep implementation</strong>
</p>

## :inbox_tray: Installation

```sh
npm install gotosleep
```

## :computer: Usage

```js
const { sleep, usleep } = require('gotosleep');

(async () => {

	console.log('Do something');

	await sleep(1); // One second

	console.log('Do another thing');

	await usleep(500); // 500ms

	console.log('And done');

})();
```
