'use strict';
var lcs = require('longest-common-subsequence');

module.exports = function (firstSequence, secondSequence, caseSensitive) {
	var lcsResultLen = lcs(firstSequence, secondSequence, caseSensitive).length;

	if (lcsResultLen === 0) {
		return 0;
	}

	return lcsResultLen * lcsResultLen / (firstSequence.length * secondSequence.length);
};
