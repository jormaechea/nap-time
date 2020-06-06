'use strict';

const assert = require('assert').strict;
const sinon = require('sinon');

const { sleep, usleep } = require('../lib');

describe('Gotosleep', () => {

	let clock;

	before(() => {
		clock = sinon.useFakeTimers();
	});

	after(() => {
		clock.restore();
	});

	describe('sleep', () => {
		it('Should wait for the given seconds before continuing', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await sleep(2);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(2000);

			sinon.assert.calledOnce(afterSpy);
		});

		it('Should execute next in the event loop if zero secs are passed', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await sleep(0);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(0);

			sinon.assert.calledOnce(afterSpy);
		});

		it('Should execute next in the event loop if negative secs are passed', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await sleep(-2);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(0);

			sinon.assert.calledOnce(afterSpy);
		});
	});

	describe('usleep', () => {
		it('Should wait for the given miliseconds before continuing', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await usleep(2000);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(2000);

			sinon.assert.calledOnce(afterSpy);
		});

		it('Should execute next in the event loop if zero ms are passed', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await usleep(0);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(0);

			sinon.assert.calledOnce(afterSpy);
		});

		it('Should execute next in the event loop if negative ms are passed', async () => {

			const beforeSpy = sinon.spy();
			const afterSpy = sinon.spy();

			(async () => {
				beforeSpy();
				await usleep(-2);
				afterSpy();
			})();

			sinon.assert.calledOnce(beforeSpy);
			sinon.assert.notCalled(afterSpy);

			await clock.tickAsync(0);

			sinon.assert.calledOnce(afterSpy);
		});
	});

});
