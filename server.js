const express = require('express');
const path = require('path');
const proxy = require('node-http-proxy');
const fs = require('fs');

const app = express();

proxy.createProxyServer({target: "https://backofficefidon.frb.io/", secure: true, ssl: {
    key: fs.readFileSync('cacert.pem', 'utf8'),
    cert: fs.readFileSync('cacert.pem', 'utf8')
}}).listen(443);


app.use(express.static(__dirname + '/dist/PortfolioFidon'));

app.get('/*', (req, res) => {


res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

});

app.listen(process.env.PORT || 8080);