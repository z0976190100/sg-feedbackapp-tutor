const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

// TODO: routeRequirments() instead requireLogin, requireCredits and etc.
module.exports = app => {
    app.post(
        '/api/surveys', requireLogin, requireCredits, async (req, res) => {

            const {title, subject, body, recipients} = req.body;

            const survey = new Survey(
                {
                    title,
                    subject,
                    body,
                    recipients: recipients
                        .split(',')
                        .map(email => ({email})),
                    _user: req.body.id,
                    dateSent: Date.now()
                }
            );

            console.log(survey);
            console.log(surveyTemplate(survey));
            const mailer = new Mailer(survey, surveyTemplate(survey));

            try {
                await mailer.send();
                await survey.save();
               // req.user.credits -= 1;
                const user = await req.user.save();
                console.log(res);
                res.send(user);
            } catch (e) {
                res.status(422).send(e);
            }
        });
};

// chrome console test:
// const survey = { title: 'tiitle', subject: 'suubject', recipients: 'z0976190100@gmail.com', body: 'sooooo'};
//axios.post('/api/surveys', survey);