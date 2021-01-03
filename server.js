const express = require('express');
const path = require('path');
const proxy = require('global-tunnel-ng');

const app = express();

app.use(express.static(__dirname + '/dist/PortfolioFidon'));
proxy.initialize({
    host: 'https://backofficefidon.frb.io',
    port: 443,
    proxyAuth: "jfidon:degre27if89pOjUc_p02"
});

app.get('/*', (req, res) => {

res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

});

app.listen(process.env.PORT || 8080);