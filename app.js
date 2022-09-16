// https://www.omnicalculator.com/conversion/weight-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const imperialUSRadio = document.getElementById('imperialUSRadio');
const metricRadio = document.getElementById('metricRadio');
const otherRadio = document.getElementById('otherRadio');

let imperialUS;
let metric = v;

// labels of the inpust
const variable = document.getElementById('variable');

imperialUSRadio.addEventListener('click', function() {
  variable.textContent = 'Metric';
  metric = v;
  result.textContent = '';
});

metricRadio.addEventListener('click', function() {
  variable.textContent = 'Imperial/US';
  imperialUS = v;
  result.textContent = '';
});

otherRadio.addEventListener('click', function() {
  variable.textContent = 'Metric';
  metric = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(imperialUSRadio.checked)
    result.textContent = `Imperial/US = ${computeImperialUS().toFixed(2)}`;

  else if(metricRadio.checked)
    result.textContent = `Metric = ${computeMetric().toFixed(2)}`;

  else if(otherRadio.checked)
    result.textContent = `Other = ${computeOther().toFixed(2)}`;
})

// calculation
// g - lb - oz t

function computeImperialUS() {
  return Number(metric.value) / 453.6;
}

function computeMetric() {
  return Number(imperialUS.value) * 453.6;
}

function computeOther() {
  return Number(metric.value) / 31.104;
}