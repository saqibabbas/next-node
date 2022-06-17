const app = require('./app');

// port will be configurable later
const port = process.env.PORT || 8080;
server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});