'use strict';

const usleep = async ms => new Promise(resolve => {

	if(ms < 0)
		return resolve();

	setTimeout(resolve, ms);
});

module.exports.usleep = usleep;

module.exports.sleep = s => usleep(s * 1000);
