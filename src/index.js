const app = require('./app');
const mongoose = require('mongoose');

let mongoUrl='mongodb://127.0.0.1:27017/SMart';
if(process.env.MONGODB_URI){
    mongoUrl=process.env.MONGODB_URI;
}
mongoose.connect(`${mongoUrl}`).then(() => {
    // port will be configurable later
    const port = process.env.PORT || 8080;
    server = app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    });
});

