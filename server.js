const express = require('express');
const path = require('path');
var globalTunnel = require('global-tunnel-ng');

const app = express();


app.use(express.static(__dirname + '/dist/PortfolioFidon'));

app.get('/*', (req, res) => {

globalTunnel.initialize({
    host: "https://backofficefidon.frb.io/",
    port: 443
});

res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

});

app.listen(process.env.PORT || 8080);