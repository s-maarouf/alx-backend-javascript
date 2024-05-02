function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  else if (type === 'DIVIDE') {
    if (b === 0) {
      return console.error('Error');;
    }
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;