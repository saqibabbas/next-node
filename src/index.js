const app = require('./app');
const mongoose = require('mongoose');

const mongoUrl='mongodb://127.0.0.1:27017';
if(process.env.MONGODB_URI){
    mongoUrl=process.env.MONGODB_URI;
}
mongoose.connect(`${mongoUrl}/SMart`).then(() => {
    // port will be configurable later
    const port = process.env.PORT || 8080;
    server = app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    });
});

