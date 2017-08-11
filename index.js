
module.exports = function parse (t) {
  const readableTiming = [
    {
      phase: 'redirect',
      timespan: t.redirectEnd - t.redirectStart,
      timestamps: [
        ['redirectStart', t.redirectStart],
        ['redirectEnd', t.redirectEnd]
      ]
    }, {
      phase: 'App cache',
      timespan: t.domainLookupStart - t.fetchStart,
      timestamps: [
        ['fetchStart', t.fetchStart]
      ]
    }, {
      phase: 'DNS',
      timespan: t.domainLookupEnd - t.domainLookupStart,
      timestamps: [
        ['domainLookupStart', t.domainLookupStart],
        ['domainLookupEnd', t.domainLookupEnd]
      ]
    }, {
      phase: 'TCP',
      timespan: t.connectEnd - t.connectStart,
      timestamps: [
        ['connectStart', t.connectStart],
        // (secureConnectionStart to be supported)
        ['connectEnd', t.connectEnd]
      ]
    }, {
      phase: 'Request-Response',
      timespan: t.responseEnd - t.requestStart,
      timestamps: [
        ['requestStart', t.requestStart],
        ['responseStart', t.responseStart],
        ['responseEnd', t.responseEnd]
      ]
    }, {
      phase: 'Processing-onLoad',
      timespan: t.loadEventEnd - t.domLoading,
      timestamps: [
        ['domLoading', t.domLoading],
        ['domInteractive', t.domInteractive],
        ['domContentLoadedEventStart', t.domContentLoadedEventStart],
        ['domContentLoadedEventEnd', t.domContentLoadedEventEnd],
        ['domComplete', t.domComplete],
        ['loadEventStart', t.loadEventStart],
        ['loadEventEnd', t.loadEventEnd]
      ]
    }
  ]
  return readableTiming
}
