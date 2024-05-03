'use strict';

var processInclude = require('base/util');
processInclude(require('base/main'));

$(document).ready(function () {
    processInclude(require('./components/miniCart'));
});
