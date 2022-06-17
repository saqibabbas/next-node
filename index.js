const app = require('./app');

// port will be configurable later
const port = 3000;
server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});