const express = require('express');
const path = require('path');
var proxy = require('global-tunnel-ng');

const app = express();

app.use(express.static(__dirname + '/dist/PortfolioFidon'));

process.env.http_proxy = 'https://backofficefidon.frb.io/';
proxy.initialize();

app.get('/*', (req, res) => {

res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

});

app.listen(process.env.PORT || 8080);