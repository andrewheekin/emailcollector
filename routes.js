var Email = require('./models/email');

function getEmails(res) {
  Email.find(function (err, emails) {
    if (err) res.send(err);  // catch an error
    res.json(emails);
  });
}

module.exports = function(app) {

  app.get('/api/emails', function (req, res) {
    getEmails(res);
  });

  app.post('/api/emails', function (req, res) {
    Email.create({
      address: req.body.address
    }, function (err, email) {
      if (err) res.send(err);
      getEmails(res);
    });
  });

  app.delete('/api/emails/:email_id', function (req, res) {
    Email.remove({
      _id: req.params.email_id
    }, function (err, email) {
      if (err) res.send(err);
      getEmails(res);
    });
  });
};