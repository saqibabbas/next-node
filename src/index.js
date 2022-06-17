const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SMart').then(() => {
    // port will be configurable later
    const port = process.env.PORT || 8080;
    server = app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    });
});

