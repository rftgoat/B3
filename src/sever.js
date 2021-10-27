const express = require('express');
const cors = require('cors');
const app = express();

require('./index')(app);
 
app.use(cors());
app.use(express.json());
app.listen();