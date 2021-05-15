const express = require('express');
const fs = require('fs');
const app = express();

app.post('/consultarReporteXFiltros', function (req, res) {
  const numpag = req.query.nroPag;
  console.log("consultarReporteXFiltros");
  console.log("numpag " + numpag);
  if (numpag === '1') {
    const rawdata = fs.readFileSync('7560820562/cotizante.json');
    const student = JSON.parse(rawdata);
    res.json(student);
  } else {
    res.status(500);
  }
});

app.get('/consultarPlanillasEsp', function (req, res) {
  console.log("consultarPlanillasEsp");
  const rawdata = fs.readFileSync('test/test.json');
  const student = JSON.parse(rawdata);
  res.json(student);
});

app.listen(4040, function () {
  console.log('Port 4040!');
});
