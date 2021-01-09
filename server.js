const express = require('express');
const path = require('path');
var globalTunnel = require('global-tunnel-ng');

const app = express();


app.use(express.static(__dirname + '/dist/PortfolioFidon'));

app.get('/*', (req, res) => {

globalTunnel.initialize({
    host: "https://172.16.3.33/",
    port: 443
});

res.sendFile(path.join(__dirname + '/dist/PortfolioFidon/index.html'));

});

app.listen(process.env.PORT || 8080);