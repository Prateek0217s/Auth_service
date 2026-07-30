const express = require('express');
const {PORT} = require('./config/server_config');
const app = express();

const start_server = () => {
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT} `);
    });
}

start_server();