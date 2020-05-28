const ftoc = function(fahranheitTemp) {
  return Number(((fahranheitTemp - 32) * 5 / 9).toFixed(1));
}

const ctof = function(celsiusTemp) {
  return Number((celsiusTemp * 9 / 5 + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
