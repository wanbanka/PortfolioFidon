const express = require('express');
const path = require('path');
const proxy = require('node-http-proxy');

const app = express();

proxy.createProxyServer({target: "https://backofficefidon.frb.io/"}).listen(80);


app.use(express.static(__dirname + '/dist/PortfolioFidon'));

app.get('/*', (req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

res.end();

});

app.listen(process.env.PORT || 8080);