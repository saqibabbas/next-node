const app = require('./app');
const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || process.env.APPSETTING_MONGODB_URI || 'mongodb://127.0.0.1:27017/SMart').then(() => {
    // port will be configurable later
    const port = process.env.PORT || process.env.APPSETTING_PORT || 8080;
    server = app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    });
});

