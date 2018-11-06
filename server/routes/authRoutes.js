const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google', passport.authenticate('google', {
                scope: ['profile', 'email']
            }
        )
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            console.log("< authRoutes.js:16 > IN get('/auth/google/callback') --> response = \n");
            console.log(res);
            res.redirect('/units');
        }
    );

    app.get(
        '/api/logout', (req, res) => {
            req.logout();
            //res.send(req.user);
            res.redirect('/')
        });

    app.get(
        '/api/current_user', (req, res) => {
          // res.send(req.session);
            console.log("< authRoutes.js:31 > IN get('/api/current_user') --> response.data = \n");
            console.log(req.user);
            res.send(req.user);
        })
};

