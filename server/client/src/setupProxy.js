const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(
        [
            '/auth/google',
            '/api/logout',
            '/api/current_user',
            '/api/stripe',
            '/api/surveys'
        ],
        {
            target: 'http://localhost:5000/'
        },
    ));
};

