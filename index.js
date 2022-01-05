const express = require('express');
const routes = require('./routes');
const app = express();

const hostName = '0.0.0.0'
const port  = 5000

app.use(express.json());
app.use(routes);
// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
res.end('Zeet Node')
app.listen(hostName, port,() => console.log(`Server is running at http://${hostName}:${port}/` ));
