<h1 align="center">:zzz: Nap time :zzz:</h1>

<p align="center">

<a href="https://www.npmjs.com/package/nap-time">
	<img src="https://badge.fury.io/js/nap-time.svg" alt="npm version" />
</a>

<a href="https://travis-ci.org/jormaechea/nap-time">
	<img src="https://travis-ci.org/jormaechea/nap-time.svg?branch=master" alt="Build status" />
</a>

<a href="https://coveralls.io/github/jormaechea/nap-time?branch=master">
	<img src="https://coveralls.io/repos/github/jormaechea/nap-time/badge.svg?branch=master" alt="Coverage status" />
</a>

</p>

<p align="center">
	<strong>A simple non-blocking sleep implementation</strong>
</p>

## :inbox_tray: Installation

```sh
npm install nap-time
```

## :computer: Usage

```js
const { sleep, usleep } = require('nap-time');

(async () => {

	console.log('Do something');

	await sleep(1); // One second

	console.log('Do another thing');

	await usleep(500); // 500ms

	console.log('And done');

})();
```
