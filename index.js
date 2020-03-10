const express = require('express');
const app = express();
const port = 3000;
const client = require('./client');
app.use(express.json());
app.use(express.static('public'));

app.post('/retrieveProcessApps', (req, res) => {
    console.log(req.body.data);
    client.retrieveProcessApps(req.body['baseUrl'], req.body['username'], req.body['password'], (data) => { res.send(data); });
});

app.post('/retrieveToolkits', (req, res) => {
    console.log(req.body.data);
    client.retrieveToolkits(req.body['baseUrl'], req.body['username'], req.body['password'], (data) => { res.send(data); });
});

app.post('/processAppsSetting', (req, res) => {
    console.log(req.body.data);
    client.processAppsSetting(req.body['baseUrl'], req.body['username'], req.body['password'], req.body['snapshotId'], (data) => { res.send(data); });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


