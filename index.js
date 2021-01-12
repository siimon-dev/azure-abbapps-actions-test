const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//helmet disabled else POST from front end to back end returns 403
//const helmet = require('helmet');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 1337;
const app = express();

app.use(cors());
//helmet disabled else POST from front end to back end returns 403
/* app.use(helmet({
    contentSecurityPolicy: false
})); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('ok');
});

app.listen(port, () => {
    console.log(`azure-payway-appsvc03 listening at http://localhost:${port}`)
});
