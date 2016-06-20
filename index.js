'use strict';

const appPromise = require('./app');

appPromise.then(app => app.server.listen(process.env.PORT || 5000));
