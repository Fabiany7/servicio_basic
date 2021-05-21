const express = require('express');
const fs = require('fs');
const app = express();

app.post('/consultarReporteXFiltros', function (req, res) {
  const numpag = req.query.nroPag;
  console.log("consultarReporteXFiltros");
  console.log("numpag " + numpag);
  if (numpag === '1') {
    const rawdata = fs.readFileSync('7551279761/cotizante.json');
    const student = JSON.parse(rawdata);
    res.json(student);
  } else {
    const rawdata = fs.readFileSync('7551279761/cotizante.json');
    const student = JSON.parse(rawdata);
    res.status(500).json(student);
    //res.status(500);
  }
});

app.get('/consultarPlanillasEsp', function (req, res) {
  console.log("consultarPlanillasEsp");
  const rawdata = fs.readFileSync('7551279761/planilla.json');
  const student = JSON.parse(rawdata);
  res.json(student);
});

app.listen(4040, function () {
  console.log('Port 4040!');
});
