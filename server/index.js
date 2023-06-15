const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const contractsRoute = require("./routes/contracts");

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())

app.use('/contracts', contractsRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})